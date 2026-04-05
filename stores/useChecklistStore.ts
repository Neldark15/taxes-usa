'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageKey } from '@/lib/storage'

type ChecklistState = {
  checked: Record<string, Record<string, boolean>> // slug -> itemId -> true
  toggle: (slug: string, itemId: string) => void
  isChecked: (slug: string, itemId: string) => boolean
  getProgress: (slug: string, itemIds: string[]) => { done: number; total: number }
  resetSlug: (slug: string) => void
  reset: () => void
}

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set, get) => ({
      checked: {},
      toggle: (slug, itemId) =>
        set((state) => {
          const slugChecked = state.checked[slug] ?? {}
          const newVal = !slugChecked[itemId]
          return {
            checked: {
              ...state.checked,
              [slug]: { ...slugChecked, [itemId]: newVal },
            },
          }
        }),
      isChecked: (slug, itemId) => Boolean(get().checked[slug]?.[itemId]),
      getProgress: (slug, itemIds) => {
        const s = get().checked[slug] ?? {}
        const done = itemIds.filter((id) => s[id]).length
        return { done, total: itemIds.length }
      },
      resetSlug: (slug) =>
        set((state) => {
          const next = { ...state.checked }
          delete next[slug]
          return { checked: next }
        }),
      reset: () => set({ checked: {} }),
    }),
    {
      name: storageKey('checklists'),
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
