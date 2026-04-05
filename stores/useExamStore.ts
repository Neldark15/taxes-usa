'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageKey } from '@/lib/storage'

type ExamAttempt = {
  part: number
  mode: 'practice' | 'simulation'
  score: number // scaled 40-130
  correct: number
  total: number
  durationSec: number
  completedAt: number
}

type ExamState = {
  attempts: ExamAttempt[]
  record: (a: ExamAttempt) => void
  reset: () => void
}

export const useExamStore = create<ExamState>()(
  persist(
    (set) => ({
      attempts: [],
      record: (a) => set((s) => ({ attempts: [...s.attempts, a] })),
      reset: () => set({ attempts: [] }),
    }),
    {
      name: storageKey('exam'),
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
