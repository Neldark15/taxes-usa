export function KeyDate({ date, label }: { date: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100/70 px-2 py-0.5 text-sm font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-400/20">
      <span>📅</span>
      <span>{date}</span>
      <span className="text-xs font-normal opacity-80">— {label}</span>
    </span>
  )
}
