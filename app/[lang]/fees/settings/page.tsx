import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../../dictionaries'
import { RatesEditor } from '@/components/fees/RatesEditor'

export default async function FeesSettingsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <RatesEditor lang={lang as Locale} />
}
