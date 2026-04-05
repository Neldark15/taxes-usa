'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageKey } from '@/lib/storage'
import { NEW_CARD_STATE, reviewCard, isDue, categorize, type CardState } from '@/lib/srs'

type SrsState = {
  cards: Record<string, CardState>
  ensureCard: (id: string) => CardState
  review: (id: string, rating: number) => void
  getDue: (ids: string[], now?: number) => string[]
  stats: (ids: string[]) => { total: number; due: number; new: number; learning: number; mature: number }
  reset: () => void
}

export const useSrsStore = create<SrsState>()(
  persist(
    (set, get) => ({
      cards: {},
      ensureCard: (id: string) => {
        const existing = get().cards[id]
        if (existing) return existing
        const fresh = { ...NEW_CARD_STATE }
        set((state) => ({ cards: { ...state.cards, [id]: fresh } }))
        return fresh
      },
      review: (id: string, rating: number) =>
        set((state) => {
          const card = state.cards[id] ?? { ...NEW_CARD_STATE }
          const next = reviewCard(card, rating)
          return { cards: { ...state.cards, [id]: next } }
        }),
      getDue: (ids: string[], now = Date.now()) => {
        const cards = get().cards
        return ids.filter((id) => {
          const c = cards[id] ?? NEW_CARD_STATE
          return isDue(c, now)
        })
      },
      stats: (ids: string[]) => {
        const cards = get().cards
        let newCount = 0
        let learning = 0
        let mature = 0
        let due = 0
        const now = Date.now()
        for (const id of ids) {
          const c = cards[id] ?? NEW_CARD_STATE
          if (isDue(c, now)) due++
          const cat = categorize(c)
          if (cat === 'new') newCount++
          else if (cat === 'learning') learning++
          else mature++
        }
        return { total: ids.length, due, new: newCount, learning, mature }
      },
      reset: () => set({ cards: {} }),
    }),
    {
      name: storageKey('srs'),
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
