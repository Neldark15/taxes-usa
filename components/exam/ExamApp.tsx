'use client'

import { useEffect, useRef, useState } from 'react'
import { examBanks } from '@/data/exam'
import type { ExamQuestion, ExamPart } from '@/data/exam/types'
import { useExamStore } from '@/stores/useExamStore'

type Lang = 'es' | 'en'
type Mode = 'practice' | 'simulation'
type View = 'start' | 'session' | 'results'

const t = {
  es: {
    title: 'Simulacro Examen EA',
    subtitle: 'Practica para el Special Enrollment Examination del IRS',
    chooseePart: 'Elige la parte a practicar',
    part1: 'Parte 1 — Individuals',
    part2: 'Parte 2 — Businesses',
    part3: 'Parte 3 — Representation, Practices & Procedures',
    part1Desc: 'Filing status, deducciones, créditos, diáspora, residencia fiscal',
    part2Desc: 'Entidades, S-Corp, partnerships, depreciación, §199A, LLC foreign owner',
    part3Desc: 'Circular 230, representación, auditorías, penalidades, collections',
    questions: 'preguntas',
    chooseMode: 'Elige el modo',
    modePractice: 'Modo Práctica',
    modePracticeDesc: 'Sin timer. Feedback inmediato después de cada pregunta.',
    modeSimulation: 'Modo Simulacro',
    modeSimulationDesc: 'Timer de 60 min. Sin feedback hasta el final. Scaled 40-130.',
    start: 'Comenzar',
    submit: 'Enviar examen',
    question: 'Pregunta',
    of: 'de',
    next: 'Siguiente',
    prev: 'Anterior',
    flag: 'Marcar',
    unflag: 'Quitar marca',
    time: 'Tiempo',
    reviewIncomplete: 'Tienes preguntas sin responder. ¿Enviar de todos modos?',
    score: 'Puntaje',
    correct: 'Correctas',
    passing: 'Aprobado: 105 (rango 40-130)',
    passed: '✅ APROBADO',
    failed: '❌ NO APROBADO',
    restart: 'Intentar de nuevo',
    back: 'Volver',
    history: 'Historial de intentos',
    note: 'Nota: las preguntas del banco son de estudio/muestra. NO son las preguntas oficiales de Prometric.',
    explanation: 'Explicación',
    yourAnswer: 'Tu respuesta',
    correctAnswer: 'Respuesta correcta',
    answerReview: 'Revisión de respuestas',
    cancel: 'Cancelar',
    selectPart: 'Selecciona una parte',
  },
  en: {
    title: 'EA Exam Simulator',
    subtitle: 'Practice for the IRS Special Enrollment Examination',
    chooseePart: 'Choose part to practice',
    part1: 'Part 1 — Individuals',
    part2: 'Part 2 — Businesses',
    part3: 'Part 3 — Representation, Practices & Procedures',
    part1Desc: 'Filing status, deductions, credits, diaspora, tax residency',
    part2Desc: 'Entities, S-Corp, partnerships, depreciation, §199A, foreign-owned LLC',
    part3Desc: 'Circular 230, representation, audits, penalties, collections',
    questions: 'questions',
    chooseMode: 'Choose mode',
    modePractice: 'Practice Mode',
    modePracticeDesc: 'No timer. Immediate feedback after each question.',
    modeSimulation: 'Simulation Mode',
    modeSimulationDesc: '60 min timer. No feedback until the end. Scaled 40-130.',
    start: 'Start',
    submit: 'Submit exam',
    question: 'Question',
    of: 'of',
    next: 'Next',
    prev: 'Previous',
    flag: 'Flag',
    unflag: 'Unflag',
    time: 'Time',
    reviewIncomplete: 'You have unanswered questions. Submit anyway?',
    score: 'Score',
    correct: 'Correct',
    passing: 'Passing: 105 (range 40-130)',
    passed: '✅ PASSED',
    failed: '❌ NOT PASSED',
    restart: 'Try again',
    back: 'Back',
    history: 'Attempt history',
    note: 'Note: question bank is study/sample. NOT the official Prometric questions.',
    explanation: 'Explanation',
    yourAnswer: 'Your answer',
    correctAnswer: 'Correct answer',
    answerReview: 'Answer review',
    cancel: 'Cancel',
    selectPart: 'Select a part',
  },
}

