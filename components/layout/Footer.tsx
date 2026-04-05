import type { Dictionary } from '@/app/[lang]/dictionaries'

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <p className="text-center text-xs text-neutral-500">
          {dict.app.disclaimer}
        </p>
      </div>
    </footer>
  )
}
