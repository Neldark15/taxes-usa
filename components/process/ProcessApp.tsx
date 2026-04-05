'use client'

import { useState } from 'react'
import { processSteps } from '@/data/process/steps'

type Lang = 'es' | 'en'

const labels = {
  es: {
    title: 'Proceso del Negocio',
    subtitle: 'Guía paso a paso completa: desde la captación del cliente hasta la entrega final',
    step: 'Paso',
    of: 'de',
    summary: 'Resumen',
    whatToAsk: '❓ Qué preguntar al cliente',
    documents: '📄 Documentos requeridos',
    substeps: '📋 Pasos detallados',
    tools: '🛠️ Herramientas',
    warning: '⚠️ Advertencia crítica',
    time: '⏱️ Tiempo estimado',
    why: 'Por qué:',
    prev: 'Anterior',
    next: 'Siguiente',
    overview: 'Vista general',
  },
  en: {
    title: 'Business Process',
    subtitle: 'Complete step-by-step guide: from client acquisition to final delivery',
    step: 'Step',
    of: 'of',
    summary: 'Summary',
    whatToAsk: '❓ What to ask the client',
    documents: '📄 Required documents',
    substeps: '📋 Detailed steps',
    tools: '🛠️ Tools',
    warning: '⚠️ Critical warning',
    time: '⏱️ Estimated time',
    why: 'Why:',
    prev: 'Previous',
    next: 'Next',
    overview: 'Overview',
  },
}

export function ProcessApp({ lang }: { lang: Lang }) {
  const L = labels[lang]
  const [currentIdx, setCurrentIdx] = useState<number | 'overview'>('overview')

  if (currentIdx === 'overview') {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {L.title}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{L.subtitle}</p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {processSteps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setCurrentIdx(i)}
              className="glass rounded-2xl p-5 text-left transition-all hover:scale-[1.02] hover:shadow-lg group"
              type="button"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-3xl text-white shadow-lg shadow-sky-500/30">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-sky-600 shadow-md dark:bg-slate-800 dark:text-sky-400">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight mb-1">
                    {lang === 'es' ? step.title_es : step.title_en}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                    {lang === 'es' ? step.summary_es : step.summary_en}
                  </p>
                  {step.timeEstimate_es && (
                    <div className="mt-2 text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                      ⏱ {lang === 'es' ? step.timeEstimate_es : step.timeEstimate_en}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const step = processSteps[currentIdx]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <button
        onClick={() => setCurrentIdx('overview')}
        className="mb-4 text-sm text-sky-600 dark:text-sky-400 hover:underline"
        type="button"
      >
        ← {L.overview}
      </button>

      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-4xl text-white shadow-lg">
              {step.icon}
            </div>
            <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-sky-600 shadow-md dark:bg-slate-800 dark:text-sky-400">
              {step.number}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              {L.step} {step.number} {L.of} {processSteps.length}
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {lang === 'es' ? step.title_es : step.title_en}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              {lang === 'es' ? step.summary_es : step.summary_en}
            </p>
            {step.timeEstimate_es && (
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-sky-100 dark:bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                {L.time}: {lang === 'es' ? step.timeEstimate_es : step.timeEstimate_en}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* What to ask */}
      {step.whatToAsk_es && step.whatToAsk_es.length > 0 && (
        <section className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.whatToAsk}</h2>
          <ul className="space-y-2">
            {(lang === 'es' ? step.whatToAsk_es : step.whatToAsk_en!).map((q, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="font-bold text-sky-600 dark:text-sky-400 shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Documents Required */}
      {step.documentsRequired && step.documentsRequired.length > 0 && (
        <section className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.documents}</h2>
          <div className="space-y-3">
            {step.documentsRequired.map((doc) => (
              <div key={doc.key} className="rounded-lg bg-white/40 dark:bg-white/5 p-4">
                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                  📎 {lang === 'es' ? doc.title_es : doc.title_en}
                </div>
                <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">{L.why}</span>{' '}
                  {lang === 'es' ? doc.why_es : doc.why_en}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Substeps */}
      <section className="glass rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.substeps}</h2>
        <ol className="space-y-3">
          {(lang === 'es' ? step.substeps_es : step.substeps_en).map((s, i) => (
            <li key={i} className="flex gap-3">
              <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-600 text-xs font-black text-white">
                {i + 1}
              </div>
              <div className="flex-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {s}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Tools */}
      {step.tools_es && step.tools_es.length > 0 && (
        <section className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{L.tools}</h2>
          <div className="flex flex-wrap gap-2">
            {(lang === 'es' ? step.tools_es : step.tools_en!).map((tool, i) => (
              <span
                key={i}
                className="rounded-full bg-violet-100 dark:bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Warning */}
      {step.warning_es && (
        <section className="rounded-2xl border-l-4 border-rose-500 bg-rose-50/80 dark:bg-rose-500/10 p-6 mb-6 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-rose-700 dark:text-rose-300 mb-2">{L.warning}</h2>
          <p className="text-sm text-rose-900 dark:text-rose-200">
            {lang === 'es' ? step.warning_es : step.warning_en}
          </p>
        </section>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 mt-8">
        <button
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
          className="glass-subtle rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30"
          type="button"
        >
          ← {L.prev}
        </button>
        <div className="text-xs text-slate-500">
          {currentIdx + 1} / {processSteps.length}
        </div>
        <button
          onClick={() => setCurrentIdx(Math.min(processSteps.length - 1, currentIdx + 1))}
          disabled={currentIdx === processSteps.length - 1}
          className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:opacity-30"
          type="button"
        >
          {L.next} →
        </button>
      </div>
    </div>
  )
}
