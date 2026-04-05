import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import { FlashcardsApp } from '@/components/flashcards/FlashcardsApp'

export default async function FlashcardsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <FlashcardsApp lang={lang as Locale} />
}
