'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { feeItems, rates_natp, rates_diaspora } from '@/data/fees/base-rates'
import { useFeesStore } from '@/stores/useFeesStore'

type Lang = 'es' | 'en'

const L = {
  es: {
    title: 'Personalizar Tarifas',
    subtitle: 'Ajusta cada tarifa a tu mercado. Se guarda automáticamente.',
    back: '← Volver a calculadora',
    resetNatp: 'Cargar NATP',
    resetDiaspora: 'Cargar Diáspora',
    clearCustom: 'Limpiar personalización',
    base: 'Returns base',
    schedules: 'Schedules',
    states: 'Estados',
    addons: 'Add-ons',
    confirmClear: '¿Limpiar todas las tarifas personalizadas?',
    currentPreset: 'Preset actual',
    natp: 'NATP',
    diaspora: 'Diáspora',
    custom: 'Personalizado',
  },
  en: {
    title: 'Customize Rates',
    subtitle: 'Adjust each rate to your market. Saves automatically.',
    back: '← Back to calculator',
    resetNatp: 'Load NATP',
    resetDiaspora: 'Load Diaspora',
    clearCustom: 'Clear customization',
    base: 'Base returns',
    schedules: 'Schedules',
    states: 'States',
    addons: 'Add-ons',
    confirmClear: 'Clear all custom rates?',
    currentPreset: 'Current preset',
    natp: 'NATP',
    diaspora: 'Diaspora',
    custom: 'Custom',
  },
}

export function RatesEditor({ lang }: { lang: Lang }) {
  const t = L[lang]
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const preset = useFeesStore((s) => s.preset)
  const setPreset = useFeesStore((s) => s.setPreset)
  const customRates = useFeesStore((s) => s.customRates)
  const setCustomRate = useFeesStore((s) => s.setCustomRate)
  const resetCustom = useFeesStore((s) => s.resetCustom)
  const getRate = useFeesStore((s) => s.getRate)

  const loadPreset = (p: 'natp' | 'diaspora') => {
    const source = p === 'natp' ? rates_natp : rates_diaspora
    Object.entries(source).forEach(([id, value]) => setCustomRate(id, value))
    setPreset('custom')
  }

  const handleClear = () => {
    if (window.confirm(t.confirmClear)) {
      resetCustom()
      setPreset('diaspora')
    }
  }

  const categories: { key: 'base' | 'schedule' | 'state' | 'addon'; label: string }[] = [
    { key: 'base', label: t.base },
    { key: 'schedule', label: t.schedules },
    { key: 'state', label: t.states },
    { key: 'addon', label: t.addons },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-4">
        <Link href={`/${lang}/fees`} className="text-sm text-sky-600 dark:text-sky-400 hover:underline">
          {t.back}
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{t.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{t.subtitle}</p>
      </header>

      {/* Preset actions */}
      <section className="glass rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.currentPreset}</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white capitalize">
              {mounted ? (preset === 'natp' ? t.natp : preset === 'diaspora' ? t.diaspora : t.custom) : '—'}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => loadPreset('natp')}
              className="rounded-lg bg-sky-500 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-600"
              type="button"
            >
              {t.resetNatp}
            </button>
            <button
              onClick={() => loadPreset('diaspora')}
              className="rounded-lg bg-violet-500 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-600"
              type="button"
            >
              {t.resetDiaspora}
            </button>
            <button
              onClick={handleClear}
              className="rounded-lg bg-rose-500 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-600"
              type="button"
            >
              {t.clearCustom}
            </button>
          </div>
        </div>
      </section>

      {/* Editor by category */}
      <div className="space-y-4">
        {categories.map((cat) => {
          const items = feeItems.filter((i) => i.category === cat.key)
          return (
            <section key={cat.key} className="glass rounded-2xl p-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{cat.label}</h2>
              <div className="space-y-2">
                {items.map((item) => {
                  const current = mounted ? getRate(item.id) : rates_diaspora[item.id] ?? 0
                  const isCustom = customRates[item.id] !== undefined
                  return (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          {lang === 'es' ? item.label_es : item.label_en}
                        </div>
                        {item.description_es && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {lang === 'es' ? item.description_es : item.description_en}
                          </div>
                        )}
                        <div className="text-[10px] text-slate-500 mt-1">
                          NATP: ${rates_natp[item.id] ?? 0} · Diáspora: ${rates_diaspora[item.id] ?? 0}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-500 font-bold">$</span>
                        <input
                          type="number"
                          min={0}
                          step={5}
                          value={current}
                          onChange={(e) => setCustomRate(item.id, Math.max(0, Number(e.target.value) || 0))}
                          className={`w-24 rounded bg-white/70 dark:bg-white/10 px-3 py-1.5 text-right text-sm font-bold border ${isCustom ? 'border-emerald-400' : 'border-white/50 dark:border-white/10'} text-slate-900 dark:text-white`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
