export type Chapter = {
  slug: string
  order: number
  title_es: string
  title_en: string
  summary_es: string
  summary_en: string
  minutes: number
  icon: string
}

export const chapters: Chapter[] = [
  {
    slug: 'fundamentos-federal',
    order: 1,
    title_es: 'Fundamentos del sistema fiscal federal',
    title_en: 'Federal Tax System Fundamentals',
    summary_es:
      'IRS, residencia fiscal, filing status, Form 1040, créditos clave (EITC, CTC), deadlines.',
    summary_en: 'IRS, tax residency, filing status, Form 1040, key credits (EITC, CTC), deadlines.',
    minutes: 45,
    icon: '🏛️',
  },
  {
    slug: 'virginia-estatal',
    order: 2,
    title_es: 'Virginia: Form 760 y reglas estatales',
    title_en: 'Virginia: Form 760 and State Rules',
    summary_es:
      'Virginia Dept of Taxation, residencia, tasas 2-5.75%, deadline May 1, reciprocidad con DC/MD.',
    summary_en:
      'Virginia Dept of Taxation, residency, rates 2-5.75%, May 1 deadline, reciprocity with DC/MD.',
    minutes: 30,
    icon: '🏔️',
  },
  {
    slug: 'otros-estados',
    order: 3,
    title_es: 'Panorama de otros estados',
    title_en: 'Other States Overview',
    summary_es: '9 estados sin income tax, estados con alta diáspora (MD, NY, CA, TX, FL), nexus.',
    summary_en: '9 no-income-tax states, diaspora hubs (MD, NY, CA, TX, FL), preparer nexus.',
    minutes: 25,
    icon: '🗺️',
  },
  {
    slug: 'formularios',
    order: 4,
    title_es: 'Formularios clave',
    title_en: 'Key Forms',
    summary_es: 'W-2, 1099-NEC/MISC/K, 1040, schedules A/B/C/D/E/SE, W-7 ITIN, 8867, 8879.',
    summary_en: 'W-2, 1099-NEC/MISC/K, 1040, schedules A/B/C/D/E/SE, W-7 ITIN, 8867, 8879.',
    minutes: 40,
    icon: '📄',
  },
  {
    slug: 'diaspora',
    order: 5,
    title_es: 'Casos especiales de la diáspora',
    title_en: 'Diaspora Special Cases',
    summary_es:
      'ITIN, TPS, DACA, dependientes en ES, FBAR, FATCA, Foreign Tax Credit, CAA certification.',
    summary_en:
      'ITIN, TPS, DACA, dependents in ES, FBAR, FATCA, Foreign Tax Credit, CAA certification.',
    minutes: 50,
    icon: '🌎',
  },
  {
    slug: 'credenciales',
    order: 6,
    title_es: 'Credenciales de preparador desde El Salvador',
    title_en: 'Preparer Credentials from El Salvador',
    summary_es: 'PTIN (Form 8946 + W-12), EFIN, AFSP, Enrolled Agent (examen SEE), Circular 230.',
    summary_en: 'PTIN (Form 8946 + W-12), EFIN, AFSP, Enrolled Agent (SEE exam), Circular 230.',
    minutes: 35,
    icon: '🎓',
  },
  {
    slug: 'negocio',
    order: 7,
    title_es: 'Montar el negocio: LLC WY vs empresa ES',
    title_en: 'Setting Up the Business: WY LLC vs ES Company',
    summary_es:
      'LLC Wyoming, registered agent, EIN sin SSN, Form 5472, cuentas bancarias Mercury/Wise, E&O.',
    summary_en:
      'Wyoming LLC, registered agent, EIN without SSN, Form 5472, Mercury/Wise banking, E&O.',
    minutes: 45,
    icon: '🏢',
  },
  {
    slug: 'software',
    order: 8,
    title_es: 'Software y herramientas profesionales',
    title_en: 'Professional Software and Tools',
    summary_es: 'Drake, ProSeries, TaxDome, portales seguros, IRS Pub 4557, WISP obligatorio.',
    summary_en: 'Drake, ProSeries, TaxDome, secure portals, IRS Pub 4557, mandatory WISP.',
    minutes: 25,
    icon: '💻',
  },
  {
    slug: 'workflow',
    order: 9,
    title_es: 'Workflow completo del cliente + Pricing',
    title_en: 'Complete Client Workflow + Pricing',
    summary_es:
      'Intake, engagement letter, prep, 8879, e-file, cobro, NATP fees, Circular 230 §10.27.',
    summary_en:
      'Intake, engagement letter, prep, 8879, e-file, payment, NATP fees, Circular 230 §10.27.',
    minutes: 30,
    icon: '🔄',
  },
  {
    slug: 'compliance',
    order: 10,
    title_es: 'Compliance y gestión de riesgos',
    title_en: 'Compliance and Risk Management',
    summary_es:
      'Circular 230, due diligence 8867, §6694/6695 penalties, data security, e-file mandate.',
    summary_en:
      'Circular 230, 8867 due diligence, §6694/6695 penalties, data security, e-file mandate.',
    minutes: 35,
    icon: '🛡️',
  },
  {
    slug: 'calendario',
    order: 11,
    title_es: 'Calendario fiscal del año',
    title_en: 'Annual Tax Calendar',
    summary_es: 'Todas las fechas clave: deadlines, estimated taxes, FBAR, amendments.',
    summary_en: 'All key dates: deadlines, estimated taxes, FBAR, amendments.',
    minutes: 15,
    icon: '📅',
  },
]

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug)

export const getChapterTitle = (chapter: Chapter, lang: 'es' | 'en') =>
  lang === 'es' ? chapter.title_es : chapter.title_en

export const getChapterSummary = (chapter: Chapter, lang: 'es' | 'en') =>
  lang === 'es' ? chapter.summary_es : chapter.summary_en
