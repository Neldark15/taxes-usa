export type ChecklistItem = {
  id: string
  text_es: string
  text_en: string
  note_es?: string
  note_en?: string
}

export type ChecklistGroup = {
  id: string
  title_es: string
  title_en: string
  items: ChecklistItem[]
}

export type Checklist = {
  slug: string
  icon: string
  title_es: string
  title_en: string
  description_es: string
  description_en: string
  groups: ChecklistGroup[]
}

export const checklists: Checklist[] = [
  // ============ 1. PTIN Application ============
  {
    slug: 'ptin-application',
    icon: '📇',
    title_es: 'Solicitud de PTIN (no-residente)',
    title_en: 'PTIN Application (non-resident)',
    description_es: 'Proceso completo para obtener PTIN desde El Salvador sin SSN',
    description_en: 'Complete process to get PTIN from El Salvador without SSN',
    groups: [
      {
        id: 'prep',
        title_es: 'Preparación',
        title_en: 'Preparation',
        items: [
          {
            id: 'ptin-01',
            text_es: 'Revisar IRS Publication 947 y Circular 230 al menos una vez',
            text_en: 'Review IRS Publication 947 and Circular 230 at least once',
          },
          {
            id: 'ptin-02',
            text_es: 'Preparar passport válido salvadoreño (no expirado)',
            text_en: 'Prepare valid (non-expired) Salvadoran passport',
          },
          {
            id: 'ptin-03',
            text_es: 'Tener foto reciente del passport',
            text_en: 'Have recent passport photo',
          },
          {
            id: 'ptin-04',
            text_es: 'Dirección de residencia en El Salvador confirmada',
            text_en: 'Confirmed residence address in El Salvador',
          },
        ],
      },
      {
        id: 'forms',
        title_es: 'Formularios',
        title_en: 'Forms',
        items: [
          {
            id: 'ptin-05',
            text_es: 'Descargar Form W-12 (PTIN Application) de irs.gov',
            text_en: 'Download Form W-12 (PTIN Application) from irs.gov',
          },
          {
            id: 'ptin-06',
            text_es: 'Descargar Form 8946 (PTIN Supplemental for Foreign Persons Without SSN)',
            text_en: 'Download Form 8946 (PTIN Supplemental for Foreign Persons Without SSN)',
          },
          {
            id: 'ptin-07',
            text_es: 'Completar W-12 sin dejar campos vacíos',
            text_en: 'Complete W-12 with no blank fields',
            note_es: 'En "SSN" escribe N/A si no tienes',
            note_en: 'In "SSN" write N/A if you do not have one',
          },
          {
            id: 'ptin-08',
            text_es: 'Completar Form 8946 con documentación de identidad',
            text_en: 'Complete Form 8946 with identity documentation',
          },
          {
            id: 'ptin-09',
            text_es: 'Firmar ambos formularios a mano (no digital)',
            text_en: 'Sign both forms by hand (not digitally)',
          },
        ],
      },
      {
        id: 'submission',
        title_es: 'Envío',
        title_en: 'Submission',
        items: [
          {
            id: 'ptin-10',
            text_es: 'Hacer copias de seguridad de TODOS los documentos',
            text_en: 'Make backup copies of ALL documents',
          },
          {
            id: 'ptin-11',
            text_es: 'Enviar paquete certificado a IRS Tax Professional PTIN Processing Center',
            text_en: 'Send certified package to IRS Tax Professional PTIN Processing Center',
            note_es: 'Dirección exacta en el Form W-12 instructions',
            note_en: 'Exact address in Form W-12 instructions',
          },
          {
            id: 'ptin-12',
            text_es: 'Guardar tracking number del envío internacional',
            text_en: 'Keep international shipping tracking number',
          },
          {
            id: 'ptin-13',
            text_es: 'Pagar fee de PTIN (~$19.75) — instrucciones en W-12',
            text_en: 'Pay PTIN fee (~$19.75) — instructions in W-12',
          },
        ],
      },
      {
        id: 'followup',
        title_es: 'Seguimiento',
        title_en: 'Follow-up',
        items: [
          {
            id: 'ptin-14',
            text_es: 'Esperar 4-6 semanas (puede ser más en peak season)',
            text_en: 'Wait 4-6 weeks (may be longer in peak season)',
          },
          {
            id: 'ptin-15',
            text_es: 'Recibir carta de confirmación del IRS con PTIN',
            text_en: 'Receive IRS confirmation letter with PTIN',
          },
          {
            id: 'ptin-16',
            text_es: 'Crear perfil en IRS Tax Professional account (irs.gov) con el nuevo PTIN',
            text_en: 'Create IRS Tax Professional account (irs.gov) with the new PTIN',
          },
          {
            id: 'ptin-17',
            text_es: 'Anotar fecha de expiración (renovación anual cada Dec 31)',
            text_en: 'Note expiration date (annual renewal each Dec 31)',
          },
        ],
      },
    ],
  },

  // ============ 2. LLC Wyoming Formation ============
  {
    slug: 'llc-wyoming-formation',
    icon: '🏢',
    title_es: 'Formación de LLC Wyoming',
    title_en: 'Wyoming LLC Formation',
    description_es: 'Desde El Salvador sin viajar a USA',
    description_en: 'From El Salvador without traveling to USA',
    groups: [
      {
        id: 'planning',
        title_es: 'Planeación',
        title_en: 'Planning',
        items: [
          {
            id: 'llc-01',
            text_es: 'Decidir nombre de la LLC (verificar disponibilidad en wyoming.gov/sos)',
            text_en: 'Decide LLC name (check availability at wyoming.gov/sos)',
          },
          {
            id: 'llc-02',
            text_es: 'Decidir single-member vs multi-member (single es lo más simple)',
            text_en: 'Decide single-member vs multi-member (single is simplest)',
          },
          {
            id: 'llc-03',
            text_es: 'Consultar con CPA sobre implicaciones fiscales US para no-residentes',
            text_en: 'Consult CPA about US tax implications for non-residents',
          },
        ],
      },
      {
        id: 'registered-agent',
        title_es: 'Registered Agent',
        title_en: 'Registered Agent',
        items: [
          {
            id: 'llc-04',
            text_es: 'Elegir registered agent (Northwest, Harbor Compliance, Incfile)',
            text_en: 'Choose registered agent (Northwest, Harbor Compliance, Incfile)',
          },
          {
            id: 'llc-05',
            text_es: 'Contratar servicio anual (~$60-125/año)',
            text_en: 'Hire annual service (~$60-125/year)',
          },
          {
            id: 'llc-06',
            text_es: 'Guardar dirección del registered agent (va en el Articles of Organization)',
            text_en: 'Save registered agent address (goes in Articles of Organization)',
          },
        ],
      },
      {
        id: 'filing',
        title_es: 'Presentación',
        title_en: 'Filing',
        items: [
          {
            id: 'llc-07',
            text_es: 'Presentar Articles of Organization en wyoming.gov/sos (~$100)',
            text_en: 'File Articles of Organization at wyoming.gov/sos (~$100)',
          },
          {
            id: 'llc-08',
            text_es: 'Esperar 1-2 días para aprobación online',
            text_en: 'Wait 1-2 days for online approval',
          },
          {
            id: 'llc-09',
            text_es: 'Descargar Certificate of Organization',
            text_en: 'Download Certificate of Organization',
          },
          {
            id: 'llc-10',
            text_es: 'Crear Operating Agreement (privado, no se presenta al estado)',
            text_en: 'Create Operating Agreement (private, not filed with state)',
          },
        ],
      },
      {
        id: 'ein',
        title_es: 'EIN (IRS)',
        title_en: 'EIN (IRS)',
        items: [
          {
            id: 'llc-11',
            text_es: 'Descargar Form SS-4 de irs.gov',
            text_en: 'Download Form SS-4 from irs.gov',
          },
          {
            id: 'llc-12',
            text_es: 'Completar SS-4: en línea 7b (Responsible Party SSN) escribir "Foreign"',
            text_en: 'Complete SS-4: in line 7b (Responsible Party SSN) write "Foreign"',
          },
          {
            id: 'llc-13',
            text_es: 'Enviar Form SS-4 por FAX: +1 (855) 215-1627 (international)',
            text_en: 'Send Form SS-4 by FAX: +1 (855) 215-1627 (international)',
            note_es: 'Verificar número actual en irs.gov — puede cambiar',
            note_en: 'Verify current number at irs.gov — may change',
          },
          {
            id: 'llc-14',
            text_es: 'Esperar 4-6 semanas para recibir CP 575 notice con EIN',
            text_en: 'Wait 4-6 weeks for CP 575 notice with EIN',
          },
        ],
      },
      {
        id: 'banking',
        title_es: 'Cuenta bancaria',
        title_en: 'Bank Account',
        items: [
          {
            id: 'llc-15',
            text_es: 'Aplicar en Mercury.com (requiere EIN, Articles, passport)',
            text_en: 'Apply at Mercury.com (requires EIN, Articles, passport)',
          },
          {
            id: 'llc-16',
            text_es: 'Alternativa: Relay (relayfi.com) o Wise Business',
            text_en: 'Alternative: Relay (relayfi.com) or Wise Business',
          },
          {
            id: 'llc-17',
            text_es: 'Esperar aprobación (usualmente 2-5 días en Mercury)',
            text_en: 'Wait for approval (usually 2-5 days at Mercury)',
          },
        ],
      },
      {
        id: 'compliance',
        title_es: 'Compliance anual',
        title_en: 'Annual Compliance',
        items: [
          {
            id: 'llc-18',
            text_es: 'Calendar Annual Report de Wyoming (vence el primer día del mes de formación)',
            text_en: 'Calendar Wyoming Annual Report (due first day of formation month)',
          },
          {
            id: 'llc-19',
            text_es: '⚠️ CRÍTICO: Calendar Form 5472 + 1120 pro-forma (vence April 15, penalty $25k)',
            text_en: '⚠️ CRITICAL: Calendar Form 5472 + 1120 pro-forma (due April 15, $25k penalty)',
          },
          {
            id: 'llc-20',
            text_es: 'Verificar BOI reporting status (FinCEN Beneficial Ownership Information)',
            text_en: 'Verify BOI reporting status (FinCEN Beneficial Ownership Information)',
          },
        ],
      },
    ],
  },

  // ============ 3. Client Onboarding ============
  {
    slug: 'client-onboarding',
    icon: '🤝',
    title_es: 'Onboarding de cliente nuevo',
    title_en: 'New Client Onboarding',
    description_es: 'Proceso estándar para incorporar cada cliente',
    description_en: 'Standard process to onboard each client',
    groups: [
      {
        id: 'initial',
        title_es: 'Contacto inicial',
        title_en: 'Initial contact',
        items: [
          {
            id: 'onb-01',
            text_es: 'Responder al primer mensaje del cliente en menos de 2 horas',
            text_en: 'Respond to first client message within 2 hours',
          },
          {
            id: 'onb-02',
            text_es: 'Recopilar nombre, teléfono, cómo te encontró',
            text_en: 'Collect name, phone, how they found you',
          },
          {
            id: 'onb-03',
            text_es: 'Agendar consulta inicial gratuita de 15 min',
            text_en: 'Schedule free 15-min initial consultation',
          },
        ],
      },
      {
        id: 'discovery',
        title_es: 'Discovery Call',
        title_en: 'Discovery Call',
        items: [
          {
            id: 'onb-04',
            text_es: 'Preguntar: status migratorio / tipo de documento (SSN/ITIN/ninguno)',
            text_en: 'Ask: immigration status / document type (SSN/ITIN/none)',
          },
          {
            id: 'onb-05',
            text_es: 'Preguntar: W-2, 1099, o ambos',
            text_en: 'Ask: W-2, 1099, or both',
          },
          {
            id: 'onb-06',
            text_es: 'Preguntar: estados de trabajo y residencia',
            text_en: 'Ask: work and residence states',
          },
          {
            id: 'onb-07',
            text_es: 'Preguntar: dependientes y dónde viven',
            text_en: 'Ask: dependents and where they live',
          },
          {
            id: 'onb-08',
            text_es: 'Preguntar: cuentas bancarias en El Salvador (FBAR alert)',
            text_en: 'Ask: bank accounts in El Salvador (FBAR alert)',
          },
          {
            id: 'onb-09',
            text_es: 'Preguntar: prior year return (tiene copia?)',
            text_en: 'Ask: prior year return (do they have copy?)',
          },
          {
            id: 'onb-10',
            text_es: 'Identificar red flags (pedir inflar gastos, dependientes sospechosos)',
            text_en: 'Identify red flags (asking to inflate expenses, suspicious dependents)',
          },
        ],
      },
      {
        id: 'quote',
        title_es: 'Cotización y contrato',
        title_en: 'Quote and contract',
        items: [
          {
            id: 'onb-11',
            text_es: 'Usar Fee Calculator para estimar honorarios',
            text_en: 'Use Fee Calculator to estimate fees',
          },
          {
            id: 'onb-12',
            text_es: 'Presentar cotización al cliente (total, no desglose salvo que pida)',
            text_en: 'Present quote to client (total, not breakdown unless asked)',
          },
          {
            id: 'onb-13',
            text_es: 'Si cliente acepta: enviar engagement letter personalizado',
            text_en: 'If client accepts: send personalized engagement letter',
          },
          {
            id: 'onb-14',
            text_es: 'Obtener firma del engagement letter vía DocuSign o TaxDome',
            text_en: 'Get engagement letter signature via DocuSign or TaxDome',
          },
          {
            id: 'onb-15',
            text_es: 'Cobrar depósito inicial (50%) o total según política',
            text_en: 'Collect initial deposit (50%) or total per policy',
          },
        ],
      },
      {
        id: 'setup',
        title_es: 'Setup en sistemas',
        title_en: 'Systems setup',
        items: [
          {
            id: 'onb-16',
            text_es: 'Crear perfil en TaxDome/CRM con datos básicos',
            text_en: 'Create profile in TaxDome/CRM with basic data',
          },
          {
            id: 'onb-17',
            text_es: 'Crear client folder en cloud storage encriptado',
            text_en: 'Create client folder in encrypted cloud storage',
          },
          {
            id: 'onb-18',
            text_es: 'Dar acceso al portal seguro al cliente',
            text_en: 'Give client access to secure portal',
          },
          {
            id: 'onb-19',
            text_es: 'Enviar checklist de documentos requeridos (ver Preparación de Return)',
            text_en: 'Send required documents checklist (see Return Preparation)',
          },
        ],
      },
    ],
  },

  // ============ 4. Return Preparation ============
  {
    slug: 'return-preparation',
    icon: '📋',
    title_es: 'Preparación de Return Individual',
    title_en: 'Individual Return Preparation',
    description_es: 'Checklist técnico para cada return',
    description_en: 'Technical checklist for each return',
    groups: [
      {
        id: 'pre-input',
        title_es: 'Pre-ingreso',
        title_en: 'Pre-input',
        items: [
          {
            id: 'prep-01',
            text_es: 'Verificar que todos los documentos están recibidos y legibles',
            text_en: 'Verify all documents are received and legible',
          },
          {
            id: 'prep-02',
            text_es: 'Revisar prior year return para carry-overs y consistency',
            text_en: 'Review prior year return for carry-overs and consistency',
          },
          {
            id: 'prep-03',
            text_es: 'Verificar SSN/ITIN spelling exacto vs IRS letter o SSN card',
            text_en: 'Verify exact SSN/ITIN spelling vs IRS letter or SSN card',
          },
          {
            id: 'prep-04',
            text_es: 'Abrir software profesional y crear return del año correcto',
            text_en: 'Open professional software and create return for correct year',
          },
        ],
      },
      {
        id: 'personal-info',
        title_es: 'Datos personales',
        title_en: 'Personal data',
        items: [
          {
            id: 'prep-05',
            text_es: 'Nombre legal completo (según ID)',
            text_en: 'Full legal name (per ID)',
          },
          {
            id: 'prep-06',
            text_es: 'SSN o ITIN exacto',
            text_en: 'Exact SSN or ITIN',
          },
          {
            id: 'prep-07',
            text_es: 'Address actual (donde el IRS enviará correspondencia)',
            text_en: 'Current address (where IRS will send correspondence)',
          },
          {
            id: 'prep-08',
            text_es: 'Filing status correcto (verificar con reglas de HOH si aplica)',
            text_en: 'Correct filing status (verify HOH rules if applicable)',
          },
          {
            id: 'prep-09',
            text_es: 'Dependientes: nombre, SSN/ITIN, relationship, residency',
            text_en: 'Dependents: name, SSN/ITIN, relationship, residency',
          },
        ],
      },
      {
        id: 'income',
        title_es: 'Ingresos',
        title_en: 'Income',
        items: [
          {
            id: 'prep-10',
            text_es: 'Ingresar cada W-2 con cajas exactas',
            text_en: 'Enter each W-2 with exact box amounts',
          },
          {
            id: 'prep-11',
            text_es: 'Ingresar todos los 1099s (NEC, MISC, K, INT, DIV, R, SSA, G)',
            text_en: 'Enter all 1099s (NEC, MISC, K, INT, DIV, R, SSA, G)',
          },
          {
            id: 'prep-12',
            text_es: 'Self-employed: Schedule C con todas las categorías de gastos',
            text_en: 'Self-employed: Schedule C with all expense categories',
          },
          {
            id: 'prep-13',
            text_es: 'Rentals: Schedule E con income, expenses, depreciation',
            text_en: 'Rentals: Schedule E with income, expenses, depreciation',
          },
          {
            id: 'prep-14',
            text_es: 'Capital gains: Schedule D + Form 8949 con basis correcta',
            text_en: 'Capital gains: Schedule D + Form 8949 with correct basis',
          },
        ],
      },
      {
        id: 'deductions-credits',
        title_es: 'Deducciones y créditos',
        title_en: 'Deductions and credits',
        items: [
          {
            id: 'prep-15',
            text_es: 'Determinar standard vs itemized (el software sugiere, verificar)',
            text_en: 'Determine standard vs itemized (software suggests, verify)',
          },
          {
            id: 'prep-16',
            text_es: 'Si itemized: Schedule A con medical, SALT capped $10k, mortgage, charity',
            text_en: 'If itemized: Schedule A with medical, SALT capped $10k, mortgage, charity',
          },
          {
            id: 'prep-17',
            text_es: 'Adjustments Schedule 1: HSA, IRA, student loan interest, SE tax deduction',
            text_en: 'Adjustments Schedule 1: HSA, IRA, student loan interest, SE tax deduction',
          },
          {
            id: 'prep-18',
            text_es: 'EITC: solo si SSN válido para trabajo (no ITIN)',
            text_en: 'EITC: only if work-valid SSN (not ITIN)',
          },
          {
            id: 'prep-19',
            text_es: 'CTC/ACTC: hijo debe tener SSN válido',
            text_en: 'CTC/ACTC: child must have valid SSN',
          },
          {
            id: 'prep-20',
            text_es: 'Credit for Other Dependents: ITIN holders califican',
            text_en: 'Credit for Other Dependents: ITIN holders qualify',
          },
          {
            id: 'prep-21',
            text_es: 'AOTC/LLC: si hay 1098-T',
            text_en: 'AOTC/LLC: if 1098-T present',
          },
        ],
      },
      {
        id: 'due-diligence',
        title_es: 'Due diligence (8867)',
        title_en: 'Due diligence (8867)',
        items: [
          {
            id: 'prep-22',
            text_es: '⚠️ OBLIGATORIO: Form 8867 completo si se reclama EITC/CTC/ACTC/AOTC/HOH',
            text_en: '⚠️ MANDATORY: Complete Form 8867 if claiming EITC/CTC/ACTC/AOTC/HOH',
          },
          {
            id: 'prep-23',
            text_es: 'Documentar evidencia de residencia del qualifying child',
            text_en: 'Document qualifying child residency evidence',
          },
          {
            id: 'prep-24',
            text_es: 'Documentar relationship con dependientes',
            text_en: 'Document relationship with dependents',
          },
          {
            id: 'prep-25',
            text_es: 'Completar las preguntas de knowledge requirement',
            text_en: 'Complete knowledge requirement questions',
          },
        ],
      },
      {
        id: 'state',
        title_es: 'State return',
        title_en: 'State return',
        items: [
          {
            id: 'prep-26',
            text_es: 'El software deriva del federal — verificar adjustments estatales',
            text_en: 'Software derives from federal — verify state adjustments',
          },
          {
            id: 'prep-27',
            text_es: 'Virginia: verificar SS subtraction, age deduction, state credits',
            text_en: 'Virginia: verify SS subtraction, age deduction, state credits',
          },
          {
            id: 'prep-28',
            text_es: 'Multi-state: credit for taxes paid to other state',
            text_en: 'Multi-state: credit for taxes paid to other state',
          },
          {
            id: 'prep-29',
            text_es: 'Verificar driver license info si el estado lo requiere',
            text_en: 'Verify driver license info if state requires it',
          },
        ],
      },
      {
        id: 'foreign',
        title_es: 'Reportes extranjeros (diáspora)',
        title_en: 'Foreign reports (diaspora)',
        items: [
          {
            id: 'prep-30',
            text_es: 'Si cuentas ES > $10k agregado: preparar FBAR en fincen.gov',
            text_en: 'If ES accounts > $10k aggregate: prepare FBAR at fincen.gov',
          },
          {
            id: 'prep-31',
            text_es: 'Si FATCA threshold: adjuntar Form 8938 al 1040',
            text_en: 'If FATCA threshold: attach Form 8938 to 1040',
          },
          {
            id: 'prep-32',
            text_es: 'Si hay foreign tax paid: evaluar Form 1116 (Foreign Tax Credit)',
            text_en: 'If foreign tax paid: evaluate Form 1116 (Foreign Tax Credit)',
          },
        ],
      },
      {
        id: 'review',
        title_es: 'Revisión final',
        title_en: 'Final review',
        items: [
          {
            id: 'prep-33',
            text_es: 'Ejecutar verificación de errores del software',
            text_en: 'Run software error verification',
          },
          {
            id: 'prep-34',
            text_es: 'Comparar con prior year (consistency check)',
            text_en: 'Compare with prior year (consistency check)',
          },
          {
            id: 'prep-35',
            text_es: 'Verificar firma de preparador con PTIN visible',
            text_en: 'Verify preparer signature with visible PTIN',
          },
          {
            id: 'prep-36',
            text_es: 'Generar PDF del return completo para review con cliente',
            text_en: 'Generate complete return PDF for client review',
          },
        ],
      },
    ],
  },

  // ============ 5. Due Diligence 8867 ============
  {
    slug: 'due-diligence-8867',
    icon: '🛡️',
    title_es: 'Due Diligence Form 8867',
    title_en: '8867 Due Diligence',
    description_es: 'Obligatorio para EITC, CTC, ACTC, AOTC, HOH',
    description_en: 'Mandatory for EITC, CTC, ACTC, AOTC, HOH',
    groups: [
      {
        id: 'eitc',
        title_es: 'EITC (si aplica)',
        title_en: 'EITC (if applicable)',
        items: [
          {
            id: 'dd-01',
            text_es: 'Verificar taxpayer y cónyuge tienen SSN válido para trabajo',
            text_en: 'Verify taxpayer and spouse have work-valid SSN',
          },
          {
            id: 'dd-02',
            text_es: 'Verificar qualifying child tiene SSN válido',
            text_en: 'Verify qualifying child has valid SSN',
          },
          {
            id: 'dd-03',
            text_es: 'Verificar income dentro de límites EITC del año',
            text_en: 'Verify income within year EITC limits',
          },
          {
            id: 'dd-04',
            text_es: 'Verificar qualifying child residió con taxpayer más de la mitad del año',
            text_en: 'Verify qualifying child lived with taxpayer more than half the year',
          },
          {
            id: 'dd-05',
            text_es: 'Obtener evidencia de residencia (school records, lease, medical)',
            text_en: 'Obtain residence evidence (school records, lease, medical)',
          },
          {
            id: 'dd-06',
            text_es: 'Verificar no hay otra persona reclamando al mismo niño',
            text_en: 'Verify no other person is claiming the same child',
          },
        ],
      },
      {
        id: 'ctc',
        title_es: 'CTC/ACTC (si aplica)',
        title_en: 'CTC/ACTC (if applicable)',
        items: [
          {
            id: 'dd-07',
            text_es: 'Verificar hijo es under 17 al final del año',
            text_en: 'Verify child is under 17 at end of year',
          },
          {
            id: 'dd-08',
            text_es: 'Verificar hijo es US citizen, national, o resident alien',
            text_en: 'Verify child is US citizen, national, or resident alien',
          },
          {
            id: 'dd-09',
            text_es: 'Verificar hijo tiene SSN válido (no ITIN)',
            text_en: 'Verify child has valid SSN (not ITIN)',
          },
          {
            id: 'dd-10',
            text_es: 'Verificar relationship (biológico, adoptivo, stepchild, foster)',
            text_en: 'Verify relationship (biological, adopted, stepchild, foster)',
          },
        ],
      },
      {
        id: 'aotc',
        title_es: 'AOTC (si aplica)',
        title_en: 'AOTC (if applicable)',
        items: [
          {
            id: 'dd-11',
            text_es: 'Verificar 1098-T recibido del institution',
            text_en: 'Verify 1098-T received from institution',
          },
          {
            id: 'dd-12',
            text_es: 'Verificar student en primeros 4 años de post-secondary',
            text_en: 'Verify student in first 4 years of post-secondary',
          },
          {
            id: 'dd-13',
            text_es: 'Verificar student enrolled al menos half-time',
            text_en: 'Verify student enrolled at least half-time',
          },
          {
            id: 'dd-14',
            text_es: 'Verificar no reclamó AOTC por más de 4 años prior',
            text_en: 'Verify has not claimed AOTC more than 4 prior years',
          },
        ],
      },
      {
        id: 'hoh',
        title_es: 'Head of Household (si aplica)',
        title_en: 'Head of Household (if applicable)',
        items: [
          {
            id: 'dd-15',
            text_es: 'Verificar unmarried o considered unmarried al final del año',
            text_en: 'Verify unmarried or considered unmarried at end of year',
          },
          {
            id: 'dd-16',
            text_es: 'Verificar pagó más del 50% del mantenimiento del hogar',
            text_en: 'Verify paid more than 50% of household upkeep',
          },
          {
            id: 'dd-17',
            text_es: 'Verificar qualifying person vivió con taxpayer (excepto padre)',
            text_en: 'Verify qualifying person lived with taxpayer (except parent)',
          },
        ],
      },
      {
        id: 'documentation',
        title_es: 'Documentación',
        title_en: 'Documentation',
        items: [
          {
            id: 'dd-18',
            text_es: 'Completar Form 8867 en el software',
            text_en: 'Complete Form 8867 in software',
          },
          {
            id: 'dd-19',
            text_es: 'Guardar copia de todos los documentos de soporte 3 años',
            text_en: 'Keep copy of all supporting documents for 3 years',
          },
          {
            id: 'dd-20',
            text_es: 'Documentar interview notes si cliente no pudo probar algo',
            text_en: 'Document interview notes if client could not prove something',
          },
        ],
      },
    ],
  },

  // ============ 6. WISP and Data Security ============
  {
    slug: 'wisp-data-security',
    icon: '🔐',
    title_es: 'WISP y Data Security',
    title_en: 'WISP and Data Security',
    description_es: 'Obligatorio bajo FTC Safeguards Rule e IRS Pub 4557',
    description_en: 'Mandatory under FTC Safeguards Rule and IRS Pub 4557',
    groups: [
      {
        id: 'wisp-doc',
        title_es: 'Documento WISP',
        title_en: 'WISP Document',
        items: [
          {
            id: 'sec-01',
            text_es: 'Descargar template de IRS Publication 5708',
            text_en: 'Download template from IRS Publication 5708',
          },
          {
            id: 'sec-02',
            text_es: 'Personalizar con datos de tu negocio (nombre, dirección, contacto)',
            text_en: 'Customize with your business data (name, address, contact)',
          },
          {
            id: 'sec-03',
            text_es: 'Designar "qualified individual" responsable (tú mismo si solo)',
            text_en: 'Designate responsible "qualified individual" (yourself if solo)',
          },
          {
            id: 'sec-04',
            text_es: 'Incluir risk assessment anual',
            text_en: 'Include annual risk assessment',
          },
          {
            id: 'sec-05',
            text_es: 'Incluir incident response plan',
            text_en: 'Include incident response plan',
          },
          {
            id: 'sec-06',
            text_es: 'Firmar y fechar el documento',
            text_en: 'Sign and date the document',
          },
          {
            id: 'sec-07',
            text_es: 'Revisar y actualizar anualmente',
            text_en: 'Review and update annually',
          },
        ],
      },
      {
        id: 'tech-safeguards',
        title_es: 'Safeguards técnicos',
        title_en: 'Technical safeguards',
        items: [
          {
            id: 'sec-08',
            text_es: 'Password manager configurado (Bitwarden, 1Password)',
            text_en: 'Password manager configured (Bitwarden, 1Password)',
          },
          {
            id: 'sec-09',
            text_es: '2FA activado en todas las cuentas con datos de clientes',
            text_en: '2FA enabled on all accounts with client data',
          },
          {
            id: 'sec-10',
            text_es: 'Disk encryption activado (BitLocker Windows / FileVault Mac)',
            text_en: 'Disk encryption enabled (BitLocker Windows / FileVault Mac)',
          },
          {
            id: 'sec-11',
            text_es: 'Antivirus profesional instalado y actualizado',
            text_en: 'Professional antivirus installed and updated',
          },
          {
            id: 'sec-12',
            text_es: 'VPN configurado para WiFi público',
            text_en: 'VPN configured for public WiFi',
          },
          {
            id: 'sec-13',
            text_es: 'Firewall activado',
            text_en: 'Firewall enabled',
          },
          {
            id: 'sec-14',
            text_es: 'Auto-lock después de 15 min inactividad',
            text_en: 'Auto-lock after 15 min inactivity',
          },
          {
            id: 'sec-15',
            text_es: 'Backup encriptado offsite (Backblaze, Carbonite)',
            text_en: 'Encrypted offsite backup (Backblaze, Carbonite)',
          },
          {
            id: 'sec-16',
            text_es: 'Auto-updates del OS activados',
            text_en: 'Automatic OS updates enabled',
          },
        ],
      },
      {
        id: 'client-data',
        title_es: 'Manejo de datos del cliente',
        title_en: 'Client data handling',
        items: [
          {
            id: 'sec-17',
            text_es: 'Portal seguro para recibir documentos (TaxDome/SmartVault)',
            text_en: 'Secure portal to receive documents (TaxDome/SmartVault)',
          },
          {
            id: 'sec-18',
            text_es: 'NUNCA email sin encriptar para datos sensibles',
            text_en: 'NEVER unencrypted email for sensitive data',
          },
          {
            id: 'sec-19',
            text_es: 'Privacy notice dado a cada cliente nuevo (GLBA)',
            text_en: 'Privacy notice given to each new client (GLBA)',
          },
          {
            id: 'sec-20',
            text_es: 'Secure deletion de archivos obsoletos',
            text_en: 'Secure deletion of obsolete files',
          },
        ],
      },
      {
        id: 'response',
        title_es: 'Incident response',
        title_en: 'Incident response',
        items: [
          {
            id: 'sec-21',
            text_es: 'Lista de contactos de emergencia (E&O insurance, lawyer, IRS liaison)',
            text_en: 'Emergency contact list (E&O insurance, lawyer, IRS liaison)',
          },
          {
            id: 'sec-22',
            text_es: 'Protocolo documentado: contener → notificar → notificar clientes → lawyer',
            text_en: 'Documented protocol: contain → notify → notify clients → lawyer',
          },
          {
            id: 'sec-23',
            text_es: 'Saber reportar data breach a IRS Stakeholder Liaison',
            text_en: 'Know how to report data breach to IRS Stakeholder Liaison',
          },
        ],
      },
    ],
  },

  // ============ 7. Season Closure ============
  {
    slug: 'season-closure',
    icon: '🏁',
    title_es: 'Cierre de temporada fiscal',
    title_en: 'Tax Season Closure',
    description_es: 'Lo que debes hacer después del 15 de abril',
    description_en: 'What to do after April 15',
    groups: [
      {
        id: 'post-deadline',
        title_es: 'Post-deadline (finales de abril)',
        title_en: 'Post-deadline (late April)',
        items: [
          {
            id: 'cl-01',
            text_es: 'Verificar que TODOS los returns fueron aceptados por el IRS',
            text_en: 'Verify ALL returns were accepted by IRS',
          },
          {
            id: 'cl-02',
            text_es: 'Enviar acknowledgements finales a clientes',
            text_en: 'Send final acknowledgements to clients',
          },
          {
            id: 'cl-03',
            text_es: 'Lista de returns con extension (4868) para seguimiento',
            text_en: 'List of returns with extension (4868) for follow-up',
          },
          {
            id: 'cl-04',
            text_es: 'Presentar Virginia 760 antes del May 1',
            text_en: 'File Virginia 760 before May 1',
          },
        ],
      },
      {
        id: 'may',
        title_es: 'Mayo',
        title_en: 'May',
        items: [
          {
            id: 'cl-05',
            text_es: 'Enviar FBAR para clientes con cuentas extranjeras > $10k',
            text_en: 'File FBAR for clients with foreign accounts > $10k',
          },
          {
            id: 'cl-06',
            text_es: 'Verificar recibo de payment de balance due de cada cliente',
            text_en: 'Verify receipt of balance due payment from each client',
          },
          {
            id: 'cl-07',
            text_es: 'Reconciliar fees cobrados vs returns preparados',
            text_en: 'Reconcile fees collected vs returns prepared',
          },
        ],
      },
      {
        id: 'admin',
        title_es: 'Administración',
        title_en: 'Administration',
        items: [
          {
            id: 'cl-08',
            text_es: 'Actualizar client database con info del año',
            text_en: 'Update client database with year info',
          },
          {
            id: 'cl-09',
            text_es: 'Calcular métricas: # clientes, revenue total, promedio por cliente',
            text_en: 'Calculate metrics: # clients, total revenue, average per client',
          },
          {
            id: 'cl-10',
            text_es: 'Backup completo de todos los returns del año',
            text_en: 'Complete backup of all returns for the year',
          },
          {
            id: 'cl-11',
            text_es: 'Archivar documentos 3 años (obligatorio) en storage encriptado',
            text_en: 'Archive documents for 3 years (mandatory) in encrypted storage',
          },
        ],
      },
      {
        id: 'improvement',
        title_es: 'Mejoras para el próximo año',
        title_en: 'Improvements for next year',
        items: [
          {
            id: 'cl-12',
            text_es: 'Analizar qué tomó más tiempo y por qué',
            text_en: 'Analyze what took longer and why',
          },
          {
            id: 'cl-13',
            text_es: 'Lista de plantillas/procesos a mejorar',
            text_en: 'List of templates/processes to improve',
          },
          {
            id: 'cl-14',
            text_es: 'Revisar pricing: ¿cobraste suficiente?',
            text_en: 'Review pricing: did you charge enough?',
          },
          {
            id: 'cl-15',
            text_es: 'Feedback de clientes (surveys, reseñas)',
            text_en: 'Client feedback (surveys, reviews)',
          },
        ],
      },
      {
        id: 'continuing-ed',
        title_es: 'Continuing Education',
        title_en: 'Continuing Education',
        items: [
          {
            id: 'cl-16',
            text_es: 'Inscribirse en CE de verano (si AFSP/EA)',
            text_en: 'Enroll in summer CE (if AFSP/EA)',
          },
          {
            id: 'cl-17',
            text_es: 'Completar horas requeridas antes del deadline',
            text_en: 'Complete required hours before deadline',
          },
          {
            id: 'cl-18',
            text_es: 'Si estudias EA: preparar próxima parte del SEE',
            text_en: 'If studying EA: prepare next SEE part',
          },
        ],
      },
      {
        id: 'renewal',
        title_es: 'Renovaciones',
        title_en: 'Renewals',
        items: [
          {
            id: 'cl-19',
            text_es: 'PTIN renewal (Oct 1 - Dec 31 para el siguiente año)',
            text_en: 'PTIN renewal (Oct 1 - Dec 31 for next year)',
          },
          {
            id: 'cl-20',
            text_es: 'E&O insurance renewal',
            text_en: 'E&O insurance renewal',
          },
          {
            id: 'cl-21',
            text_es: 'Cyber liability insurance renewal',
            text_en: 'Cyber liability insurance renewal',
          },
          {
            id: 'cl-22',
            text_es: 'LLC annual report (si aplica)',
            text_en: 'LLC annual report (if applicable)',
          },
          {
            id: 'cl-23',
            text_es: 'Software profesional renewal con discount de early bird',
            text_en: 'Professional software renewal with early bird discount',
          },
          {
            id: 'cl-24',
            text_es: '⚠️ Form 5472 + 1120 pro-forma si tienes LLC con foreign owner',
            text_en: '⚠️ Form 5472 + 1120 pro-forma if you have LLC with foreign owner',
          },
        ],
      },
    ],
  },
]

export const getChecklist = (slug: string) => checklists.find((c) => c.slug === slug)
