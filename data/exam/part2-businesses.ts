import type { ExamBank } from './types'

/**
 * EA SEE — Part 2: Businesses
 *
 * ⚠️ DISCLAIMER: These are NOT actual IRS/Prometric SEE questions.
 * Educational questions based on public IRS SEE content outline.
 * For real exam prep use: Gleim, Surgent, Fast Forward Academy, Passkey.
 */
export const examPart2: ExamBank = {
  part: 2,
  name: 'Part 2: Businesses',
  questions: [
    {
      id: 'p2-01',
      topic: 'Business Entities',
      question:
        'Which business entity files Form 1120-S and passes income through to shareholders?',
      choices: ['C-Corporation', 'S-Corporation', 'Partnership', 'Sole Proprietorship'],
      answer: 1,
      explanation_en:
        'S-Corporation files Form 1120-S and passes income, losses, deductions, and credits through to shareholders via Schedule K-1. C-Corps file 1120 and pay entity-level tax. Partnerships file 1065.',
      explanation_es:
        'S-Corporation presenta Form 1120-S y pasa income, losses, deducciones, y créditos a los shareholders vía Schedule K-1. C-Corps presentan 1120 y pagan tax a nivel de entidad. Partnerships presentan 1065.',
    },
    {
      id: 'p2-02',
      topic: 'Business Entities',
      question:
        'A Single-Member LLC with a foreign owner is by default treated for federal income tax purposes as:',
      choices: [
        'A C-Corporation',
        'A Partnership',
        'A Disregarded entity (flows through to owner)',
        'An S-Corporation',
      ],
      answer: 2,
      explanation_en:
        'SMLLC default = disregarded entity. Income flows to the foreign owner as if the LLC did not exist for income tax. HOWEVER, Form 5472 + Form 1120 pro-forma is mandatory for foreign-owned SMLLCs ($25,000 penalty for non-filing).',
      explanation_es:
        'SMLLC por default = disregarded entity. El income fluye al foreign owner como si el LLC no existiera para income tax. SIN EMBARGO, Form 5472 + Form 1120 pro-forma es obligatorio para SMLLCs con foreign owner (penalty de $25,000 por no presentarlo).',
    },
    {
      id: 'p2-03',
      topic: 'S-Corporation',
      question: 'What is the maximum number of shareholders an S-Corporation can have?',
      choices: ['35', '50', '100', '150'],
      answer: 2,
      explanation_en:
        'S-Corp is limited to 100 shareholders. Members of a family are treated as one shareholder. Shareholders must be US citizens or resident aliens, estates, certain trusts, or tax-exempt orgs — NOT nonresident aliens or C-Corps.',
      explanation_es:
        'La S-Corp está limitada a 100 shareholders. Los miembros de una familia se tratan como un solo shareholder. Los shareholders deben ser US citizens o resident aliens, estates, ciertos trusts, u orgs tax-exempt — NO nonresident aliens ni C-Corps.',
    },
    {
      id: 'p2-04',
      topic: 'Partnership',
      question: 'The partnership tax return is due on:',
      choices: ['March 15', 'April 15', 'May 15', 'June 15'],
      answer: 0,
      explanation_en:
        'Form 1065 is due March 15 (or 15th day of 3rd month after year end). Automatic 6-month extension via Form 7004. K-1s must be distributed to partners by the same date.',
      explanation_es:
        'El Form 1065 vence el 15 de marzo (o el día 15 del 3er mes después del cierre del año). Extensión automática de 6 meses vía Form 7004. Los K-1s deben distribuirse a los socios para la misma fecha.',
    },
    {
      id: 'p2-05',
      topic: 'Depreciation',
      question:
        'Under §179, a business may elect to expense up to what amount in 2024 (subject to phase-out)?',
      choices: ['$500,000', '$1,000,000', '$1,160,000', '$1,220,000'],
      answer: 3,
      explanation_en:
        '§179 limit for 2024 is $1,220,000, with phase-out beginning at $3,050,000. Allows immediate expense of qualifying property instead of depreciating over years. Limited to business income.',
      explanation_es:
        'El límite de §179 para 2024 es $1,220,000, con phase-out comenzando en $3,050,000. Permite gastar inmediatamente qualifying property en lugar de depreciarla durante años. Limitado al business income.',
    },
    {
      id: 'p2-06',
      topic: 'Depreciation',
      question: 'MACRS class life for office furniture and equipment is:',
      choices: ['5 years', '7 years', '10 years', '15 years'],
      answer: 1,
      explanation_en:
        '7-year MACRS property: office furniture, fixtures, most machinery. 5-year: cars, computers, office equipment. 27.5-year: residential rental real estate. 39-year: commercial real estate.',
      explanation_es:
        '7-year MACRS property: office furniture, fixtures, most machinery. 5-year: autos, computadoras, equipo de oficina. 27.5-year: residential rental real estate. 39-year: commercial real estate.',
    },
    {
      id: 'p2-07',
      topic: 'Business Deductions',
      question: 'Business meals are generally deductible at what percentage?',
      choices: ['0%', '50%', '80%', '100%'],
      answer: 1,
      explanation_en:
        '50% deductible as of 2023 (the 100% deduction for restaurant meals from COVID-era expired Dec 31, 2022). Entertainment is generally 0% since TCJA.',
      explanation_es:
        '50% deducible desde 2023 (la deducción del 100% para restaurant meals de la era COVID expiró el 31 de diciembre de 2022). El entertainment es generalmente 0% desde el TCJA.',
    },
    {
      id: 'p2-08',
      topic: 'Retirement Plans',
      question: 'The 2024 employee contribution limit for a 401(k) is:',
      choices: ['$19,500', '$22,500', '$23,000', '$30,500'],
      answer: 2,
      explanation_en:
        '$23,000 for 2024 (up from $22,500 in 2023). Catch-up contribution for age 50+ is additional $7,500, for total of $30,500. SIMPLE IRA limit is $16,000.',
      explanation_es:
        '$23,000 para 2024 (subió desde $22,500 en 2023). El catch-up para 50+ años es $7,500 adicionales, total $30,500. El límite de SIMPLE IRA es $16,000.',
    },
    {
      id: 'p2-09',
      topic: 'Retirement Plans',
      question: 'A SEP-IRA allows an employer to contribute up to what percentage of employee compensation in 2024?',
      choices: ['15%', '20%', '25%', '33%'],
      answer: 2,
      explanation_en:
        'SEP-IRA: up to 25% of employee compensation or $69,000 (2024), whichever is less. For self-employed, effective rate is ~20% of net SE income after 50% SE tax deduction.',
      explanation_es:
        'SEP-IRA: hasta 25% de la compensación del empleado o $69,000 (2024), el que sea menor. Para self-employed, la tasa efectiva es ~20% del net SE income después de la deducción del 50% del SE tax.',
    },
    {
      id: 'p2-10',
      topic: 'Self-Employed',
      question: 'A self-employed individual\'s health insurance premiums are deductible:',
      choices: [
        'As an itemized deduction on Schedule A only',
        'As an adjustment to income on Schedule 1, above the line',
        'Only if greater than 7.5% of AGI',
        'Not deductible for self-employed',
      ],
      answer: 1,
      explanation_en:
        'Self-employed health insurance is deductible above-the-line on Schedule 1, subject to net SE income limitation. Does not need to exceed 7.5% AGI like itemized medical. Taxpayer and spouse cannot be eligible for employer-subsidized plan.',
      explanation_es:
        'El health insurance para self-employed es deducible above-the-line en Schedule 1, sujeto al límite del net SE income. No necesita exceder el 7.5% del AGI como el itemized medical. El taxpayer y cónyuge no pueden ser elegibles para plan subsidiado por empleador.',
    },
    {
      id: 'p2-11',
      topic: 'Partnership',
      question: 'A partner\'s basis in a partnership is generally decreased by:',
      choices: [
        'Additional capital contributions',
        'Share of partnership income',
        'Distributions and share of losses',
        'New partner admission',
      ],
      answer: 2,
      explanation_en:
        'Basis decreases by: distributions, share of losses, nondeductible expenses. Basis increases by: contributions, share of income, share of liabilities. Basis cannot go below zero; excess losses are suspended.',
      explanation_es:
        'El basis disminuye por: distribuciones, share of losses, gastos no deducibles. El basis aumenta por: contribuciones, share of income, share of liabilities. El basis no puede bajar de cero; los excess losses se suspenden.',
    },
    {
      id: 'p2-12',
      topic: 'Basis',
      question: 'An S-Corp shareholder\'s basis in loans to the corporation:',
      choices: [
        'Is the same as stock basis',
        'Is separate from stock basis and may allow loss deductions when stock basis is exhausted',
        'Is not relevant to the tax return',
        'Is limited to $100,000',
      ],
      answer: 1,
      explanation_en:
        'Debt basis is tracked separately from stock basis. When stock basis is exhausted, losses can be deducted against debt basis. Loan must be direct from shareholder to S-Corp (not via third-party).',
      explanation_es:
        'El debt basis se rastrea por separado del stock basis. Cuando el stock basis se agota, las losses pueden deducirse contra el debt basis. El préstamo debe ser directo del shareholder a la S-Corp (no vía tercera parte).',
    },
    {
      id: 'p2-13',
      topic: 'Payroll',
      question:
        'The employer portion of Social Security tax on employee wages is:',
      choices: ['1.45%', '6.2%', '7.65%', '15.3%'],
      answer: 1,
      explanation_en:
        'Employer pays 6.2% Social Security + 1.45% Medicare = 7.65% of wages (matched by employee). Combined employer+employee = 15.3% (same as SE tax). SS wage base 2024: $168,600.',
      explanation_es:
        'El empleador paga 6.2% Social Security + 1.45% Medicare = 7.65% de wages (igualado por el empleado). Combinado empleador+empleado = 15.3% (igual que el SE tax). SS wage base 2024: $168,600.',
    },
    {
      id: 'p2-14',
      topic: 'Payroll',
      question: 'When is Form 941 (Employer\'s Quarterly Federal Tax Return) due?',
      choices: [
        'Annually on January 31',
        'Quarterly, last day of month after quarter end',
        'Monthly, 15th of following month',
        'Annually on April 15',
      ],
      answer: 1,
      explanation_en:
        'Form 941: April 30, July 31, October 31, January 31 (10 days extra if all deposits on time). Small employers (annual liability under $1,000) may file Form 944 annually instead.',
      explanation_es:
        'Form 941: 30 de abril, 31 de julio, 31 de octubre, 31 de enero (10 días extra si todos los depósitos están a tiempo). Pequeños empleadores (liability anual menor a $1,000) pueden presentar Form 944 anualmente en su lugar.',
    },
    {
      id: 'p2-15',
      topic: 'Business Income',
      question: 'The Qualified Business Income (QBI) deduction under §199A is generally:',
      choices: ['10% of QBI', '15% of QBI', '20% of QBI', '25% of QBI'],
      answer: 2,
      explanation_en:
        '§199A allows a 20% deduction on QBI from pass-through entities (Schedule C, K-1 from partnership/S-Corp). Subject to phaseouts for specified service trades or businesses (SSTBs) at income over $241,950 single / $483,900 MFJ (2024).',
      explanation_es:
        '§199A permite una deducción del 20% sobre QBI de entidades pass-through (Schedule C, K-1 de partnership/S-Corp). Sujeto a phaseouts para specified service trades or businesses (SSTBs) con income sobre $241,950 single / $483,900 MFJ (2024).',
    },
    {
      id: 'p2-16',
      topic: 'C-Corporation',
      question: 'The flat federal corporate tax rate for C-Corporations since TCJA is:',
      choices: ['15%', '21%', '25%', '35%'],
      answer: 1,
      explanation_en:
        '21% flat rate since TCJA 2017 (was previously graduated up to 35%). Applies to all C-Corp taxable income. Double taxation: C-Corp pays 21%, then shareholders pay tax on dividends.',
      explanation_es:
        '21% flat desde el TCJA 2017 (antes era graduado hasta 35%). Aplica a todo el taxable income de C-Corp. Doble tributación: C-Corp paga 21%, luego los shareholders pagan tax sobre dividendos.',
    },
    {
      id: 'p2-17',
      topic: 'Farmers',
      question: 'Farmers must file and pay estimated taxes by which date if they wish to skip quarterly estimateds?',
      choices: ['January 15', 'March 1', 'April 15', 'No special rule'],
      answer: 1,
      explanation_en:
        'Farmers and fishermen may skip quarterly estimated taxes if they file by March 1 AND pay 100% of tax owed. This special rule applies if 2/3 of gross income is from farming/fishing.',
      explanation_es:
        'Farmers y fishermen pueden saltarse los estimated taxes trimestrales si presentan antes del 1 de marzo Y pagan el 100% del tax debido. Esta regla especial aplica si 2/3 del gross income viene de farming/fishing.',
    },
    {
      id: 'p2-18',
      topic: 'Tax-Exempt',
      question: 'A small tax-exempt organization with gross receipts under $50,000 files which form?',
      choices: ['Form 990', 'Form 990-EZ', 'Form 990-N (e-Postcard)', 'Form 1120'],
      answer: 2,
      explanation_en:
        'Form 990-N (e-Postcard) for organizations with gross receipts ≤ $50,000. Form 990-EZ for $50k–$200k gross receipts and assets under $500k. Form 990 for larger orgs. Failure to file for 3 consecutive years = automatic revocation.',
      explanation_es:
        'Form 990-N (e-Postcard) para organizaciones con gross receipts ≤ $50,000. Form 990-EZ para $50k–$200k de gross receipts y assets bajo $500k. Form 990 para orgs más grandes. Fallo en presentar por 3 años consecutivos = revocación automática.',
    },
    {
      id: 'p2-19',
      topic: 'Inventory',
      question: 'Under UNICAP rules (§263A), certain costs must be capitalized into inventory UNLESS gross receipts are below what threshold (2024)?',
      choices: ['$5 million', '$10 million', '$25 million', '$30 million'],
      answer: 3,
      explanation_en:
        '$30 million for 2024 (indexed from $25M base in TCJA). Small business taxpayer exception under §263A(i). Also allows cash method instead of accrual and exempts from percentage-of-completion requirement.',
      explanation_es:
        '$30 millones para 2024 (indexado desde $25M base en el TCJA). Excepción de small business taxpayer bajo §263A(i). También permite cash method en lugar de accrual y exenta del requisito de percentage-of-completion.',
    },
    {
      id: 'p2-20',
      topic: 'Ethics',
      question: 'Under Circular 230, a practitioner must return client records upon request:',
      choices: [
        'Only after payment of outstanding fees',
        'Immediately, regardless of outstanding fees',
        'Within 30 days',
        'Only with IRS approval',
      ],
      answer: 1,
      explanation_en:
        'Circular 230 §10.28 requires returning client records regardless of fee dispute. However, "records" means documents provided BY the client, not the preparer\'s work product (which may be withheld for unpaid fees in some states).',
      explanation_es:
        'Circular 230 §10.28 requiere devolver client records sin importar disputa de honorarios. Sin embargo, "records" significa documentos provistos POR el cliente, no el work product del preparador (que puede retenerse por honorarios impagos en algunos estados).',
    },
    {
      id: 'p2-21',
      topic: 'Business Assets',
      question: 'Bonus depreciation for property placed in service in 2024 is:',
      choices: ['100%', '80%', '60%', '40%'],
      answer: 2,
      explanation_en:
        'Bonus depreciation phase-down: 2023 = 80%, 2024 = 60%, 2025 = 40%, 2026 = 20%, 2027 = 0%. Applies to qualifying property with recovery period of 20 years or less.',
      explanation_es:
        'Phase-down de bonus depreciation: 2023 = 80%, 2024 = 60%, 2025 = 40%, 2026 = 20%, 2027 = 0%. Aplica a qualifying property con recovery period de 20 años o menos.',
    },
    {
      id: 'p2-22',
      topic: 'LLC Foreign Owner',
      question: 'A SMLLC owned 100% by a non-US person with no US trade or business must file:',
      choices: [
        'Only Form 1120',
        'Form 5472 + Form 1120 pro-forma',
        'Form 1065',
        'No return required',
      ],
      answer: 1,
      explanation_en:
        'Form 5472 (Information Return) + Form 1120 as a pro-forma cover page are REQUIRED even with no US business activity. Filed on paper to IRS Ogden. $25,000 penalty for failure to file. Applies to all SMLLCs with 25%+ foreign owner.',
      explanation_es:
        'Form 5472 (Information Return) + Form 1120 como pro-forma cover page son OBLIGATORIOS incluso sin US business activity. Se presentan en papel a IRS Ogden. Penalty de $25,000 por fallo en presentar. Aplica a todos los SMLLCs con 25%+ foreign owner.',
    },
    {
      id: 'p2-23',
      topic: 'Estimated Taxes',
      question: 'C-Corporations must make estimated tax payments if they expect tax to exceed:',
      choices: ['$100', '$500', '$1,000', '$5,000'],
      answer: 1,
      explanation_en:
        'C-Corps: $500 threshold. Quarterly payments due April 15, June 15, Sept 15, Dec 15 (for calendar year corp). Individuals use $1,000 threshold.',
      explanation_es:
        'C-Corps: umbral de $500. Pagos trimestrales vencen 15 abril, 15 junio, 15 septiembre, 15 diciembre (para calendar year corp). Los individuos usan umbral de $1,000.',
    },
    {
      id: 'p2-24',
      topic: 'Accounting Methods',
      question: 'A business with average gross receipts under $30M for the prior 3 years can use:',
      choices: [
        'Only accrual method',
        'Cash method (small taxpayer exception)',
        'Only percentage-of-completion',
        'Hybrid method only',
      ],
      answer: 1,
      explanation_en:
        'Small taxpayer exception (§448): average gross receipts ≤ $30M (2024) allows cash method. Also exempts from §263A UNICAP, §471 inventory, and §460 percentage-of-completion for long-term contracts.',
      explanation_es:
        'Excepción de small taxpayer (§448): average gross receipts ≤ $30M (2024) permite cash method. También exenta de §263A UNICAP, §471 inventory, y §460 percentage-of-completion para long-term contracts.',
    },
    {
      id: 'p2-25',
      topic: 'Trusts',
      question: 'A grantor trust is taxed to:',
      choices: ['The trust itself', 'The beneficiaries', 'The grantor', 'The trustee'],
      answer: 2,
      explanation_en:
        'Grantor trusts: the grantor is taxed on all income because the grantor retains sufficient control. Income reported on grantor\'s 1040. Form 1041 may still be required for informational purposes (grantor trust letter).',
      explanation_es:
        'Grantor trusts: el grantor paga tax sobre todo el income porque retiene control suficiente. El income se reporta en el 1040 del grantor. Form 1041 puede aún requerirse con propósitos informativos (grantor trust letter).',
    },
  ],
}
