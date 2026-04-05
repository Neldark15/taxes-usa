import '../globals.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, locales } from './dictionaries'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'TAXES USA — Learning Platform',
  description: 'Herramienta bilingüe de aprendizaje para preparación de impuestos US',
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} />
        </div>
      </body>
    </html>
  )
}
