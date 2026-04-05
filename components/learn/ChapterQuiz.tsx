'use client'

import { useEffect, useState } from 'react'
import type { QuizBank } from '@/data/quizzes/types'
import { useQuizStore } from '@/stores/useQuizStore'

type Lang = 'es' | 'en'

type Labels = {
  question: string
  of: string
  submit: string
  score: string
  retry: string
  correct: string
  incorrect: string
  explanation: string
  markComplete: string
  completed: string
}

const labels: Record<Lang, Labels> = {
  es: {
    question: 'Pregunta',
    of: 'de',
    submit: 'Enviar respuestas',
    score: 'Puntaje',
    retry: 'Intentar de nuevo',
    correct: 'Correcto',
    incorrect: 'Incorrecto',
    explanation: 'Explicación',
    markComplete: 'Marcar capítulo como completado',
    completed: '¡Capítulo completado!',
  },
  en: {
    question: 'Question',
    of: 'of',
    submit: 'Submit answers',
    score: 'Score',
    retry: 'Try again',
    correct: 'Correct',
    incorrect: 'Incorrect',
    explanation: 'Explanation',
    markComplete: 'Mark chapter as complete',
    completed: 'Chapter completed!',
  },
}

export function ChapterQuiz({
  chapterSlug,
  quiz,
  lang,
}: {
  chapterSlug: string
  quiz: QuizBank
  lang: Lang
}) {
  const t = labels[lang]
  const recordAttempt = useQuizStore((s) => s.recordAttempt)
  const markComplete = useQuizStore((s) => s.markChapterComplete)
  const completed = useQuizStore((s) => s.chaptersCompleted.includes(chapterSlug))

  type Item = { q: (typeof quiz)[number]; order: number[]; correctIdx: number }

  // Initial stable order (matches server render)
  const initialItems: Item[] = quiz.map((q) => ({
    q,
    order: q.choices_es.map((_, i) => i),
    correctIdx: q.answer,
  }))

  const [shuffled, setShuffled] = useState<Item[]>(initialItems)
  const [seed, setSeed] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  // Shuffle only after mount to avoid hydration mismatch
  useEffect(() => {
    const items: Item[] = quiz.map((q) => {
      const order = q.choices_es.map((_, i) => i).sort(() => Math.random() - 0.5)
      return { q, order, correctIdx: order.indexOf(q.answer) }
    })
    setShuffled(items.sort(() => Math.random() - 0.5))
  }, [seed, quiz])

  const select = (qIdx: number, choiceIdx: number) => {
    if (submitted) return
    setAnswers((a) => ({ ...a, [qIdx]: choiceIdx }))
  }

  const submit = () => {
    let correct = 0
    shuffled.forEach((item, i) => {
      if (answers[i] === item.correctIdx) correct++
    })
    const score = Math.round((correct / shuffled.length) * 100)
    setSubmitted(true)
    recordAttempt({
      chapterSlug,
      score,
      correct,
      total: shuffled.length,
      completedAt: Date.now(),
    })
  }

  const retry = () => {
    setAnswers({})
    setSubmitted(false)
    setSeed((s) => s + 1)
  }

  const totalAnswered = Object.keys(answers).length
  const correctCount = shuffled.filter((item, i) => answers[i] === item.correctIdx).length
  const score = submitted ? Math.round((correctCount / shuffled.length) * 100) : 0
  const passed = score >= 70

  return (
    <div className="my-8 not-prose">
      <div className="glass rounded-2xl p-6">
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          🎯 Quiz
        </h3>

        <div className="space-y-6">
          {shuffled.map((item, qIdx) => {
            const questionText = lang === 'es' ? item.q.question_es : item.q.question_en
            const choices = lang === 'es' ? item.q.choices_es : item.q.choices_en
            const explanation = lang === 'es' ? item.q.explanation_es : item.q.explanation_en
            return (
              <div key={item.q.id} className="border-t border-slate-200/50 dark:border-white/10 pt-5 first:border-t-0 first:pt-0">
                <div className="mb-3">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                    {t.question} {qIdx + 1} {t.of} {shuffled.length}
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">{questionText}</p>
                </div>
                <div className="space-y-2">
                  {item.order.map((origIdx, displayIdx) => {
                    const selected = answers[qIdx] === displayIdx
                    const isCorrect = displayIdx === item.correctIdx
                    let cls =
                      'w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium transition-all border '
                    if (submitted) {
                      if (isCorrect) {
                        cls += 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-emerald-500/20 dark:border-emerald-400 dark:text-emerald-100'
                      } else if (selected) {
                        cls += 'bg-rose-100 border-rose-400 text-rose-900 dark:bg-rose-500/20 dark:border-rose-400 dark:text-rose-100'
                      } else {
                        cls += 'bg-white/40 border-transparent text-slate-600 dark:bg-white/5 dark:text-slate-400'
                      }
                    } else if (selected) {
                      cls += 'bg-sky-100 border-sky-400 text-sky-900 dark:bg-sky-500/20 dark:border-sky-400 dark:text-sky-100'
                    } else {
                      cls += 'bg-white/40 border-white/50 text-slate-800 hover:bg-white/60 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10'
                    }
                    return (
                      <button
                        key={displayIdx}
                        onClick={() => select(qIdx, displayIdx)}
                        disabled={submitted}
                        className={cls}
                        type="button"
                      >
                        <span className="font-bold mr-2">{String.fromCharCode(65 + displayIdx)}.</span>
                        {choices[origIdx]}
                      </button>
                    )
                  })}
                </div>
                {submitted && (
                  <div className="mt-3 rounded-lg bg-slate-100/60 dark:bg-white/5 p-3 text-sm">
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.explanation}:
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">{explanation}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/50 dark:border-white/10 pt-5">
          {!submitted ? (
            <button
              onClick={submit}
              disabled={totalAnswered < shuffled.length}
              className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              {t.submit} ({totalAnswered}/{shuffled.length})
            </button>
          ) : (
            <>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {t.score}: {score}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {correctCount} / {shuffled.length}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={retry}
                  className="rounded-lg bg-white/60 px-4 py-2 font-semibold text-slate-800 hover:bg-white/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                  type="button"
                >
                  {t.retry}
                </button>
                {passed && !completed && (
                  <button
                    onClick={() => markComplete(chapterSlug)}
                    className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600"
                    type="button"
                  >
                    {t.markComplete}
                  </button>
                )}
                {completed && (
                  <span className="rounded-lg bg-emerald-100 px-4 py-2 font-semibold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300">
                    ✓ {t.completed}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
