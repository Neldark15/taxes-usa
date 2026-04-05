import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import { checklists } from '@/data/checklists'

export default async function ChecklistsPage({
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
          {dict.checklists.title}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{dict.checklists.subtitle}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {checklists.map((c) => {
          const itemCount = c.groups.reduce((sum, g) => sum + g.items.length, 0)
          return (
            <Link
              key={c.slug}
              href={`/${lang}/checklists/${c.slug}`}
              className="glass rounded-2xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-3xl text-white shadow-lg">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-white leading-tight">
                    {locale === 'es' ? c.title_es : c.title_en}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {locale === 'es' ? c.description_es : c.description_en}
                  </p>
                  <div className="mt-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {itemCount} {locale === 'es' ? 'items' : 'items'}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
