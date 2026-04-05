'use client'

import { useEffect, useMemo, useState } from 'react'
import { deck, type Flashcard } from '@/data/flashcards/deck'
import { useSrsStore } from '@/stores/useSrsStore'

type Lang = 'es' | 'en'

type Labels = {
  title: string
  subtitle: string
  total: string
  due: string
  new: string
  learning: string
  mature: string
  startReview: string
  noCardsDue: string
  showAnswer: string
  again: string
  hard: string
  good: string
  easy: string
  progress: string
  sessionComplete: string
  reviewed: string
  backToDashboard: string
  reset: string
  resetConfirm: string
}

const labels: Record<Lang, Labels> = {
  es: {
    title: 'Flashcards',
    subtitle: 'Repetición espaciada con algoritmo SM-2',
    total: 'Total',
    due: 'Pendientes',
    new: 'Nuevas',
    learning: 'Aprendiendo',
    mature: 'Consolidadas',
    startReview: 'Empezar sesión',
    noCardsDue: '¡No hay tarjetas pendientes por ahora! Vuelve mañana.',
    showAnswer: 'Mostrar respuesta',
    again: 'Otra vez',
    hard: 'Difícil',
    good: 'Bien',
    easy: 'Fácil',
    progress: 'Progreso',
    sessionComplete: '¡Sesión completada!',
    reviewed: 'tarjetas revisadas',
    backToDashboard: 'Volver al panel',
    reset: 'Reiniciar progreso',
    resetConfirm: '¿Seguro que quieres borrar todo el progreso de flashcards?',
  },
  en: {
    title: 'Flashcards',
    subtitle: 'Spaced repetition with SM-2 algorithm',
    total: 'Total',
    due: 'Due',
    new: 'New',
    learning: 'Learning',
    mature: 'Mature',
    startReview: 'Start session',
    noCardsDue: 'No cards due right now! Come back tomorrow.',
    showAnswer: 'Show answer',
    again: 'Again',
    hard: 'Hard',
    good: 'Good',
    easy: 'Easy',
    progress: 'Progress',
    sessionComplete: 'Session complete!',
    reviewed: 'cards reviewed',
    backToDashboard: 'Back to dashboard',
    reset: 'Reset progress',
    resetConfirm: 'Are you sure you want to erase all flashcards progress?',
  },
}

type View = 'dashboard' | 'review' | 'complete'

