import type { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'tip'

const styles: Record<CalloutType, { bg: string; border: string; icon: string; iconColor: string }> = {
  info: {
    bg: 'bg-sky-50/70 dark:bg-sky-500/10',
    border: 'border-sky-400',
    icon: 'ℹ',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  warning: {
    bg: 'bg-amber-50/70 dark:bg-amber-500/10',
    border: 'border-amber-400',
    icon: '⚠',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  danger: {
    bg: 'bg-rose-50/70 dark:bg-rose-500/10',
    border: 'border-rose-400',
    icon: '⛔',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  success: {
    bg: 'bg-emerald-50/70 dark:bg-emerald-500/10',
    border: 'border-emerald-400',
    icon: '✓',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  tip: {
    bg: 'bg-violet-50/70 dark:bg-violet-500/10',
    border: 'border-violet-400',
    icon: '💡',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType
  title?: string
  children: ReactNode
}) {
  const s = styles[type]
  return (
    <div className={`my-6 rounded-xl border-l-4 ${s.border} ${s.bg} p-4 backdrop-blur-sm`}>
      <div className="flex gap-3">
        <div className={`text-xl ${s.iconColor}`}>{s.icon}</div>
        <div className="flex-1">
          {title && (
            <div className="mb-1 font-semibold text-slate-900 dark:text-white">{title}</div>
          )}
          <div className="text-sm text-slate-700 dark:text-slate-300 [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
