'use client'

import { useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDarkClass(isDark: boolean) {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = (localStorage.getItem('taxes-usa-theme') as Theme) || 'system'
    setTheme(stored)
    applyDarkClass(stored === 'dark' || (stored === 'system' && getSystemDark()))

    // Listen for OS theme changes when in system mode
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const current = (localStorage.getItem('taxes-usa-theme') as Theme) || 'system'
      if (current === 'system') {
        applyDarkClass(e.matches)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const cycle = () => {
    const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'
    setTheme(next)
    localStorage.setItem('taxes-usa-theme', next)
    applyDarkClass(next === 'dark' || (next === 'system' && getSystemDark()))
  }

  if (!mounted) return null

  const icons: Record<Theme, string> = { system: '◐', light: '○', dark: '●' }

  return (
    <button
      onClick={cycle}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-sm font-bold transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
      title={`Theme: ${theme}`}
      type="button"
    >
      {icons[theme]}
    </button>
  )
}
