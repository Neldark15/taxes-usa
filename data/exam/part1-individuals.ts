import type { ExamBank } from './types'

/**
 * EA SEE — Part 1: Individuals
 *
 * ⚠️ IMPORTANT — DISCLAIMER:
 * These are NOT the actual IRS/Prometric SEE questions.
 * The real SEE question bank is confidential and proprietary.
 * These are educational questions written based on the public IRS SEE content outline
 * (irs.gov/tax-professionals/enrolled-agents/special-enrollment-examination-questions-and-official-answers).
 * For real exam prep, use commercial banks: Gleim, Surgent, Fast Forward Academy, Passkey.
 *
 * Values (2024) should be verified against irs.gov as they adjust annually.
 */
export const examPart1: ExamBank = {
  part: 1,
  name: 'Part 1: Individuals',
  questions: [
    {
      id: 'p1-01',
      topic: 'Filing Requirements',
      question:
        'A single taxpayer under age 65 with gross income of $13,500 in 2024 — must they file a federal tax return?',
      choices: [
        'No, income is below the threshold',
        'Yes, gross income exceeds the standard deduction',
        'Only if they had withholding',
        'Only if they had self-employment income',
      ],
      answer: 0,
      explanation_en:
        'For 2024, a single taxpayer under 65 must file if gross income ≥ $14,600 (the standard deduction). $13,500 is below threshold, so filing is not required. However, filing may still be beneficial to claim refund of withholding or EITC.',
      explanation_es:
        'Para 2024, un single menor de 65 debe presentar si su gross income es ≥ $14,600 (la standard deduction). $13,500 está bajo el umbral, así que la presentación no es obligatoria. Sin embargo, puede ser beneficioso presentar para reclamar refund de withholding o EITC.',
    },
    {
      id: 'p1-02',
      topic: 'Filing Status',
      question:
        'A taxpayer divorced on December 30, 2024. What is their filing status for tax year 2024?',
      choices: [
        'Married Filing Jointly',
        'Married Filing Separately',
        'Single (or Head of Household if qualifying)',
        'Qualifying Surviving Spouse',
      ],
      answer: 2,
      explanation_en:
        'Marital status is determined on the last day of the year. Divorced on Dec 30 means unmarried on Dec 31. Filing status is Single, or Head of Household if they have a qualifying dependent.',
      explanation_es:
        'El estado civil se determina el último día del año. Divorciada el 30 de diciembre significa unmarried el 31 de diciembre. Filing status es Single, o Head of Household si tiene un dependiente calificador.',
    },
    {
      id: 'p1-03',
      topic: 'Dependents',
      question:
        'Which of the following is NOT a requirement to claim a qualifying child?',
      choices: [
        'Age test (under 19, or under 24 if a full-time student)',
        'Residency test (lived with taxpayer more than half the year in US/Canada/Mexico)',
        'Support test (child did not provide more than half of own support)',
        'Joint return test (child is a US citizen)',
      ],
      answer: 3,
      explanation_en:
        'Citizenship/residency requirement is separate. The joint return test requires that the qualifying child did NOT file a joint return (except to claim a refund). The tests are: relationship, age, residency, support, and joint return.',
      explanation_es:
        'El requisito de ciudadanía/residencia es separado. El joint return test requiere que el qualifying child NO haya presentado un return conjunto (excepto para reclamar refund). Los tests son: relationship, age, residency, support, y joint return.',
    },
    {
      id: 'p1-04',
      topic: 'Filing Status',
      question:
        'To qualify as Head of Household, which of the following is NOT required?',
      choices: [
        'Unmarried or considered unmarried on the last day of the year',
        'Paid more than half the cost of keeping up a home for the year',
        'A qualifying person lived with taxpayer for more than half the year',
        'Minimum of 3 dependents',
      ],
      answer: 3,
      explanation_en:
        'HOH requires: unmarried (or considered unmarried), paid >50% of home costs, AND a qualifying person lived with taxpayer >half the year (parent is exception — does not have to live with taxpayer). Number of dependents is not a requirement.',
      explanation_es:
        'HOH requiere: unmarried (o considered unmarried), haber pagado más del 50% de los costos del hogar, Y que una qualifying person haya vivido con el taxpayer más de la mitad del año (padre/madre es excepción — no tiene que vivir con el taxpayer). El número de dependientes no es un requisito.',
    },
    {
      id: 'p1-05',
      topic: 'Income',
      question:
        'A taxpayer received $1,200 in unemployment compensation. How is this treated on the federal return?',
      choices: [
        'Not taxable',
        'Taxable as ordinary income on Schedule 1',
        'Taxable at 50%',
        'Taxable only if total income exceeds $25,000',
      ],
      answer: 1,
      explanation_en:
        'Unemployment compensation is fully taxable as ordinary income, reported on Schedule 1 line 7. Client receives 1099-G from the state. (The 2020 ARPA $10,200 exclusion was only for that year.)',
      explanation_es:
        'Unemployment compensation es totalmente gravable como ordinary income, se reporta en Schedule 1 línea 7. El cliente recibe 1099-G del estado. (La exclusión de $10,200 del ARPA 2020 fue solo para ese año.)',
    },
    {
      id: 'p1-06',
      topic: 'Income',
      question: 'Social Security benefits are taxable at what maximum percentage?',
      choices: ['0%', '50%', '85%', '100%'],
      answer: 2,
      explanation_en:
        'Up to 85% of Social Security benefits may be taxable, depending on combined income (AGI + tax-exempt interest + 1/2 SS benefits). Formula in Publication 915.',
      explanation_es:
        'Hasta el 85% de los Social Security benefits puede ser gravable, dependiendo del combined income (AGI + interés exento + 1/2 de los SS benefits). Fórmula en Publication 915.',
    },
    {
      id: 'p1-07',
      topic: 'Self-Employment',
      question:
        'A taxpayer has $20,000 net profit from self-employment. What is the self-employment tax?',
      choices: [
        '$2,826 (15.3% of $18,470)',
        '$3,060 (15.3% of $20,000)',
        '$1,530',
        '$4,120',
      ],
      answer: 0,
      explanation_en:
        'SE tax is 15.3% on 92.35% of net SE income. $20,000 × 0.9235 = $18,470. $18,470 × 0.153 = $2,826. 50% ($1,413) is deductible as an adjustment to income.',
      explanation_es:
        'El SE tax es 15.3% sobre el 92.35% del net SE income. $20,000 × 0.9235 = $18,470. $18,470 × 0.153 = $2,826. El 50% ($1,413) es deducible como adjustment to income.',
    },
    {
      id: 'p1-08',
      topic: 'Capital Gains',
      question:
        'A taxpayer held a stock for 11 months and sold at a gain. How is the gain taxed?',
      choices: [
        'Long-term capital gain (preferential rate)',
        'Short-term capital gain (ordinary rate)',
        'Not taxable',
        'Taxed at 28% collectibles rate',
      ],
      answer: 1,
      explanation_en:
        'Long-term requires holding period MORE than one year (> 12 months). 11 months = short-term = taxed at ordinary income rates. Report on Schedule D and Form 8949.',
      explanation_es:
        'Long-term requiere un holding period MÁS de un año (mayor a 12 meses). 11 meses = short-term = gravado a tasas ordinarias de income. Se reporta en Schedule D y Form 8949.',
    },
    {
      id: 'p1-09',
      topic: 'Retirement',
      question:
        'What is the additional tax penalty for early withdrawal (before age 59½) from a traditional IRA (absent exceptions)?',
      choices: ['5%', '10%', '15%', '25%'],
      answer: 1,
      explanation_en:
        '10% additional tax under IRC §72(t). Reported on Form 5329. Exceptions include: first-time home purchase ($10k), higher education, medical expenses > 7.5% AGI, disability, death, SEPP, etc.',
      explanation_es:
        '10% additional tax bajo IRC §72(t). Se reporta en Form 5329. Las excepciones incluyen: primera compra de casa ($10k), higher education, gastos médicos mayores al 7.5% AGI, disability, muerte, SEPP, etc.',
    },
    {
      id: 'p1-10',
      topic: 'Income',
      question: 'Alimony received under a divorce agreement executed in 2024 is:',
      choices: [
        'Fully taxable to recipient',
        'Partially taxable',
        'Not taxable (post-TCJA)',
        'Taxable only if over $5,000',
      ],
      answer: 2,
      explanation_en:
        'For divorce agreements executed AFTER 12/31/2018, alimony is NOT taxable to recipient and NOT deductible by payer (TCJA change). Pre-2019 agreements retain old treatment.',
      explanation_es:
        'Para acuerdos de divorcio ejecutados DESPUÉS del 31/12/2018, la alimony NO es gravable para el recipient y NO es deducible para el payer (cambio del TCJA). Los acuerdos pre-2019 mantienen el tratamiento anterior.',
    },
    {
      id: 'p1-11',
      topic: 'Deductions',
      question:
        'The 2024 standard deduction for a Married Filing Jointly couple, both under 65, is:',
      choices: ['$13,850', '$14,600', '$27,700', '$29,200'],
      answer: 3,
      explanation_en:
        '$29,200 for MFJ in 2024. Single: $14,600. HOH: $21,900. MFS: $14,600. Additional amounts apply for age 65+ or blind.',
      explanation_es:
        '$29,200 para MFJ en 2024. Single: $14,600. HOH: $21,900. MFS: $14,600. Hay montos adicionales para 65+ años o ciegos.',
    },
    {
      id: 'p1-12',
      topic: 'Itemized',
      question:
        'The SALT (state and local tax) deduction on Schedule A is capped at:',
      choices: ['$5,000', '$10,000', '$15,000', 'No cap'],
      answer: 1,
      explanation_en:
        '$10,000 per return (TCJA cap through 2025). $5,000 for MFS. Includes state/local income tax OR sales tax, plus property taxes.',
      explanation_es:
        '$10,000 por return (cap del TCJA hasta 2025). $5,000 para MFS. Incluye state/local income tax O sales tax, más property taxes.',
    },
    {
      id: 'p1-13',
      topic: 'Credits',
      question:
        'The Child Tax Credit refundable portion (ACTC) for 2024 is capped at:',
      choices: [
        '$1,400 per child',
        '$1,600 per child',
        '$1,700 per child',
        '$2,000 per child',
      ],
      answer: 2,
      explanation_en:
        'For 2024, the refundable Additional Child Tax Credit (ACTC) is capped at $1,700 per qualifying child. Total CTC remains $2,000 per child. Adjusted annually.',
      explanation_es:
        'Para 2024, el Additional Child Tax Credit (ACTC) refundable tiene un cap de $1,700 por qualifying child. El CTC total sigue siendo $2,000 por niño. Se ajusta anualmente.',
    },
    {
      id: 'p1-14',
      topic: 'Credits',
      question:
        'Which credit is NOT available to ITIN holders filing with a valid ITIN?',
      choices: [
        'Child Tax Credit (if child has SSN)',
        'Credit for Other Dependents',
        'Earned Income Tax Credit (federal)',
        "Saver's Credit",
      ],
      answer: 2,
      explanation_en:
        'EITC requires a work-valid SSN for taxpayer, spouse (if MFJ), and qualifying children. ITIN holders do not qualify. They CAN claim CTC (if child has SSN), Credit for Other Dependents, and Saver\'s Credit.',
      explanation_es:
        'El EITC requiere SSN válido para trabajo del taxpayer, cónyuge (si MFJ), y qualifying children. Los ITIN holders no califican. SÍ pueden reclamar CTC (si el hijo tiene SSN), Credit for Other Dependents, y Saver\'s Credit.',
    },
    {
      id: 'p1-15',
      topic: 'Credits',
      question:
        'The American Opportunity Credit (AOTC) refundable portion is:',
      choices: [
        '$500',
        '$1,000 (40% of $2,500 max)',
        '$1,500',
        '$2,500 (100%)',
      ],
      answer: 1,
      explanation_en:
        'AOTC max is $2,500 per eligible student. 40% is refundable ($1,000 max). Available for first 4 years of post-secondary education. Lifetime Learning Credit (LLC) is fully nonrefundable.',
      explanation_es:
        'El máximo del AOTC es $2,500 por estudiante elegible. El 40% es refundable (máximo $1,000). Disponible para los primeros 4 años de post-secondary education. El Lifetime Learning Credit (LLC) es totalmente nonrefundable.',
    },
    {
      id: 'p1-16',
      topic: 'Credits',
      question:
        'Form 8867 (Paid Preparer Due Diligence) is required when claiming which of the following?',
      choices: [
        'Only EITC',
        'EITC, CTC, ACTC, AOTC, and Head of Household status',
        'Only credits exceeding $1,000',
        'Only for new clients',
      ],
      answer: 1,
      explanation_en:
        'Form 8867 required for EITC, CTC, ACTC, AOTC, and HOH filing status. Penalty per omission is $635 in 2024 (adjusted annually). Can be $2,540+ per return if multiple credits.',
      explanation_es:
        'Form 8867 es obligatorio para EITC, CTC, ACTC, AOTC, y HOH filing status. La penalty por omisión es $635 en 2024 (se ajusta anualmente). Puede ser $2,540+ por return si son múltiples créditos.',
    },
    {
      id: 'p1-17',
      topic: 'Taxation',
      question:
        'Net investment income tax (NIIT) of 3.8% applies when MAGI exceeds what threshold for single filers?',
      choices: ['$100,000', '$150,000', '$200,000', '$250,000'],
      answer: 2,
      explanation_en:
        '$200,000 for Single/HOH, $250,000 for MFJ, $125,000 for MFS. 3.8% applies to the LESSER of net investment income or MAGI excess over threshold. Form 8960.',
      explanation_es:
        '$200,000 para Single/HOH, $250,000 para MFJ, $125,000 para MFS. El 3.8% aplica al MENOR entre el net investment income o el exceso de MAGI sobre el umbral. Form 8960.',
    },
    {
      id: 'p1-18',
      topic: 'Taxation',
      question:
        'Additional Medicare Tax of 0.9% applies to wages exceeding what threshold for single filers?',
      choices: ['$150,000', '$200,000', '$250,000', '$300,000'],
      answer: 1,
      explanation_en:
        '$200,000 Single/HOH, $250,000 MFJ, $125,000 MFS. Employer withholds 0.9% on wages > $200,000 regardless of filing status. Reconciled on Form 8959.',
      explanation_es:
        '$200,000 Single/HOH, $250,000 MFJ, $125,000 MFS. El empleador retiene el 0.9% sobre wages mayores a $200,000 sin importar el filing status. Se reconcilia en Form 8959.',
    },
    {
      id: 'p1-19',
      topic: 'Penalties',
      question:
        'What is the failure-to-pay penalty rate per month (on unpaid tax)?',
      choices: ['0.25%', '0.5%', '1%', '5%'],
      answer: 1,
      explanation_en:
        '0.5% per month (or part of month) on unpaid tax, up to 25% max. Combined with failure-to-file penalty (5%/month), the total becomes 5% in months where both apply. Interest also accrues.',
      explanation_es:
        '0.5% por mes (o parte del mes) sobre el impuesto no pagado, hasta un máximo del 25%. Combinada con failure-to-file penalty (5%/mes), el total se vuelve 5% en los meses donde ambas aplican. También se acumulan intereses.',
    },
    {
      id: 'p1-20',
      topic: 'IRA',
      question:
        'The 2024 IRA contribution limit for someone age 45 is:',
      choices: ['$6,000', '$6,500', '$7,000', '$7,500'],
      answer: 2,
      explanation_en:
        '$7,000 for 2024 (up from $6,500 in 2023). Age 50+ catch-up adds $1,000 for a total of $8,000. Contribution must be made by tax deadline (April 15 of following year).',
      explanation_es:
        '$7,000 para 2024 (subió desde $6,500 en 2023). El catch-up para 50+ años suma $1,000 adicionales, total $8,000. La contribución debe hacerse antes del tax deadline (15 de abril del año siguiente).',
    },
    {
      id: 'p1-21',
      topic: 'Amended Returns',
      question:
        'The time limit to claim a refund by filing Form 1040-X is generally:',
      choices: [
        '1 year from original filing',
        '2 years from original filing',
        '3 years from original filing OR 2 years from tax payment, whichever is later',
        '5 years from original filing',
      ],
      answer: 2,
      explanation_en:
        'Statute of limitations: 3 years from the date the original return was filed, OR 2 years from the date the tax was paid, whichever is LATER. Longer periods for bad debts (7 years) and foreign tax credits (10 years).',
      explanation_es:
        'Statute of limitations: 3 años desde la fecha en que se presentó el return original, O 2 años desde la fecha en que se pagó el impuesto, el que sea MÁS TARDE. Hay períodos más largos para bad debts (7 años) y foreign tax credits (10 años).',
    },
    {
      id: 'p1-22',
      topic: 'Estimated Taxes',
      question:
        'To avoid underpayment penalty via safe harbor, a taxpayer with prior-year AGI of $100,000 must pay at least:',
      choices: [
        '50% of current-year tax',
        '90% of current-year tax OR 100% of prior-year tax',
        '110% of prior-year tax',
        '100% of current-year tax',
      ],
      answer: 1,
      explanation_en:
        'Safe harbor: pay during the year the LESSER of (a) 90% of current year tax or (b) 100% of prior year tax. Note: 110% of prior-year tax if prior-year AGI exceeded $150,000.',
      explanation_es:
        'Safe harbor: pagar durante el año el MENOR de (a) 90% del impuesto del año actual o (b) 100% del impuesto del año anterior. Nota: 110% del prior-year tax si el AGI del año anterior excedió $150,000.',
    },
    {
      id: 'p1-23',
      topic: 'Foreign Reporting',
      question: 'FBAR (FinCEN Form 114) must be filed when foreign accounts exceed:',
      choices: [
        '$10,000 at year-end',
        '$10,000 aggregate at any time during the year',
        '$50,000 aggregate',
        '$100,000 at year-end',
      ],
      answer: 1,
      explanation_en:
        '$10,000 USD aggregated across all foreign accounts at ANY point during the year triggers FBAR. Filed electronically at fincen.gov. Due April 15 with automatic extension to October 15.',
      explanation_es:
        '$10,000 USD agregados a través de todas las cuentas extranjeras en CUALQUIER momento del año activa el FBAR. Se presenta electrónicamente en fincen.gov. Vence el 15 de abril con auto-extensión al 15 de octubre.',
    },
    {
      id: 'p1-24',
      topic: 'Foreign Reporting',
      question: 'Form 8938 (FATCA) threshold for a US resident single filer is:',
      choices: [
        '$10,000',
        '$50,000 at year-end OR $75,000 at any point',
        '$100,000 at year-end',
        '$200,000 at year-end',
      ],
      answer: 1,
      explanation_en:
        'For US residents single: $50,000 on last day OR $75,000 at any point during the year. MFJ doubles the thresholds. Higher thresholds for Americans abroad. Form 8938 is filed WITH the 1040.',
      explanation_es:
        'Para US residents single: $50,000 en el último día O $75,000 en cualquier momento del año. MFJ duplica los umbrales. Hay umbrales más altos para americanos abroad. El Form 8938 se presenta JUNTO con el 1040.',
    },
    {
      id: 'p1-25',
      topic: 'ITIN',
      question:
        'Which document is NOT acceptable alone (without other documents) for an ITIN application via Form W-7?',
      choices: [
        'Valid passport',
        'Foreign driver license',
        'US visa',
        'Birth certificate',
      ],
      answer: 1,
      explanation_en:
        'A valid passport IS the only single document that satisfies both identity and foreign status for ITIN. Foreign driver license, US visa, and birth certificate must be combined with another document. Passport is the preferred single submission.',
      explanation_es:
        'Un passport válido ES el único documento único que satisface tanto identidad como foreign status para el ITIN. Foreign driver license, US visa, y birth certificate deben combinarse con otro documento. El passport es el envío único preferido.',
    },
    {
      id: 'p1-26',
      topic: 'Ethics',
      question:
        'Under Circular 230 §10.27, a preparer may NOT charge:',
      choices: [
        'Hourly fees over $300',
        'Contingent fees on original federal returns (percentage of refund)',
        'Flat fees exceeding $500',
        'Any fee for amended returns',
      ],
      answer: 1,
      explanation_en:
        'Circular 230 §10.27 prohibits contingent fees (percentage of refund) on ORIGINAL federal returns. Limited exceptions apply to amended returns under audit, refund claims, and certain appeals.',
      explanation_es:
        'Circular 230 §10.27 prohíbe los contingent fees (porcentaje del refund) en returns federales ORIGINALES. Hay excepciones limitadas para amended returns bajo audit, refund claims, y ciertas apelaciones.',
    },
    {
      id: 'p1-27',
      topic: 'Ethics',
      question:
        'A preparer discovers that a client\'s prior return has a material error. Under Circular 230, the preparer must:',
      choices: [
        'Report to the IRS immediately',
        'Advise the client of the error and the consequences',
        'Refuse to prepare the current year return',
        'Charge a penalty to the client',
      ],
      answer: 1,
      explanation_en:
        '§10.21 requires advising the client of the error, consequences, and the available corrective measures (amendment). The preparer is not obligated to correct it unilaterally or report the client. Continuing to prepare subsequent returns is the client\'s decision.',
      explanation_es:
        '§10.21 requiere advertir al cliente del error, las consecuencias, y las medidas correctivas disponibles (amendment). El preparador no está obligado a corregirlo unilateralmente ni a reportar al cliente. Continuar preparando returns subsiguientes es decisión del cliente.',
    },
    {
      id: 'p1-28',
      topic: 'IRS Procedures',
      question: 'How long must a paid preparer retain a copy of prepared returns?',
      choices: ['1 year', '3 years', '5 years', '7 years'],
      answer: 1,
      explanation_en:
        '3 years minimum under federal rules (IRC §6107). Some states require longer (NY 6 years, MD 4). Also keep Form 8867 due diligence documentation for 3 years.',
      explanation_es:
        '3 años mínimo bajo las reglas federales (IRC §6107). Algunos estados requieren más (NY 6 años, MD 4). También retener documentación de due diligence de Form 8867 por 3 años.',
    },
    {
      id: 'p1-29',
      topic: 'Taxation',
      question:
        'A taxpayer has $5,000 in gambling winnings and $7,000 in gambling losses. What can they deduct?',
      choices: [
        '$7,000 losses fully',
        '$5,000 (limited to winnings) if itemizing',
        '$2,000 (net loss)',
        'Nothing',
      ],
      answer: 1,
      explanation_en:
        'Gambling losses deductible only to the extent of winnings, AND only if itemizing on Schedule A. Must have documentation. The $5,000 in winnings is fully reported as income; $5,000 in losses can offset it if itemizing.',
      explanation_es:
        'Las gambling losses son deducibles solo hasta el monto de las winnings, Y solo si itemiza en Schedule A. Debe tener documentación. Los $5,000 en winnings se reportan totalmente como income; $5,000 en losses pueden compensarlos si itemiza.',
    },
    {
      id: 'p1-30',
      topic: 'Dependents',
      question:
        'A qualifying relative must meet which of the following gross income tests for 2024?',
      choices: [
        'Gross income under $4,400',
        'Gross income under $5,050',
        'Gross income under $5,500',
        'No income test for qualifying relative',
      ],
      answer: 1,
      explanation_en:
        'For 2024, the qualifying relative gross income test is $5,050 (indexed annually). The person must also meet relationship/member of household, not-qualifying-child, and support tests. US citizenship or US/Canada/Mexico residency is also required.',
      explanation_es:
        'Para 2024, el gross income test del qualifying relative es $5,050 (ajustado anualmente). La persona también debe cumplir los tests de relationship/member of household, not-qualifying-child, y support. También se requiere ciudadanía US o residencia en US/Canadá/México.',
    },
  ],
}
