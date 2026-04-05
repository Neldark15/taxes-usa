'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageKey } from '@/lib/storage'
import { rates_natp, rates_diaspora, type FeePreset } from '@/data/fees/base-rates'

type SavedQuote = {
  id: string
  clientName: string
  items: { id: string; qty: number }[]
  complexity: 'simple' | 'medium' | 'complex'
  discount: number
  total: number
  createdAt: number
}

type FeesState = {
  preset: FeePreset | 'custom'
  customRates: Record<string, number>
  quotes: SavedQuote[]
  setPreset: (p: FeePreset | 'custom') => void
  setCustomRate: (id: string, value: number) => void
  resetCustom: () => void
  getRate: (id: string) => number
  addQuote: (q: SavedQuote) => void
  deleteQuote: (id: string) => void
}

export const useFeesStore = create<FeesState>()(
  persist(
    (set, get) => ({
      preset: 'diaspora',
      customRates: {},
      quotes: [],
      setPreset: (p) => set({ preset: p }),
      setCustomRate: (id, value) =>
        set((state) => ({
          preset: 'custom',
          customRates: { ...state.customRates, [id]: value },
        })),
      resetCustom: () => set({ customRates: {} }),
      getRate: (id) => {
        const { preset, customRates } = get()
        if (preset === 'custom' && customRates[id] !== undefined) return customRates[id]
        if (preset === 'natp') return rates_natp[id] ?? 0
        if (preset === 'diaspora') return rates_diaspora[id] ?? 0
        // custom fallback to diaspora if not set
        return customRates[id] ?? rates_diaspora[id] ?? 0
      },
      addQuote: (q) => set((state) => ({ quotes: [q, ...state.quotes].slice(0, 50) })),
      deleteQuote: (id) =>
        set((state) => ({ quotes: state.quotes.filter((q) => q.id !== id) })),
    }),
    {
      name: storageKey('fees'),
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
