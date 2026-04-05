import type { QuizBank } from './types'

export const quiz01: QuizBank = [
  {
    id: 'fed-01',
    question_es: '¿Cuál es la fecha límite estándar para presentar el Form 1040 federal?',
    question_en: 'What is the standard deadline to file the federal Form 1040?',
    choices_es: ['March 15', 'April 15', 'May 1', 'June 15'],
    choices_en: ['March 15', 'April 15', 'May 1', 'June 15'],
    answer: 1,
    explanation_es:
      'El 15 de abril es la fecha estándar para individuos. Si cae en fin de semana o feriado, se mueve al siguiente día hábil. March 15 es para S-Corps y partnerships.',
    explanation_en:
      'April 15 is the standard date for individuals. If it falls on a weekend or holiday, it moves to the next business day. March 15 is for S-Corps and partnerships.',
  },
  {
    id: 'fed-02',
    question_es:
      'Un extranjero que estuvo 150 días en USA en 2025, 120 en 2024 y 120 en 2023. ¿Es residente fiscal bajo el Substantial Presence Test?',
    question_en:
      'A foreigner spent 150 days in USA in 2025, 120 in 2024 and 120 in 2023. Is she a tax resident under the Substantial Presence Test?',
    choices_es: [
      'No, porque no pasó 183 días en 2025',
      'Sí, porque el total ponderado excede 183',
      'Solo si tiene Green Card',
      'Solo si declara 1040-NR',
    ],
    choices_en: [
      'No, because she did not spend 183 days in 2025',
      'Yes, because the weighted total exceeds 183',
      'Only if she has a Green Card',
      'Only if she files 1040-NR',
    ],
    answer: 1,
    explanation_es:
      'SPT: 150 + (120/3) + (120/6) = 150 + 40 + 20 = 210 días. Como excede 183 y hubo 31+ días en el año en curso, es resident alien.',
    explanation_en:
      'SPT: 150 + (120/3) + (120/6) = 150 + 40 + 20 = 210 days. Since it exceeds 183 and there were 31+ days in the current year, she is a resident alien.',
  },
  {
    id: 'fed-03',
    question_es: '¿Cuál de los siguientes filing status NO existe?',
    question_en: 'Which of the following filing statuses does NOT exist?',
    choices_es: [
      'Married Filing Jointly',
      'Head of Household',
      'Single Parent Deluxe',
      'Qualifying Surviving Spouse',
    ],
    choices_en: [
      'Married Filing Jointly',
      'Head of Household',
      'Single Parent Deluxe',
      'Qualifying Surviving Spouse',
    ],
    answer: 2,
    explanation_es:
      'Los 5 filing status son: Single, Married Filing Jointly (MFJ), Married Filing Separately (MFS), Head of Household (HOH), y Qualifying Surviving Spouse (QSS, antes QW).',
    explanation_en:
      'The 5 filing statuses are: Single, Married Filing Jointly (MFJ), Married Filing Separately (MFS), Head of Household (HOH), and Qualifying Surviving Spouse (QSS, formerly QW).',
  },
  {
    id: 'fed-04',
    question_es: '¿Qué schedule se usa para reportar ingresos de self-employment (1099-NEC)?',
    question_en: 'Which schedule is used to report self-employment income (1099-NEC)?',
    choices_es: ['Schedule A', 'Schedule B', 'Schedule C', 'Schedule D'],
    choices_en: ['Schedule A', 'Schedule B', 'Schedule C', 'Schedule D'],
    answer: 2,
    explanation_es:
      'Schedule C es "Profit or Loss from Business (Sole Proprietorship)". Schedule A = itemized deductions, B = interest/dividends, D = capital gains.',
    explanation_en:
      'Schedule C is "Profit or Loss from Business (Sole Proprietorship)". Schedule A = itemized deductions, B = interest/dividends, D = capital gains.',
  },
  {
    id: 'fed-05',
    question_es:
      '¿Un contribuyente con ITIN (sin SSN válido para trabajo) puede reclamar el Earned Income Tax Credit (EITC)?',
    question_en:
      'Can a taxpayer with an ITIN (without a valid-for-work SSN) claim the Earned Income Tax Credit (EITC)?',
    choices_es: [
      'Sí, siempre',
      'No, el EITC requiere SSN válido para trabajo',
      'Solo si tiene dependientes con SSN',
      'Solo en ciertos estados',
    ],
    choices_en: [
      'Yes, always',
      'No, EITC requires a valid-for-work SSN',
      'Only with SSN-holder dependents',
      'Only in certain states',
    ],
    answer: 1,
    explanation_es:
      'El EITC requiere SSN válido para trabajo del taxpayer, spouse (si MFJ) y hijos calificadores. Titulares de ITIN NO califican para EITC federal, aunque sí para CTC/ACTC después del TCJA y para EITC estatal en algunos estados (CA, WA).',
    explanation_en:
      'EITC requires a valid-for-work SSN for the taxpayer, spouse (if MFJ) and qualifying children. ITIN holders do NOT qualify for federal EITC, though they can qualify for CTC/ACTC post-TCJA and for state EITC in some states (CA, WA).',
  },
  {
    id: 'fed-06',
    question_es: '¿Cuál es la tasa de self-employment tax (Schedule SE) sobre net earnings?',
    question_en: 'What is the self-employment tax rate (Schedule SE) on net earnings?',
    choices_es: ['7.65%', '12.4%', '15.3%', '22%'],
    choices_en: ['7.65%', '12.4%', '15.3%', '22%'],
    answer: 2,
    explanation_es:
      'SE tax es 15.3% sobre el 92.35% del net self-employment income: 12.4% Social Security (hasta el wage base) + 2.9% Medicare (sin tope). Medicare adicional 0.9% aplica sobre $200k.',
    explanation_en:
      'SE tax is 15.3% on 92.35% of net self-employment income: 12.4% Social Security (up to wage base) + 2.9% Medicare (no cap). Additional 0.9% Medicare applies over $200k.',
  },
  {
    id: 'fed-07',
    question_es:
      '¿Qué hace el Form 4868 presentado antes del 15 de abril?',
    question_en: 'What does Form 4868 filed before April 15 do?',
    choices_es: [
      'Extiende el tiempo de pago del impuesto adeudado',
      'Extiende el tiempo para presentar hasta el 15 de octubre',
      'Solicita un refund acelerado',
      'Cambia el filing status',
    ],
    choices_en: [
      'Extends time to pay the tax owed',
      'Extends time to file until October 15',
      'Requests an accelerated refund',
      'Changes the filing status',
    ],
    answer: 1,
    explanation_es:
      'El 4868 extiende SOLO el tiempo de presentación hasta Oct 15. NO extiende el tiempo para PAGAR. Los impuestos adeudados siguen venciendo el 15 de abril — pagarlos tarde genera intereses y penalidades.',
    explanation_en:
      'Form 4868 extends ONLY the filing deadline to Oct 15. It does NOT extend the time to PAY. Taxes owed are still due April 15 — paying late incurs interest and penalties.',
  },
  {
    id: 'fed-08',
    question_es:
      '¿Cuál crédito reembolsa hasta $1,700 por hijo calificado aun cuando el contribuyente no debe impuestos (2024)?',
    question_en:
      'Which credit refunds up to $1,700 per qualifying child even when the taxpayer owes no tax (2024)?',
    choices_es: [
      'Child and Dependent Care Credit',
      'Additional Child Tax Credit (ACTC)',
      'Saver\'s Credit',
      'Adoption Credit',
    ],
    choices_en: [
      'Child and Dependent Care Credit',
      'Additional Child Tax Credit (ACTC)',
      "Saver's Credit",
      'Adoption Credit',
    ],
    answer: 1,
    explanation_es:
      'El Child Tax Credit de $2,000 tiene una porción reembolsable de hasta $1,700 (2024, ajustado anualmente) llamada Additional Child Tax Credit (ACTC). Los otros créditos no son reembolsables o tienen límites diferentes.',
    explanation_en:
      'The $2,000 Child Tax Credit has a refundable portion up to $1,700 (2024, indexed) called the Additional Child Tax Credit (ACTC). The other credits are nonrefundable or have different limits.',
  },
  {
    id: 'fed-09',
    question_es: '¿Qué formulario reemplazó al 1099-MISC para reportar pagos a contratistas desde 2020?',
    question_en: 'What form replaced 1099-MISC for reporting contractor payments starting in 2020?',
    choices_es: ['1099-K', '1099-NEC', '1099-R', 'W-2'],
    choices_en: ['1099-K', '1099-NEC', '1099-R', 'W-2'],
    answer: 1,
    explanation_es:
      'El IRS resucitó el 1099-NEC (Nonemployee Compensation) en 2020 para separar los pagos a contratistas del resto de ítems miscelláneos que siguen en 1099-MISC.',
    explanation_en:
      'The IRS revived the 1099-NEC (Nonemployee Compensation) in 2020 to separate contractor payments from the other miscellaneous items that remain in 1099-MISC.',
  },
  {
    id: 'fed-10',
    question_es:
      '¿Un cliente salvadoreño residente fiscal US tiene $12,000 agregados entre cuentas en Banco Cuscatlán y Banco Agrícola. ¿Qué reporte adicional aplica?',
    question_en:
      'A Salvadoran client who is a US tax resident has $12,000 aggregated between Banco Cuscatlán and Banco Agrícola accounts. What additional report applies?',
    choices_es: [
      'Nada, son cuentas personales',
      'FBAR (FinCEN 114)',
      'Form 1040-NR',
      'Form 2555',
    ],
    choices_en: [
      'Nothing, they are personal accounts',
      'FBAR (FinCEN 114)',
      'Form 1040-NR',
      'Form 2555',
    ],
    answer: 1,
    explanation_es:
      'FBAR se activa cuando las cuentas extranjeras agregadas exceden $10,000 USD en CUALQUIER punto del año. Vence Apr 15 con auto-extensión a Oct 15. Las penalidades son severas ($10k+ por violación no-willful).',
    explanation_en:
      'FBAR is triggered when aggregate foreign accounts exceed $10,000 USD at ANY point in the year. Due Apr 15 with auto-extension to Oct 15. Penalties are severe ($10k+ per non-willful violation).',
  },
]
