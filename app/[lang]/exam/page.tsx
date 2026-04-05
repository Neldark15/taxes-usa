import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import { ExamApp } from '@/components/exam/ExamApp'

export default async function ExamPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <ExamApp lang={lang as Locale} />
}
