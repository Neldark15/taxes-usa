/**
 * Base rates for the fee calculator.
 * Two presets: NATP (US average) and Diaspora (competitive for Salvadoran market).
 * Users can customize these via RatesEditor (stored in useFeesStore).
 */

export type FeeRate = {
  id: string
  label_es: string
  label_en: string
  category: 'base' | 'schedule' | 'state' | 'addon'
  description_es?: string
  description_en?: string
}

export const feeItems: FeeRate[] = [
  // ===== Base returns (pick one) =====
  {
    id: 'base-1040-simple',
    label_es: '1040 simple (solo W-2, standard deduction)',
    label_en: '1040 simple (W-2 only, standard deduction)',
    category: 'base',
    description_es: 'El caso más común de la diáspora',
    description_en: 'Most common diaspora case',
  },
  {
    id: 'base-1040-itemized',
    label_es: '1040 con Schedule A (itemized)',
    label_en: '1040 with Schedule A (itemized)',
    category: 'base',
  },
  {
    id: 'base-1040-nr',
    label_es: '1040-NR (Nonresident Alien)',
    label_en: '1040-NR (Nonresident Alien)',
    category: 'base',
  },

  // ===== Schedules (addable) =====
  {
    id: 'sch-c',
    label_es: 'Schedule C (Self-Employment)',
    label_en: 'Schedule C (Self-Employment)',
    category: 'schedule',
    description_es: 'Para 1099 contratistas, negocio propio',
    description_en: 'For 1099 contractors, own business',
  },
  {
    id: 'sch-se',
    label_es: 'Schedule SE (SE Tax auto)',
    label_en: 'Schedule SE (SE Tax auto)',
    category: 'schedule',
  },
  {
    id: 'sch-d',
    label_es: 'Schedule D (Capital Gains)',
    label_en: 'Schedule D (Capital Gains)',
    category: 'schedule',
  },
  {
    id: 'sch-e-rental',
    label_es: 'Schedule E (Rental/Royalty)',
    label_en: 'Schedule E (Rental/Royalty)',
    category: 'schedule',
  },
  {
    id: 'sch-b',
    label_es: 'Schedule B (Interest/Dividends)',
    label_en: 'Schedule B (Interest/Dividends)',
    category: 'schedule',
  },

  // ===== State returns (addable, multi-state) =====
  {
    id: 'state-va',
    label_es: 'Virginia Form 760',
    label_en: 'Virginia Form 760',
    category: 'state',
  },
  {
    id: 'state-md',
    label_es: 'Maryland',
    label_en: 'Maryland',
    category: 'state',
  },
  {
    id: 'state-dc',
    label_es: 'Washington DC',
    label_en: 'Washington DC',
    category: 'state',
  },
  {
    id: 'state-other',
    label_es: 'Otro estado (cada uno)',
    label_en: 'Other state (each)',
    category: 'state',
  },

  // ===== Add-ons =====
  {
    id: 'addon-w7-itin',
    label_es: 'W-7 ITIN application (por persona)',
    label_en: 'W-7 ITIN application (per person)',
    category: 'addon',
    description_es: 'Aplica para cada dependiente/spouse sin SSN',
    description_en: 'Applies per dependent/spouse without SSN',
  },
  {
    id: 'addon-fbar',
    label_es: 'FBAR (FinCEN 114)',
    label_en: 'FBAR (FinCEN 114)',
    category: 'addon',
    description_es: 'Si cuentas extranjeras > $10k agregadas',
    description_en: 'If foreign accounts > $10k aggregate',
  },
  {
    id: 'addon-8938',
    label_es: 'Form 8938 (FATCA)',
    label_en: 'Form 8938 (FATCA)',
    category: 'addon',
  },
  {
    id: 'addon-8867',
    label_es: 'Due Diligence 8867 (EITC/CTC/AOTC/HOH)',
    label_en: 'Due Diligence 8867 (EITC/CTC/AOTC/HOH)',
    category: 'addon',
    description_es: 'Cuando reclamas créditos refundables',
    description_en: 'When claiming refundable credits',
  },
  {
    id: 'addon-amended',
    label_es: 'Amended Return (1040-X)',
    label_en: 'Amended Return (1040-X)',
    category: 'addon',
  },
  {
    id: 'addon-back-tax',
    label_es: 'Back taxes (por año adicional)',
    label_en: 'Back taxes (per additional year)',
    category: 'addon',
  },
  {
    id: 'addon-caa-cert',
    label_es: 'CAA certification de documentos ITIN',
    label_en: 'CAA certification of ITIN documents',
    category: 'addon',
  },
  {
    id: 'addon-1099-multi',
    label_es: 'Múltiples 1099s (por documento adicional)',
    label_en: 'Multiple 1099s (per additional document)',
    category: 'addon',
  },
]

export type FeePreset = 'natp' | 'diaspora'

// NATP Fee Study averages (US-wide)
export const rates_natp: Record<string, number> = {
  'base-1040-simple': 220,
  'base-1040-itemized': 323,
  'base-1040-nr': 400,
  'sch-c': 192,
  'sch-se': 42,
  'sch-d': 118,
  'sch-e-rental': 145,
  'sch-b': 40,
  'state-va': 75,
  'state-md': 75,
  'state-dc': 75,
  'state-other': 75,
  'addon-w7-itin': 200,
  'addon-fbar': 150,
  'addon-8938': 125,
  'addon-8867': 40,
  'addon-amended': 275,
  'addon-back-tax': 350,
  'addon-caa-cert': 100,
  'addon-1099-multi': 15,
}

// Diaspora market (30-50% below NATP)
export const rates_diaspora: Record<string, number> = {
  'base-1040-simple': 130,
  'base-1040-itemized': 200,
  'base-1040-nr': 250,
  'sch-c': 120,
  'sch-se': 25,
  'sch-d': 75,
  'sch-e-rental': 90,
  'sch-b': 25,
  'state-va': 50,
  'state-md': 50,
  'state-dc': 50,
  'state-other': 50,
  'addon-w7-itin': 125,
  'addon-fbar': 100,
  'addon-8938': 75,
  'addon-8867': 25,
  'addon-amended': 175,
  'addon-back-tax': 225,
  'addon-caa-cert': 60,
  'addon-1099-multi': 10,
}

export const complexityFactors = {
  simple: 1.0,
  medium: 1.3,
  complex: 1.6,
}

export type Complexity = keyof typeof complexityFactors
