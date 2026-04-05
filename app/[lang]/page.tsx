import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import { chapters } from '@/data/chapters'
import { ProgressDashboard } from '@/components/home/ProgressDashboard'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const locale = lang as Locale

  const features = [
    { icon: '📚', href: `/${lang}/learn`, title: dict.nav.learn, desc: dict.home.features.learn },
    { icon: '🔄', href: `/${lang}/process`, title: dict.nav.process, desc: dict.home.features.process },
    { icon: '🎴', href: `/${lang}/flashcards`, title: dict.nav.flashcards, desc: dict.home.features.flashcards },
    { icon: '📝', href: `/${lang}/exam`, title: dict.nav.exam, desc: dict.home.features.exam },
    { icon: '✅', href: `/${lang}/checklists`, title: dict.nav.checklists, desc: dict.home.features.checklists },
    { icon: '💵', href: `/${lang}/fees`, title: dict.nav.fees, desc: dict.home.features.fees },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-black dark:text-white">
          {dict.app.name}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-neutral-500 dark:text-neutral-400">
          {dict.home.subtitle}
        </p>
      </section>

      {/* Progress */}
      <section className="mb-10">
        <ProgressDashboard lang={locale} />
      </section>

      {/* Feature cards — icons take center stage */}
      <section className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="glass group p-6 transition-all hover:border-black dark:hover:border-white"
          >
            <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{f.icon}</div>
            <h3 className="text-lg font-bold text-black dark:text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
            <div className="mt-4 text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              {dict.home.startHere} →
            </div>
          </Link>
        ))}
      </section>

      {/* Chapters */}
      <section className="glass p-6 sm:p-8">
        <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
          {dict.learn.title}
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/learn/${c.slug}`}
              className="glass-subtle p-3.5 transition-all hover:border-black dark:hover:border-white"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl shrink-0 mt-0.5">{c.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {String(c.order).padStart(2, '0')} · {c.minutes} {dict.learn.minutes}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-black dark:text-white leading-tight">
                    {locale === 'es' ? c.title_es : c.title_en}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
