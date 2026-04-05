'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useQuizStore } from '@/stores/useQuizStore'
import { useSrsStore } from '@/stores/useSrsStore'
import { useExamStore } from '@/stores/useExamStore'
import { useChecklistStore } from '@/stores/useChecklistStore'
import { useFeesStore } from '@/stores/useFeesStore'
import { chapters } from '@/data/chapters'
import { deck } from '@/data/flashcards/deck'
import { checklists } from '@/data/checklists'

type Lang = 'es' | 'en'

const t = {
  es: {
    title: 'Tu Progreso',
    subtitle: 'Resumen de tu avance en el sistema de aprendizaje',
    chaptersCompleted: 'Capítulos completados',
    quizAverage: 'Promedio quizzes',
    flashcardsDue: 'Flashcards pendientes',
    flashcardsTotal: 'Flashcards totales',
    flashcardsMature: 'Consolidadas',
    lastExamScore: 'Último examen EA',
    examAttempts: 'intentos totales',
    checklistsDone: 'Checklists completados',
    quotesGenerated: 'Cotizaciones guardadas',
    continueLearning: 'Continuar aprendiendo',
    startLearning: 'Empezar a aprender',
    reviewFlashcards: 'Repasar flashcards',
    takeExam: 'Hacer examen',
    noExamYet: 'Sin intentos',
    passed: 'APROBADO',
    failed: 'NO APROBADO',
    of: 'de',
    noProgress: 'Aún no has empezado. ¡Comienza con el primer capítulo!',
  },
  en: {
    title: 'Your Progress',
    subtitle: 'Summary of your learning system progress',
    chaptersCompleted: 'Chapters completed',
    quizAverage: 'Quiz average',
    flashcardsDue: 'Flashcards due',
    flashcardsTotal: 'Total flashcards',
    flashcardsMature: 'Mature',
    lastExamScore: 'Last EA exam',
    examAttempts: 'total attempts',
    checklistsDone: 'Checklists completed',
    quotesGenerated: 'Saved quotes',
    continueLearning: 'Continue learning',
    startLearning: 'Start learning',
    reviewFlashcards: 'Review flashcards',
    takeExam: 'Take exam',
    noExamYet: 'No attempts',
    passed: 'PASSED',
    failed: 'NOT PASSED',
    of: 'of',
    noProgress: 'You haven\'t started yet. Begin with the first chapter!',
  },
}