export function ExamApp({ lang }: { lang: Lang }) {
  const L = t[lang]
  const record = useExamStore((s) => s.record)
  const attempts = useExamStore((s) => s.attempts)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [view, setView] = useState<View>('start')
  const [selectedPart, setSelectedPart] = useState<ExamPart>(1)
  const [mode, setMode] = useState<Mode>('practice')
  const [questions, setQuestions] = useState<ExamQuestion[]>([])
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [flagged, setFlagged] = useState<Set<number>>(new Set())
  const [currentIdx, setCurrentIdx] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<{ score: number; correct: number; total: number; durationSec: number } | null>(null)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (view === 'session' && mode === 'simulation') {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000)
      return () => {
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }
  }, [view, mode])

  useEffect(() => {
    if (mode === 'simulation' && view === 'session' && elapsed >= 3600) {
      submit(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsed, mode, view])

  const startExam = (part: ExamPart, m: Mode) => {
    const bank = examBanks[part]
    const shuffled = [...bank.questions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
    setSelectedPart(part)
    setAnswers({})
    setFlagged(new Set())
    setCurrentIdx(0)
    setStartTime(Date.now())
    setElapsed(0)
    setMode(m)
    setView('session')
  }

  const select = (qIdx: number, choice: number) => {
    setAnswers((a) => ({ ...a, [qIdx]: choice }))
  }

  const toggleFlag = (qIdx: number) => {
    setFlagged((f) => {
      const next = new Set(f)
      if (next.has(qIdx)) next.delete(qIdx)
      else next.add(qIdx)
      return next
    })
  }

  const submit = (auto = false) => {
    if (!auto && Object.keys(answers).length < questions.length) {
      if (!window.confirm(L.reviewIncomplete)) return
    }
    let correct = 0
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++
    })
    const percent = correct / questions.length
    const scaled = Math.round(40 + percent * 90)
    const durationSec = Math.floor((Date.now() - startTime) / 1000)
    const r = { score: scaled, correct, total: questions.length, durationSec }
    setResult(r)
    record({
      part: selectedPart,
      mode,
      score: scaled,
      correct,
      total: questions.length,
      durationSec,
      completedAt: Date.now(),
    })
    setView('results')
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  // ============ START VIEW ============
  if (view === 'start') {
    const parts: { id: ExamPart; title: string; desc: string; icon: string; count: number }[] = [
      {
        id: 1,
        title: L.part1,
        desc: L.part1Desc,
        icon: '👤',
        count: examBanks[1].questions.length,
      },
      {
        id: 2,
        title: L.part2,
        desc: L.part2Desc,
        icon: '🏢',
        count: examBanks[2].questions.length,
      },
      {
        id: 3,
        title: L.part3,
        desc: L.part3Desc,
        icon: '⚖️',
        count: examBanks[3].questions.length,
      },
    ]
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {L.title}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{L.subtitle}</p>
        </header>

        <p className="text-xs text-amber-700 dark:text-amber-400 mb-4">⚠ {L.note}</p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.chooseePart}</h2>
        <div className="grid gap-3 sm:grid-cols-3 mb-6">
          {parts.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPart(p.id)}
              className={`glass rounded-2xl p-5 text-left transition-all hover:scale-[1.02] ${
                selectedPart === p.id ? 'ring-2 ring-sky-400 shadow-xl' : ''
              }`}
              type="button"
            >
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">{p.title}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">{p.desc}</div>
              <div className="text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                {p.count} {L.questions}
              </div>
            </button>
          ))}
        </div>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.chooseMode}</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <button
            onClick={() => startExam(selectedPart, 'practice')}
            className="glass rounded-xl p-5 text-left hover:scale-[1.02] hover:shadow-lg transition-all"
            type="button"
          >
            <div className="text-3xl mb-2">📖</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{L.modePractice}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{L.modePracticeDesc}</div>
          </button>
          <button
            onClick={() => startExam(selectedPart, 'simulation')}
            className="glass rounded-xl p-5 text-left hover:scale-[1.02] hover:shadow-lg transition-all"
            type="button"
          >
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{L.modeSimulation}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{L.modeSimulationDesc}</div>
          </button>
        </div>

        {mounted && attempts.length > 0 && (
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{L.history}</h3>
            <div className="space-y-2">
              {attempts
                .slice(-10)
                .reverse()
                .map((a, i) => (
                  <div key={i} className="flex items-center justify-between glass-subtle rounded-lg p-3 text-sm">
                    <div>
                      <span className={`font-bold text-xl ${a.score >= 105 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {a.score}
                      </span>
                      <span className="text-slate-500 mx-2">·</span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        P{a.part}
                      </span>
                      <span className="text-slate-500 mx-2">·</span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {a.correct}/{a.total}
                      </span>
                      <span className="text-slate-500 mx-2">·</span>
                      <span className="text-xs text-slate-500">{a.mode}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {new Date(a.completedAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ============ SESSION VIEW ============
  if (view === 'session') {
    const q = questions[currentIdx]
    if (!q) return null
    const answered = answers[currentIdx] !== undefined
    const isFlagged = flagged.has(currentIdx)
    const showFeedback = mode === 'practice' && answered
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
        <div className="glass rounded-xl p-4 mb-4 flex items-center justify-between flex-wrap gap-3">
          <div className="text-sm text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              {L.question} {currentIdx + 1} {L.of} {questions.length}
            </span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="text-xs">Part {selectedPart}</span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="text-xs">{q.topic}</span>
          </div>
          {mode === 'simulation' && (
            <div className={`font-mono font-bold ${elapsed > 3300 ? 'text-rose-600 animate-pulse' : 'text-slate-700 dark:text-slate-300'}`}>
              ⏱ {L.time}: {formatTime(3600 - elapsed)}
            </div>
          )}
          <button
            onClick={() => toggleFlag(currentIdx)}
            className={`text-xs px-3 py-1 rounded-full font-medium ${isFlagged ? 'bg-amber-200 text-amber-900' : 'bg-white/40 text-slate-600 dark:bg-white/10 dark:text-slate-300'}`}
            type="button"
          >
            {isFlagged ? '🚩 ' + L.unflag : '⚑ ' + L.flag}
          </button>
        </div>

        <div className="glass rounded-2xl p-6 mb-4">
          <p className="text-lg font-semibold text-slate-900 dark:text-white mb-6">{q.question}</p>
          <div className="space-y-2">
            {q.choices.map((c, i) => {
              const selected = answers[currentIdx] === i
              const isCorrect = i === q.answer
              let cls = 'w-full text-left rounded-lg px-4 py-3 text-sm font-medium border transition-all '
              if (showFeedback) {
                if (isCorrect) cls += 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-emerald-500/20 dark:border-emerald-400 dark:text-emerald-100'
                else if (selected) cls += 'bg-rose-100 border-rose-400 text-rose-900 dark:bg-rose-500/20 dark:border-rose-400 dark:text-rose-100'
                else cls += 'bg-white/40 border-transparent text-slate-600 dark:bg-white/5 dark:text-slate-400'
              } else if (selected) {
                cls += 'bg-sky-100 border-sky-400 text-sky-900 dark:bg-sky-500/20 dark:border-sky-400 dark:text-sky-100'
              } else {
                cls += 'bg-white/40 border-white/50 text-slate-800 hover:bg-white/60 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10'
              }
              return (
                <button
                  key={i}
                  onClick={() => !showFeedback && select(currentIdx, i)}
                  disabled={showFeedback}
                  className={cls}
                  type="button"
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {c}
                </button>
              )
            })}
          </div>

          {showFeedback && (
            <div className="mt-4 rounded-lg bg-slate-100/70 dark:bg-white/5 p-4 text-sm">
              <div className="font-semibold text-slate-900 dark:text-white mb-1">💡 {L.explanation}</div>
              <div className="text-slate-700 dark:text-slate-300">{lang === 'es' ? q.explanation_es : q.explanation_en}</div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="glass-subtle rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30"
            type="button"
          >
            ← {L.prev}
          </button>

          <div className="hidden sm:flex gap-1 flex-wrap justify-center max-w-lg">
            {questions.map((_, i) => {
              const a = answers[i] !== undefined
              const f = flagged.has(i)
              const active = i === currentIdx
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-7 h-7 text-xs font-bold rounded ${active ? 'ring-2 ring-sky-500' : ''} ${f ? 'bg-amber-300 text-amber-900' : a ? 'bg-emerald-500 text-white' : 'bg-white/40 text-slate-600 dark:bg-white/10 dark:text-slate-400'}`}
                  type="button"
                >
                  {i + 1}
                </button>
              )
            })}
          </div>

          {currentIdx < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md"
              type="button"
            >
              {L.next} →
            </button>
          ) : (
            <button
              onClick={() => submit()}
              className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-md"
              type="button"
            >
              {L.submit}
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              if (window.confirm(L.cancel + '?')) setView('start')
            }}
            className="text-xs text-slate-500 hover:text-rose-500"
            type="button"
          >
            ← {L.cancel}
          </button>
        </div>
      </div>
    )
  }

  // ============ RESULTS VIEW ============
  if (view === 'results' && result) {
    const passed = result.score >= 105
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="glass rounded-2xl p-8 text-center mb-6">
          <div className={`text-7xl font-black mb-2 ${passed ? 'text-emerald-500' : 'text-rose-500'}`}>
            {result.score}
          </div>
          <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {passed ? L.passed : L.failed}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Part {selectedPart} · {result.correct} / {result.total} {L.correct} · {formatTime(result.durationSec)}
          </div>
          <div className="text-xs text-slate-500">{L.passing}</div>
        </div>

        <div className="glass rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{L.answerReview}</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {questions.map((q, i) => {
              const userAns = answers[i]
              const correct = userAns === q.answer
              return (
                <div key={q.id} className={`rounded-lg p-3 border-l-4 ${correct ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/10' : 'border-rose-400 bg-rose-50/50 dark:bg-rose-500/10'}`}>
                  <div className="text-xs font-bold text-slate-500 mb-1">
                    {i + 1}. {q.topic} — {correct ? '✓' : '✗'}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{q.question}</div>
                  {!correct && (
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      <div>
                        <strong>{L.yourAnswer}:</strong> {userAns !== undefined ? q.choices[userAns] : '—'}
                      </div>
                      <div>
                        <strong>{L.correctAnswer}:</strong> {q.choices[q.answer]}
                      </div>
                      <div className="mt-1 italic">{lang === 'es' ? q.explanation_es : q.explanation_en}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setView('start')}
            className="rounded-lg glass-subtle px-5 py-2 font-semibold text-slate-800 dark:text-white"
            type="button"
          >
            ← {L.back}
          </button>
          <button
            onClick={() => startExam(selectedPart, mode)}
            className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-2 font-semibold text-white shadow-md"
            type="button"
          >
            {L.restart}
          </button>
        </div>
      </div>
    )
  }

  return null
}
