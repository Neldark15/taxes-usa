'use client'

import { useEffect, useState } from 'react'
import type { Checklist } from '@/data/checklists'
import { useChecklistStore } from '@/stores/useChecklistStore'

type Lang = 'es' | 'en'

const labels = {
  es: {
    progress: 'Progreso',
    reset: 'Reiniciar',
    resetConfirm: '¿Seguro que quieres reiniciar este checklist?',
    complete: 'Completado',
    print: '🖨️ Imprimir',
  },
  en: {
    progress: 'Progress',
    reset: 'Reset',
    resetConfirm: 'Reset this checklist?',
    complete: 'Complete',
    print: '🖨️ Print',
  },
}

export function ChecklistView({ checklist, lang }: { checklist: Checklist; lang: Lang }) {
  const L = labels[lang]
  const toggle = useChecklistStore((s) => s.toggle)
  const resetSlug = useChecklistStore((s) => s.resetSlug)
  const checked = useChecklistStore((s) => s.checked)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const slugChecked = checked[checklist.slug] ?? {}
  const allItemIds = checklist.groups.flatMap((g) => g.items.map((i) => i.id))
  const doneCount = mounted ? allItemIds.filter((id) => slugChecked[id]).length : 0
  const total = allItemIds.length
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-3xl text-white shadow-lg">
            {checklist.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {lang === 'es' ? checklist.title_es : checklist.title_en}
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {lang === 'es' ? checklist.description_es : checklist.description_en}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className="text-slate-700 dark:text-slate-300">
              {L.progress}: {doneCount} / {total}
            </span>
            <span className="text-sky-600 dark:text-sky-400">{pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/40 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="text-xs rounded-md bg-white/60 dark:bg-white/10 px-3 py-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:bg-white/80"
            type="button"
          >
            {L.print}
          </button>
          {mounted && doneCount > 0 && (
            <button
              onClick={() => window.confirm(L.resetConfirm) && resetSlug(checklist.slug)}
              className="text-xs text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
              type="button"
            >
              ↺ {L.reset}
            </button>
          )}
        </div>
      </div>

      {/* Groups */}
      <div className="space-y-4 print:space-y-2">
        {checklist.groups.map((group) => {
          const groupDone = mounted ? group.items.filter((i) => slugChecked[i.id]).length : 0
          const groupTotal = group.items.length
          return (
            <section key={group.id} className="glass rounded-2xl p-5">
              <header className="mb-3 flex items-center justify-between">
                <h2 className="font-bold text-slate-900 dark:text-white">
                  {lang === 'es' ? group.title_es : group.title_en}
                </h2>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {groupDone}/{groupTotal}
                </span>
              </header>
              <ul className="space-y-2">
                {group.items.map((item) => {
                  const isChecked = mounted ? Boolean(slugChecked[item.id]) : false
                  return (
                    <li key={item.id}>
                      <label
                        className={`flex items-start gap-3 cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/30 dark:hover:bg-white/5 ${isChecked ? 'opacity-60' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(checklist.slug, item.id)}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm text-slate-800 dark:text-slate-200 ${isChecked ? 'line-through' : ''}`}
                          >
                            {lang === 'es' ? item.text_es : item.text_en}
                          </div>
                          {item.note_es && (
                            <div className="mt-0.5 text-xs italic text-slate-500 dark:text-slate-400">
                              💡 {lang === 'es' ? item.note_es : item.note_en}
                            </div>
                          )}
                        </div>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
