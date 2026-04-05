import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import { FeeCalculator } from '@/components/fees/FeeCalculator'

export default async function FeesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <FeeCalculator lang={lang as Locale} />
}
