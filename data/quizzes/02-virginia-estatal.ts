import type { QuizBank } from './types'

export const quiz02: QuizBank = [
  {
    id: 'va-01',
    question_es: '¿Cuál es la fecha límite para presentar el Form 760 de Virginia?',
    question_en: 'What is the deadline to file Virginia Form 760?',
    choices_es: ['April 15', 'May 1', 'June 15', 'March 15'],
    choices_en: ['April 15', 'May 1', 'June 15', 'March 15'],
    answer: 1,
    explanation_es:
      'Virginia tiene deadline el 1 de mayo (NO el 15 de abril como federal). Esta es una trampa común para preparadores nuevos.',
    explanation_en:
      'Virginia has a May 1 deadline (NOT April 15 like federal). This is a common pitfall for new preparers.',
  },
  {
    id: 'va-02',
    question_es: '¿Qué agencia administra los impuestos estatales de Virginia?',
    question_en: 'Which agency administers Virginia state taxes?',
    choices_es: [
      'Internal Revenue Service (IRS)',
      'Virginia Department of Taxation',
      'Commonwealth Revenue Office',
      'Virginia Tax Board',
    ],
    choices_en: [
      'Internal Revenue Service (IRS)',
      'Virginia Department of Taxation',
      'Commonwealth Revenue Office',
      'Virginia Tax Board',
    ],
    answer: 1,
    explanation_es:
      'Virginia Department of Taxation (tax.virginia.gov) es la autoridad estatal. El IRS solo maneja federal.',
    explanation_en:
      'Virginia Department of Taxation (tax.virginia.gov) is the state authority. The IRS only handles federal.',
  },
  {
    id: 'va-03',
    question_es: '¿Cuál es la tasa marginal máxima de income tax en Virginia?',
    question_en: "What is Virginia's top marginal income tax rate?",
    choices_es: ['3.5%', '5.75%', '6.25%', '7.5%'],
    choices_en: ['3.5%', '5.75%', '6.25%', '7.5%'],
    answer: 1,
    explanation_es:
      'Virginia tiene tasas progresivas: 2% (primeros $3,000), 3%, 5%, y 5.75% (sobre $17,000). La tasa máxima es 5.75%.',
    explanation_en:
      'Virginia has progressive rates: 2% (first $3,000), 3%, 5%, and 5.75% (over $17,000). The top rate is 5.75%.',
  },
  {
    id: 'va-04',
    question_es:
      'Un cliente vive en Arlington VA pero trabaja en Washington DC. ¿Dónde paga income tax estatal?',
    question_en:
      'A client lives in Arlington VA but works in Washington DC. Where does she pay state income tax?',
    choices_es: [
      'Solo en DC',
      'En ambos, con crédito en VA',
      'Solo en VA (por reciprocidad VA-DC)',
      'En ninguno, es zona neutral',
    ],
    choices_en: [
      'Only in DC',
      'In both, with credit in VA',
      'Only in VA (VA-DC reciprocity)',
      'In neither, it is a neutral zone',
    ],
    answer: 2,
    explanation_es:
      'Virginia tiene reciprocidad con DC, MD, KY, PA y WV. Residentes de VA que trabajan en DC solo pagan impuestos en VA. El empleador DC retiene impuestos de VA con Form VA-4 (o D-4A para exempción DC).',
    explanation_en:
      'Virginia has reciprocity with DC, MD, KY, PA and WV. VA residents working in DC only pay VA taxes. DC employer withholds VA taxes with Form VA-4 (or D-4A to exempt DC withholding).',
  },
  {
    id: 'va-05',
    question_es: '¿Qué formulario usa un residente parcial de Virginia (part-year)?',
    question_en: 'Which form does a part-year Virginia resident use?',
    choices_es: ['Form 760', 'Form 760PY', 'Form 763', 'Form 763-S'],
    choices_en: ['Form 760', 'Form 760PY', 'Form 763', 'Form 763-S'],
    answer: 1,
    explanation_es:
      'Form 760 = full-year resident. Form 760PY = part-year resident. Form 763 = nonresident. Form 763-S = nonresident waiver para reciprocidad.',
    explanation_en:
      'Form 760 = full-year resident. Form 760PY = part-year resident. Form 763 = nonresident. Form 763-S = nonresident waiver for reciprocity.',
  },
  {
    id: 'va-06',
    question_es:
      '¿Cuántos días dentro de Virginia convierten a un individuo en statutory resident (aunque no sea domiciled)?',
    question_en:
      'How many days inside Virginia make an individual a statutory resident (even if not domiciled)?',
    choices_es: ['60 días', '120 días', '183 días', '270 días'],
    choices_en: ['60 days', '120 days', '183 days', '270 days'],
    answer: 2,
    explanation_es:
      'Virginia usa la regla estándar de 183 días. Un no-domiciliado que mantiene un "place of abode" en VA más de 183 días es statutory resident y tributa como residente.',
    explanation_en:
      'Virginia uses the standard 183-day rule. A non-domiciled person who maintains a place of abode in VA for more than 183 days is a statutory resident and is taxed as a resident.',
  },
  {
    id: 'va-07',
    question_es:
      '¿Virginia ofrece un Earned Income Tax Credit (EITC) estatal reembolsable?',
    question_en: 'Does Virginia offer a refundable state Earned Income Tax Credit (EITC)?',
    choices_es: [
      'No, Virginia no tiene EITC estatal',
      'Sí, con porción reembolsable limitada (15%)',
      'Sí, 100% del federal',
      'Solo para residentes de Arlington',
    ],
    choices_en: [
      'No, Virginia has no state EITC',
      'Yes, with limited refundable portion (15%)',
      'Yes, 100% of federal',
      'Only for Arlington residents',
    ],
    answer: 1,
    explanation_es:
      'Desde 2022 Virginia permite opcionalmente un EITC reembolsable equivalente al 15% del federal (o 20% del federal no reembolsable, el contribuyente elige). Antes era solo no reembolsable.',
    explanation_en:
      'Since 2022 Virginia optionally allows a refundable EITC equal to 15% of federal (or 20% nonrefundable of federal, taxpayer chooses). Previously only nonrefundable.',
  },
  {
    id: 'va-08',
    question_es:
      '¿Un salvadoreño con ITIN viviendo permanentemente en Annandale VA debe presentar Form 760?',
    question_en:
      'Must a Salvadoran with an ITIN living permanently in Annandale VA file Form 760?',
    choices_es: [
      'No, ITIN holders están exentos',
      'Sí, si su ingreso excede el umbral de filing de VA',
      'Solo si tiene TPS',
      'Solo si declara federal',
    ],
    choices_en: [
      'No, ITIN holders are exempt',
      'Yes, if income exceeds VA filing threshold',
      'Only if he has TPS',
      'Only if he files federal',
    ],
    answer: 1,
    explanation_es:
      'El status migratorio NO determina obligación fiscal. Si vive permanentemente en VA es residente fiscal y debe presentar si sus ingresos VA exceden el threshold ($11,950 single, $23,900 MFJ aprox.). VA acepta ITINs.',
    explanation_en:
      'Immigration status does NOT determine tax obligation. If he lives permanently in VA he is a tax resident and must file if VA income exceeds the threshold (~$11,950 single, ~$23,900 MFJ). VA accepts ITINs.',
  },
]
