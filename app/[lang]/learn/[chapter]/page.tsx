import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import { chapters, getChapter } from '@/data/chapters'
import { getQuiz } from '@/data/quizzes'
import { ChapterQuiz } from '@/components/learn/ChapterQuiz'

// Dynamic import for MDX content per locale + slug
async function loadChapterMDX(lang: Locale, slug: string) {
  try {
    const mod = await import(`@/content/${lang}/${slug}.mdx`)
    return mod.default
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const params: { lang: string; chapter: string }[] = []
  for (const lang of ['es', 'en']) {
    for (const c of chapters) {
      params.push({ lang, chapter: c.slug })
    }
  }
  return params
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ lang: string; chapter: string }>
}) {
  const { lang, chapter: slug } = await params
  if (!hasLocale(lang)) notFound()

  const chapter = getChapter(slug)
  if (!chapter) notFound()

  const dict = await getDictionary(lang)
  const Content = await loadChapterMDX(lang, slug)
  const quiz = getQuiz(slug)

  const prev = chapters.find((c) => c.order === chapter.order - 1)
  const next = chapters.find((c) => c.order === chapter.order + 1)

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <Link
          href={`/${lang}/learn`}
          className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
        >
          ← {dict.learn.title}
        </Link>
      </div>

      <header className="mb-8 glass rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-3xl text-white shadow-lg">
            {chapter.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-sky-600 dark:text-sky-400">
              {String(chapter.order).padStart(2, '0')} · {chapter.minutes} {dict.learn.minutes}
            </div>
            <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
              {lang === 'es' ? chapter.title_es : chapter.title_en}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {lang === 'es' ? chapter.summary_es : chapter.summary_en}
            </p>
          </div>
        </div>
      </header>

      {Content ? (
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <Content />
        </div>
      ) : (
        <div className="glass rounded-xl p-8 text-center text-slate-600 dark:text-slate-400">
          {lang === 'es'
            ? 'Contenido de este capítulo próximamente.'
            : 'Content for this chapter coming soon.'}
        </div>
      )}

      {quiz && quiz.length > 0 && (
        <ChapterQuiz chapterSlug={slug} quiz={quiz} lang={lang as Locale} />
      )}

      <nav className="mt-10 flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/${lang}/learn/${prev.slug}`}
            className="glass flex-1 rounded-xl p-4 hover:shadow-lg transition-all group"
          >
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              ← {dict.learn.prevChapter}
            </div>
            <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white truncate">
              {lang === 'es' ? prev.title_es : prev.title_en}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/${lang}/learn/${next.slug}`}
            className="glass flex-1 rounded-xl p-4 text-right hover:shadow-lg transition-all group"
          >
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {dict.learn.nextChapter} →
            </div>
            <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white truncate">
              {lang === 'es' ? next.title_es : next.title_en}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </article>
  )
}
