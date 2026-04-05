'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageKey } from '@/lib/storage'

type QuizAttempt = {
  chapterSlug: string
  score: number // 0-100
  correct: number
  total: number
  completedAt: number // epoch ms
}

type QuizState = {
  attempts: Record<string, QuizAttempt[]>
  chaptersCompleted: string[]
  recordAttempt: (attempt: QuizAttempt) => void
  markChapterComplete: (slug: string) => void
  getBestScore: (slug: string) => number | null
  reset: () => void
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      attempts: {},
      chaptersCompleted: [],
      recordAttempt: (attempt) =>
        set((state) => {
          const list = state.attempts[attempt.chapterSlug] ?? []
          return {
            attempts: {
              ...state.attempts,
              [attempt.chapterSlug]: [...list, attempt],
            },
          }
        }),
      markChapterComplete: (slug) =>
        set((state) => {
          if (state.chaptersCompleted.includes(slug)) return state
          return { chaptersCompleted: [...state.chaptersCompleted, slug] }
        }),
      getBestScore: (slug) => {
        const list = get().attempts[slug] ?? []
        if (list.length === 0) return null
        return Math.max(...list.map((a) => a.score))
      },
      reset: () => set({ attempts: {}, chaptersCompleted: [] }),
    }),
    {
      name: storageKey('quiz'),
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
