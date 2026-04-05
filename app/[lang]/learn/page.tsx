import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import { chapters } from '@/data/chapters'

export default async function LearnIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const locale = lang as Locale

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {dict.learn.title}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{dict.learn.subtitle}</p>
      </header>

      <div className="space-y-3">
        {chapters.map((c) => (
          <Link
            key={c.slug}
            href={`/${lang}/learn/${c.slug}`}
            className="glass block rounded-xl p-5 transition-all hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-2xl text-white shadow-lg">
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
                  <span>{String(c.order).padStart(2, '0')}</span>
                  <span className="opacity-50">·</span>
                  <span>
                    {c.minutes} {dict.learn.minutes}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {locale === 'es' ? c.title_es : c.title_en}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {locale === 'es' ? c.summary_es : c.summary_en}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
