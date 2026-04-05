const formInfo: Record<string, { title: string; description: string; url?: string }> = {
  '1040': {
    title: 'Form 1040',
    description: 'U.S. Individual Income Tax Return — declaración principal para residentes',
    url: 'https://www.irs.gov/forms-pubs/about-form-1040',
  },
  '1040-NR': {
    title: 'Form 1040-NR',
    description: 'Non-Resident Alien Income Tax Return',
    url: 'https://www.irs.gov/forms-pubs/about-form-1040-nr',
  },
  '1040-X': {
    title: 'Form 1040-X',
    description: 'Amended U.S. Individual Income Tax Return — para corregir returns',
    url: 'https://www.irs.gov/forms-pubs/about-form-1040x',
  },
  'W-2': {
    title: 'Form W-2',
    description: 'Wage and Tax Statement — del empleador al empleado',
    url: 'https://www.irs.gov/forms-pubs/about-form-w-2',
  },
  'W-7': {
    title: 'Form W-7',
    description: 'Application for IRS Individual Taxpayer Identification Number (ITIN)',
    url: 'https://www.irs.gov/forms-pubs/about-form-w-7',
  },
  'W-9': {
    title: 'Form W-9',
    description: 'Request for Taxpayer Identification Number and Certification',
    url: 'https://www.irs.gov/forms-pubs/about-form-w-9',
  },
  '1099-NEC': {
    title: 'Form 1099-NEC',
    description: 'Nonemployee Compensation — contratistas independientes',
    url: 'https://www.irs.gov/forms-pubs/about-form-1099-nec',
  },
  '1099-MISC': {
    title: 'Form 1099-MISC',
    description: 'Miscellaneous Information',
    url: 'https://www.irs.gov/forms-pubs/about-form-1099-misc',
  },
  '1099-K': {
    title: 'Form 1099-K',
    description: 'Payment Card and Third Party Network Transactions',
    url: 'https://www.irs.gov/forms-pubs/about-form-1099-k',
  },
  '8867': {
    title: 'Form 8867',
    description: 'Paid Preparer Due Diligence Checklist — obligatorio para EITC/CTC/AOTC/HOH',
    url: 'https://www.irs.gov/forms-pubs/about-form-8867',
  },
  '8879': {
    title: 'Form 8879',
    description: 'IRS e-file Signature Authorization — firma electrónica del cliente',
    url: 'https://www.irs.gov/forms-pubs/about-form-8879',
  },
  '4868': {
    title: 'Form 4868',
    description: 'Application for Automatic Extension of Time to File — extiende a Oct 15',
    url: 'https://www.irs.gov/forms-pubs/about-form-4868',
  },
  '5472': {
    title: 'Form 5472',
    description:
      'Information Return of a 25% Foreign-Owned U.S. Corp — obligatorio para LLCs con dueño extranjero ($25k penalidad)',
    url: 'https://www.irs.gov/forms-pubs/about-form-5472',
  },
  'SS-4': {
    title: 'Form SS-4',
    description: 'Application for Employer Identification Number (EIN)',
    url: 'https://www.irs.gov/forms-pubs/about-form-ss-4',
  },
  'VA-760': {
    title: 'Virginia Form 760',
    description: 'Virginia Resident Individual Income Tax Return',
    url: 'https://www.tax.virginia.gov/forms-instructions',
  },
  FBAR: {
    title: 'FinCEN 114 (FBAR)',
    description:
      'Report of Foreign Bank and Financial Accounts — cuentas >$10k agregados fuera de USA',
    url: 'https://www.fincen.gov/report-foreign-bank-and-financial-accounts',
  },
  '8938': {
    title: 'Form 8938',
    description: 'Statement of Specified Foreign Financial Assets (FATCA)',
    url: 'https://www.irs.gov/forms-pubs/about-form-8938',
  },
}

export function FormRef({ id }: { id: string }) {
  const info = formInfo[id]
  if (!info) {
    return (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm dark:bg-white/10">
        {id}
      </code>
    )
  }
  const content = (
    <span className="group relative inline-flex items-baseline gap-0.5 rounded bg-sky-100/60 px-1.5 py-0.5 font-mono text-sm font-medium text-sky-800 ring-1 ring-sky-200/60 dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-400/20">
      {info.title}
      <span className="invisible absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-800">
        {info.description}
      </span>
    </span>
  )
  return info.url ? (
    <a href={info.url} target="_blank" rel="noopener noreferrer" className="no-underline">
      {content}
    </a>
  ) : (
    content
  )
}