export function ProgressDashboard({ lang }: { lang: Lang }) {
  const L = t[lang]
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Quiz store
  const chaptersCompleted = useQuizStore((s) => s.chaptersCompleted)
  const allAttempts = useQuizStore((s) => s.attempts)

  // SRS store
  const srsStats = useSrsStore((s) => s.stats)
  const getDue = useSrsStore((s) => s.getDue)

  // Exam store
  const examAttempts = useExamStore((s) => s.attempts)

  // Checklist store
  const checked = useChecklistStore((s) => s.checked)

  // Fees store
  const quotes = useFeesStore((s) => s.quotes)

  if (!mounted) {
    return (
      <div className="glass rounded-2xl p-8 animate-pulse">
        <div className="h-6 w-48 bg-white/20 dark:bg-white/5 rounded mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-white/20 dark:bg-white/5 rounded-xl" />
          ))}
        </div>
      </div>
    )
  }

  // Compute stats
  const totalChapters = chapters.length
  const completedCount = chaptersCompleted.length

  // Quiz average
  const allScores = Object.values(allAttempts).flatMap((list) =>
    list.map((a) => a.score),
  )
  const quizAvg = allScores.length > 0 ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : null

  // Flashcards
  const allCardIds = deck.map((c) => c.id)
  const fcStats = srsStats(allCardIds)
  const fcDue = getDue(allCardIds).length

  // Last exam
  const lastExam = examAttempts.length > 0 ? examAttempts[examAttempts.length - 1] : null

  // Checklists — count how many are "fully done"
  const checklistsDone = checklists.filter((cl) => {
    const slugChecked = checked[cl.slug] ?? {}
    const allItems = cl.groups.flatMap((g) => g.items.map((i) => i.id))
    return allItems.length > 0 && allItems.every((id) => slugChecked[id])
  }).length

  // Quotes
  const quotesCount = quotes.length

  // Has any progress?
  const hasProgress = completedCount > 0 || allScores.length > 0 || fcStats.learning > 0 || fcStats.mature > 0 || examAttempts.length > 0 || checklistsDone > 0 || quotesCount > 0

  // Find next unfinished chapter
  const nextChapter = chapters.find((c) => !chaptersCompleted.includes(c.slug))

  return (
    <section className="glass rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">{L.title}</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{L.subtitle}</p>
        </div>
      </div>

      {!hasProgress ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">📖</div>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">{L.noProgress}</p>
          <Link
            href={`/${lang}/learn/fundamentos-federal`}
            className="inline-flex rounded-lg bg-black dark:bg-white dark:text-black px-6 py-3 font-semibold text-white hover:opacity-80 transition-all"
          >
            {L.startLearning} →
          </Link>
        </div>
      ) : (
        <>
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {/* Chapters */}
            <StatCard
              value={`${completedCount}/${totalChapters}`}
              label={L.chaptersCompleted}
              color="sky"
              icon="📚"
              progress={completedCount / totalChapters}
            />

            {/* Quiz average */}
            <StatCard
              value={quizAvg !== null ? `${quizAvg}%` : '—'}
              label={L.quizAverage}
              color={quizAvg !== null && quizAvg >= 70 ? 'emerald' : 'amber'}
              icon="🎯"
            />

            {/* Flashcards due */}
            <StatCard
              value={String(fcDue)}
              label={L.flashcardsDue}
              sublabel={`${fcStats.mature} ${L.flashcardsMature}`}
              color={fcDue > 0 ? 'violet' : 'emerald'}
              icon="🎴"
            />

            {/* Last exam */}
            <StatCard
              value={lastExam ? String(lastExam.score) : '—'}
              label={L.lastExamScore}
              sublabel={
                lastExam
                  ? `P${lastExam.part} · ${lastExam.score >= 105 ? L.passed : L.failed}`
                  : L.noExamYet
              }
              color={lastExam ? (lastExam.score >= 105 ? 'emerald' : 'rose') : 'slate'}
              icon="📝"
            />

            {/* Checklists */}
            <StatCard
              value={`${checklistsDone}/${checklists.length}`}
              label={L.checklistsDone}
              color="sky"
              icon="✅"
              progress={checklistsDone / checklists.length}
            />

            {/* Quotes */}
            <StatCard
              value={String(quotesCount)}
              label={L.quotesGenerated}
              color="violet"
              icon="💵"
            />
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-3">
            {nextChapter && (
              <Link
                href={`/${lang}/learn/${nextChapter.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-black dark:bg-white dark:text-black px-5 py-2.5 text-sm font-semibold text-white hover:opacity-80 transition-all"
              >
                📚 {L.continueLearning}: {lang === 'es' ? nextChapter.title_es : nextChapter.title_en}
              </Link>
            )}
            {fcDue > 0 && (
              <Link
                href={`/${lang}/flashcards`}
                className="inline-flex items-center gap-2 rounded-lg glass-subtle px-5 py-2.5 text-sm font-semibold text-black dark:text-white hover:bg-white/60 dark:hover:bg-white/10 transition-all"
              >
                🎴 {L.reviewFlashcards} ({fcDue})
              </Link>
            )}
            <Link
              href={`/${lang}/exam`}
              className="inline-flex items-center gap-2 rounded-lg glass-subtle px-5 py-2.5 text-sm font-semibold text-black dark:text-white hover:bg-white/60 dark:hover:bg-white/10 transition-all"
            >
              📝 {L.takeExam}
              {examAttempts.length > 0 && (
                <span className="text-xs text-slate-500">({examAttempts.length} {L.examAttempts})</span>
              )}
            </Link>
          </div>
        </>
      )}
    </section>
  )
}

function StatCard({
  value,
  label,
  sublabel,
  color,
  icon,
  progress,
}: {
  value: string
  label: string
  sublabel?: string
  color: 'sky' | 'emerald' | 'violet' | 'amber' | 'rose' | 'slate'
  icon: string
  progress?: number
}) {
  const colorMap = {
    sky: 'text-black dark:text-white',
    emerald: 'text-black dark:text-white',
    violet: 'text-black dark:text-white',
    amber: 'text-neutral-600 dark:text-neutral-400',
    rose: 'text-neutral-600 dark:text-neutral-400',
    slate: 'text-neutral-500 dark:text-neutral-500',
  }

  return (
    <div className="glass-subtle rounded-xl p-4 relative overflow-hidden">
      <div className="text-lg mb-1">{icon}</div>
      <div className={`text-2xl font-black ${colorMap[color]}`}>{value}</div>
      <div className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 mt-1 leading-tight">
        {label}
      </div>
      {sublabel && (
        <div className="text-[9px] text-slate-500 dark:text-slate-500 mt-0.5">{sublabel}</div>
      )}
      {progress !== undefined && progress > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <div
            className="h-full bg-black dark:bg-white dark:text-black transition-all"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}
