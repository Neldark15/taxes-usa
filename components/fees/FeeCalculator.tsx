'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { feeItems, complexityFactors, type Complexity, type FeePreset } from '@/data/fees/base-rates'
import { useFeesStore } from '@/stores/useFeesStore'

type Lang = 'es' | 'en'

const L = {
  es: {
    title: 'Calculadora de Honorarios',
    subtitle: 'Cotiza clientes basado en formularios, schedules y complejidad',
    preset: 'Preset de mercado',
    natp: 'NATP (promedio USA)',
    diaspora: 'Diáspora (competitivo)',
    custom: 'Personalizado',
    settings: '⚙️ Personalizar tarifas',
    base: 'Return base',
    schedules: 'Schedules adicionales',
    states: 'State returns',
    addons: 'Add-ons',
    complexity: 'Complejidad del caso',
    simple: 'Simple',
    medium: 'Medio',
    complex: 'Complejo',
    complexitySimple: 'Multiplicador 1.0x',
    complexityMedium: 'Multiplicador 1.3x',
    complexityComplex: 'Multiplicador 1.6x',
    discount: 'Descuento',
    clientName: 'Nombre del cliente (opcional)',
    subtotal: 'Subtotal',
    withComplexity: 'Con multiplicador',
    total: 'Total',
    copy: '📋 Copiar cotización',
    copied: '✅ ¡Copiada!',
    save: '💾 Guardar',
    saved: 'Cotización guardada',
    history: 'Historial de cotizaciones',
    noHistory: 'Sin cotizaciones guardadas',
    deleteQuote: 'Eliminar',
    reset: 'Limpiar',
    disclaimer: '⚠️ Circular 230 §10.27: prohibido cobrar porcentaje del refund en returns federales originales.',
    qty: 'Cantidad',
  },
  en: {
    title: 'Fee Calculator',
    subtitle: 'Quote clients based on forms, schedules and complexity',
    preset: 'Market preset',
    natp: 'NATP (US average)',
    diaspora: 'Diaspora (competitive)',
    custom: 'Custom',
    settings: '⚙️ Customize rates',
    base: 'Base return',
    schedules: 'Additional schedules',
    states: 'State returns',
    addons: 'Add-ons',
    complexity: 'Case complexity',
    simple: 'Simple',
    medium: 'Medium',
    complex: 'Complex',
    complexitySimple: 'Multiplier 1.0x',
    complexityMedium: 'Multiplier 1.3x',
    complexityComplex: 'Multiplier 1.6x',
    discount: 'Discount',
    clientName: 'Client name (optional)',
    subtotal: 'Subtotal',
    withComplexity: 'With multiplier',
    total: 'Total',
    copy: '📋 Copy quote',
    copied: '✅ Copied!',
    save: '💾 Save',
    saved: 'Quote saved',
    history: 'Quote history',
    noHistory: 'No saved quotes',
    deleteQuote: 'Delete',
    reset: 'Clear',
    disclaimer: '⚠️ Circular 230 §10.27: contingent fees (% of refund) prohibited on original federal returns.',
    qty: 'Qty',
  },
}