export function FlashcardsApp({ lang }: { lang: Lang }) {
  const t = labels[lang]
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const getDue = useSrsStore((s) => s.getDue)
  const stats = useSrsStore((s) => s.stats)
  const review = useSrsStore((s) => s.review)
  const reset = useSrsStore((s) => s.reset)

  const allIds = useMemo(() => deck.map((c) => c.id), [])
  const [view, setView] = useState<View>('dashboard')
  const [queue, setQueue] = useState<Flashcard[]>([])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(0)

  // Placeholder stats before mount to avoid hydration mismatch
  const stat = mounted
    ? stats(allIds)
    : { total: allIds.length, due: allIds.length, new: allIds.length, learning: 0, mature: 0 }

  const startSession = () => {
    const dueIds = getDue(allIds)
    const cards = deck.filter((c) => dueIds.includes(c.id))
    // Shuffle
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setQueue(shuffled)
    setIdx(0)
    setFlipped(false)
    setReviewedCount(0)
    if (shuffled.length > 0) setView('review')
  }

  const rateCard = (rating: number) => {
    const current = queue[idx]
    if (!current) return
    review(current.id, rating)
    setReviewedCount((c) => c + 1)
    if (idx + 1 >= queue.length) {
      setView('complete')
    } else {
      setIdx((i) => i + 1)
      setFlipped(false)
    }
  }

  const handleReset = () => {
    if (window.confirm(t.resetConfirm)) {
      reset()
      setView('dashboard')
    }
  }

  // ===== Dashboard view =====
  if (view === 'dashboard') {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-6">
          <StatCard label={t.total} value={stat.total} color="slate" />
          <StatCard label={t.due} value={stat.due} color="sky" />
          <StatCard label={t.new} value={stat.new} color="violet" />
          <StatCard label={t.mature} value={stat.mature} color="emerald" />
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          {stat.due > 0 ? (
            <>
              <div className="text-6xl mb-4">🎴</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.due} {stat.due === 1 ? (lang === 'es' ? 'tarjeta pendiente' : 'card due') : t.due.toLowerCase()}
              </div>
              <button
                onClick={startSession}
                className="mt-4 rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:scale-105"
                type="button"
              >
                {t.startReview} →
              </button>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">✨</div>
              <div className="text-lg text-slate-600 dark:text-slate-400">{t.noCardsDue}</div>
            </>
          )}
        </div>

        {mounted && stat.total > stat.new && (
          <div className="mt-6 text-center">
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
              type="button"
            >
              ↺ {t.reset}
            </button>
          </div>
        )}
      </div>
    )
  }

  // ===== Review view =====
  if (view === 'review') {
    const current = queue[idx]
    if (!current) {
      setView('dashboard')
      return null
    }
    const front = lang === 'es' ? current.front_es : current.front_en
    const back = lang === 'es' ? current.back_es : current.back_en
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {t.progress}: {idx + 1} / {queue.length}
          </div>
          <div className="h-2 flex-1 mx-4 rounded-full bg-white/40 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-violet-600 transition-all"
              style={{ width: `${((idx + (flipped ? 0.5 : 0)) / queue.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass rounded-2xl p-8 min-h-[300px] flex flex-col">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            {current.tags.join(' · ')}
          </div>
          <div className="flex-1 flex items-center justify-center text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{front}</div>
              {flipped && (
                <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-white/10">
                  <div className="text-lg text-slate-700 dark:text-slate-300">{back}</div>
                </div>
              )}
            </div>
          </div>

          {!flipped ? (
            <button
              onClick={() => setFlipped(true)}
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 py-3 font-semibold text-white shadow-lg"
              type="button"
            >
              {t.showAnswer}
            </button>
          ) : (
            <div className="mt-6 grid grid-cols-4 gap-2">
              <RatingButton
                label={t.again}
                onClick={() => rateCard(0)}
                color="from-rose-500 to-rose-600"
                hint="<1min"
              />
              <RatingButton
                label={t.hard}
                onClick={() => rateCard(3)}
                color="from-amber-500 to-amber-600"
                hint="~10min"
              />
              <RatingButton
                label={t.good}
                onClick={() => rateCard(4)}
                color="from-emerald-500 to-emerald-600"
                hint="1d+"
              />
              <RatingButton
                label={t.easy}
                onClick={() => rateCard(5)}
                color="from-sky-500 to-sky-600"
                hint="4d+"
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  // ===== Complete view =====
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="glass rounded-2xl p-12 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t.sessionComplete}
        </div>
        <div className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          {reviewedCount} {t.reviewed}
        </div>
        <button
          onClick={() => setView('dashboard')}
          className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg"
          type="button"
        >
          ← {t.backToDashboard}
        </button>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: 'slate' | 'sky' | 'violet' | 'emerald'
}) {
  const colorClass = {
    slate: 'text-slate-900 dark:text-white',
    sky: 'text-sky-600 dark:text-sky-400',
    violet: 'text-violet-600 dark:text-violet-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
  }[color]
  return (
    <div className="glass rounded-xl p-4 text-center">
      <div className={`text-3xl font-bold ${colorClass}`}>{value}</div>
      <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">{label}</div>
    </div>
  )
}

function RatingButton({
  label,
  onClick,
  color,
  hint,
}: {
  label: string
  onClick: () => void
  color: string
  hint: string
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-gradient-to-br ${color} py-2.5 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all`}
      type="button"
    >
      <div className="text-sm">{label}</div>
      <div className="text-[10px] opacity-80">{hint}</div>
    </button>
  )
}
