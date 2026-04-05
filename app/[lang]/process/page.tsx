import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import { ProcessApp } from '@/components/process/ProcessApp'

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <ProcessApp lang={lang as Locale} />
}
