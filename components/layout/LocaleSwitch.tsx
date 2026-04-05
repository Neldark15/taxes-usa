'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/app/[lang]/dictionaries'

export function LocaleSwitch({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = (next: Locale) => {
    if (next === currentLocale) return
    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/') || `/${next}`)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-neutral-200 p-0.5 text-xs font-semibold dark:border-neutral-700">
      <button
        onClick={() => switchTo('es')}
        className={`rounded px-2 py-1 transition-all ${
          currentLocale === 'es'
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'
        }`}
        type="button"
      >
        ES
      </button>
      <button
        onClick={() => switchTo('en')}
        className={`rounded px-2 py-1 transition-all ${
          currentLocale === 'en'
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'
        }`}
        type="button"
      >
        EN
      </button>
    </div>
  )
}
