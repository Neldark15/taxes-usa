import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/mdx/Callout'
import { FormRef } from '@/components/mdx/FormRef'
import { KeyDate } from '@/components/mdx/KeyDate'

const components: MDXComponents = {
  Callout,
  FormRef,
  KeyDate,
  h1: ({ children }) => (
    <h1 className="mt-8 mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-white/10 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-2xl font-semibold text-slate-900 dark:text-white">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-xl font-semibold text-slate-900 dark:text-white">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-sky-600 hover:text-sky-500 underline underline-offset-2 dark:text-sky-400"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900 dark:bg-white/10 dark:text-slate-100">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-sky-500 bg-sky-50/50 py-2 pl-4 italic text-slate-700 dark:bg-sky-500/10 dark:text-slate-300">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900 dark:text-white">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-sm text-slate-700 dark:text-slate-300">{children}</td>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