export function FeeCalculator({ lang }: { lang: Lang }) {
  const t = L[lang]
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const preset = useFeesStore((s) => s.preset)
  const setPreset = useFeesStore((s) => s.setPreset)
  const getRate = useFeesStore((s) => s.getRate)
  const addQuote = useFeesStore((s) => s.addQuote)
  const quotes = useFeesStore((s) => s.quotes)
  const deleteQuote = useFeesStore((s) => s.deleteQuote)

  const [selectedBase, setSelectedBase] = useState('base-1040-simple')
  const [schedules, setSchedules] = useState<Record<string, boolean>>({})
  const [stateCounts, setStateCounts] = useState<Record<string, number>>({})
  const [addons, setAddons] = useState<Record<string, number>>({})
  const [complexity, setComplexity] = useState<Complexity>('simple')
  const [discount, setDiscount] = useState(0)
  const [clientName, setClientName] = useState('')
  const [copyState, setCopyState] = useState('')
  const [saveState, setSaveState] = useState('')

  const baseItems = feeItems.filter((i) => i.category === 'base')
  const scheduleItems = feeItems.filter((i) => i.category === 'schedule')
  const stateItems = feeItems.filter((i) => i.category === 'state')
  const addonItems = feeItems.filter((i) => i.category === 'addon')

  const lineItems = useMemo(() => {
    const lines: { id: string; label: string; qty: number; unitPrice: number; total: number }[] = []
    // Base
    const base = feeItems.find((i) => i.id === selectedBase)
    if (base) {
      const price = getRate(selectedBase)
      lines.push({
        id: base.id,
        label: lang === 'es' ? base.label_es : base.label_en,
        qty: 1,
        unitPrice: price,
        total: price,
      })
    }
    // Schedules
    for (const s of scheduleItems) {
      if (schedules[s.id]) {
        const price = getRate(s.id)
        lines.push({
          id: s.id,
          label: lang === 'es' ? s.label_es : s.label_en,
          qty: 1,
          unitPrice: price,
          total: price,
        })
      }
    }
    // States
    for (const st of stateItems) {
      const qty = stateCounts[st.id] ?? 0
      if (qty > 0) {
        const price = getRate(st.id)
        lines.push({
          id: st.id,
          label: lang === 'es' ? st.label_es : st.label_en,
          qty,
          unitPrice: price,
          total: price * qty,
        })
      }
    }
    // Addons
    for (const a of addonItems) {
      const qty = addons[a.id] ?? 0
      if (qty > 0) {
        const price = getRate(a.id)
        lines.push({
          id: a.id,
          label: lang === 'es' ? a.label_es : a.label_en,
          qty,
          unitPrice: price,
          total: price * qty,
        })
      }
    }
    return lines
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBase, schedules, stateCounts, addons, preset, lang, mounted])

  const subtotal = lineItems.reduce((acc, l) => acc + l.total, 0)
  const afterComplexity = Math.round(subtotal * complexityFactors[complexity])
  const total = Math.max(0, afterComplexity - discount)

  const handleCopy = async () => {
    const header = lang === 'es' ? 'Cotización — Preparación de Impuestos' : 'Quote — Tax Preparation'
    const clientLine = clientName ? `${lang === 'es' ? 'Cliente' : 'Client'}: ${clientName}\n` : ''
    const lines = lineItems
      .map((l) => {
        const q = l.qty > 1 ? ` x${l.qty}` : ''
        return `${l.label}${q}  —  $${l.total.toFixed(0)}`
      })
      .join('\n')
    const mult = complexity !== 'simple' ? `\n${t.complexity}: ${t[complexity]} (${complexityFactors[complexity]}x) → $${afterComplexity}` : ''
    const disc = discount > 0 ? `\n${t.discount}: -$${discount}` : ''
    const text = `${header}\n${clientLine}${'─'.repeat(42)}\n${lines}\n${'─'.repeat(42)}\n${t.subtotal}: $${subtotal}${mult}${disc}\n${t.total}: $${total}\n\n${t.disclaimer}`
    try {
      await navigator.clipboard.writeText(text)
      setCopyState(t.copied)
      setTimeout(() => setCopyState(''), 2500)
    } catch {
      setCopyState('Error')
    }
  }

  const handleSave = () => {
    const items = [
      { id: selectedBase, qty: 1 },
      ...Object.keys(schedules).filter((k) => schedules[k]).map((id) => ({ id, qty: 1 })),
      ...Object.entries(stateCounts).filter(([, q]) => q > 0).map(([id, qty]) => ({ id, qty })),
      ...Object.entries(addons).filter(([, q]) => q > 0).map(([id, qty]) => ({ id, qty })),
    ]
    addQuote({
      id: `q-${Date.now()}`,
      clientName: clientName || '(sin nombre)',
      items,
      complexity,
      discount,
      total,
      createdAt: Date.now(),
    })
    setSaveState(t.saved)
    setTimeout(() => setSaveState(''), 2500)
  }

  const reset = () => {
    setSelectedBase('base-1040-simple')
    setSchedules({})
    setStateCounts({})
    setAddons({})
    setComplexity('simple')
    setDiscount(0)
    setClientName('')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-6">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.title}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{t.subtitle}</p>
          </div>
          <Link
            href={`/${lang}/fees/settings`}
            className="glass-subtle rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10"
          >
            {t.settings}
          </Link>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* ====== LEFT: Inputs ====== */}
        <div className="lg:col-span-2 space-y-4">
          {/* Preset selector */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.preset}</h2>
            <div className="grid grid-cols-3 gap-2">
              {(['natp', 'diaspora', 'custom'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPreset(p as FeePreset | 'custom')}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    preset === p
                      ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow'
                      : 'bg-white/40 text-slate-700 dark:bg-white/10 dark:text-slate-300 hover:bg-white/60'
                  }`}
                  type="button"
                >
                  {t[p]}
                </button>
              ))}
            </div>
          </section>

          {/* Base return */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.base}</h2>
            <div className="space-y-2">
              {baseItems.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-all ${
                    selectedBase === item.id
                      ? 'bg-sky-100 dark:bg-sky-500/20 ring-2 ring-sky-400'
                      : 'bg-white/40 dark:bg-white/5 hover:bg-white/60'
                  }`}
                >
                  <input
                    type="radio"
                    name="base"
                    value={item.id}
                    checked={selectedBase === item.id}
                    onChange={() => setSelectedBase(item.id)}
                    className="h-4 w-4 text-sky-600"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {lang === 'es' ? item.label_es : item.label_en}
                    </div>
                    {item.description_es && (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {lang === 'es' ? item.description_es : item.description_en}
                      </div>
                    )}
                  </div>
                  {mounted && (
                    <div className="text-sm font-bold text-sky-600 dark:text-sky-400">
                      ${getRate(item.id)}
                    </div>
                  )}
                </label>
              ))}
            </div>
          </section>

          {/* Schedules */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.schedules}</h2>
            <div className="space-y-2">
              {scheduleItems.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3 cursor-pointer hover:bg-white/60"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(schedules[item.id])}
                    onChange={() => setSchedules((s) => ({ ...s, [item.id]: !s[item.id] }))}
                    className="h-4 w-4 rounded text-sky-600"
                  />
                  <div className="flex-1 min-w-0 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'es' ? item.label_es : item.label_en}
                  </div>
                  {mounted && (
                    <div className="text-sm font-bold text-sky-600 dark:text-sky-400">
                      +${getRate(item.id)}
                    </div>
                  )}
                </label>
              ))}
            </div>
          </section>

          {/* States */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.states}</h2>
            <div className="space-y-2">
              {stateItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3">
                  <div className="flex-1 min-w-0 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {lang === 'es' ? item.label_es : item.label_en}
                  </div>
                  {mounted && (
                    <div className="text-xs text-sky-600 dark:text-sky-400">
                      +${getRate(item.id)} c/u
                    </div>
                  )}
                  <NumberStepper
                    value={stateCounts[item.id] ?? 0}
                    onChange={(v) => setStateCounts((s) => ({ ...s, [item.id]: v }))}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Addons */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.addons}</h2>
            <div className="space-y-2">
              {addonItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {lang === 'es' ? item.label_es : item.label_en}
                    </div>
                    {item.description_es && (
                      <div className="text-xs text-slate-500">
                        {lang === 'es' ? item.description_es : item.description_en}
                      </div>
                    )}
                  </div>
                  {mounted && (
                    <div className="text-xs text-sky-600 dark:text-sky-400">
                      +${getRate(item.id)}
                    </div>
                  )}
                  <NumberStepper
                    value={addons[item.id] ?? 0}
                    onChange={(v) => setAddons((a) => ({ ...a, [item.id]: v }))}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Complexity */}
          <section className="glass rounded-2xl p-5">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">{t.complexity}</h2>
            <div className="grid grid-cols-3 gap-2">
              {(['simple', 'medium', 'complex'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setComplexity(c)}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    complexity === c
                      ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow'
                      : 'bg-white/40 text-slate-700 dark:bg-white/10 dark:text-slate-300 hover:bg-white/60'
                  }`}
                  type="button"
                >
                  <div>{t[c]}</div>
                  <div className="text-[10px] opacity-70 mt-0.5">{complexityFactors[c]}x</div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ====== RIGHT: Summary ====== */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-5 sticky top-24">
            <input
              type="text"
              placeholder={t.clientName}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full mb-4 rounded-lg bg-white/60 dark:bg-white/10 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 border border-white/50 dark:border-white/10"
            />

            {/* Line items */}
            <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
              {lineItems.length === 0 ? (
                <div className="text-xs text-slate-500 text-center py-4">—</div>
              ) : (
                lineItems.map((l) => (
                  <div key={l.id} className="flex justify-between items-start text-xs">
                    <div className="flex-1 text-slate-700 dark:text-slate-300 pr-2">
                      {l.label}
                      {l.qty > 1 && <span className="text-slate-500"> × {l.qty}</span>}
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">${l.total}</div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-white/30 dark:border-white/10 pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">{t.subtotal}</span>
                <span className="font-semibold text-slate-900 dark:text-white">${subtotal}</span>
              </div>
              {complexity !== 'simple' && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    {t.withComplexity} {complexityFactors[complexity]}x
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">${afterComplexity}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">{t.discount} ($)</span>
                <input
                  type="number"
                  min={0}
                  value={discount}
                  onChange={(e) => setDiscount(Math.max(0, Number(e.target.value) || 0))}
                  className="w-20 rounded bg-white/60 dark:bg-white/10 px-2 py-1 text-right text-sm font-semibold border border-white/50 dark:border-white/10"
                />
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/30 dark:border-white/10">
                <span className="text-lg font-bold text-slate-900 dark:text-white">{t.total}</span>
                <span className="text-3xl font-black text-sky-600 dark:text-sky-400">${total}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button
                onClick={handleCopy}
                className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 py-2.5 text-sm font-semibold text-white shadow-md"
                type="button"
              >
                {copyState || t.copy}
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSave}
                  className="rounded-lg bg-emerald-500 py-2 text-xs font-semibold text-white shadow-md"
                  type="button"
                >
                  {saveState || t.save}
                </button>
                <button
                  onClick={reset}
                  className="rounded-lg glass-subtle py-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  type="button"
                >
                  ↺ {t.reset}
                </button>
              </div>
            </div>

            <div className="mt-4 text-[10px] text-amber-700 dark:text-amber-400 leading-tight">
              {t.disclaimer}
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      {mounted && quotes.length > 0 && (
        <section className="glass rounded-2xl p-6 mt-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.history}</h2>
          <div className="space-y-2">
            {quotes.slice(0, 10).map((q) => (
              <div key={q.id} className="flex items-center justify-between gap-3 glass-subtle rounded-lg p-3 text-sm">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 dark:text-white truncate">{q.clientName}</div>
                  <div className="text-xs text-slate-500">
                    {new Date(q.createdAt).toLocaleDateString()} · {q.items.length} items · {q.complexity}
                  </div>
                </div>
                <div className="text-lg font-bold text-sky-600 dark:text-sky-400">${q.total}</div>
                <button
                  onClick={() => deleteQuote(q.id)}
                  className="text-xs text-slate-500 hover:text-rose-500"
                  type="button"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function NumberStepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="h-7 w-7 rounded bg-white/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold hover:bg-white/80"
        type="button"
      >
        −
      </button>
      <span className="w-8 text-center font-bold text-slate-900 dark:text-white">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="h-7 w-7 rounded bg-white/60 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold hover:bg-white/80"
        type="button"
      >
        +
      </button>
    </div>
  )
}
