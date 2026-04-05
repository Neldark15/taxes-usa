import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import { checklists, getChecklist } from '@/data/checklists'
import { ChecklistView } from '@/components/checklists/ChecklistView'

export async function generateStaticParams() {
  const out: { lang: string; slug: string }[] = []
  for (const lang of ['es', 'en']) {
    for (const c of checklists) {
      out.push({ lang, slug: c.slug })
    }
  }
  return out
}

export default async function ChecklistDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()
  const checklist = getChecklist(slug)
  if (!checklist) notFound()
  const dict = await getDictionary(lang)

  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">
        <Link
          href={`/${lang}/checklists`}
          className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
        >
          ← {dict.checklists.title}
        </Link>
      </div>
      <ChecklistView checklist={checklist} lang={lang as Locale} />
    </div>
  )
}
