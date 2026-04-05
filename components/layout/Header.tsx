import Link from 'next/link'
import { LocaleSwitch } from './LocaleSwitch'
import { ThemeToggle } from './ThemeToggle'
import type { Dictionary, Locale } from '@/app/[lang]/dictionaries'

export function Header({ lang, dict }: { lang: string; dict: Dictionary }) {
  const nav = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/learn`, label: dict.nav.learn },
    { href: `/${lang}/process`, label: dict.nav.process },
    { href: `/${lang}/flashcards`, label: dict.nav.flashcards },
    { href: `/${lang}/exam`, label: dict.nav.exam },
    { href: `/${lang}/checklists`, label: dict.nav.checklists },
    { href: `/${lang}/fees`, label: dict.nav.fees },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black font-mono text-sm font-bold text-white dark:bg-white dark:text-black">
            $
          </div>
          <span className="hidden sm:inline text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            {dict.app.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5 text-sm font-medium">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-neutral-600 hover:text-black hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleSwitch currentLocale={lang as Locale} />
        </div>
      </nav>

      <div className="md:hidden overflow-x-auto border-t border-neutral-100 dark:border-neutral-800 px-4 py-2">
        <div className="flex gap-0.5 text-xs font-medium whitespace-nowrap">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1 text-neutral-600 hover:text-black hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
