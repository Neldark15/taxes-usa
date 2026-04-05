# TAXES USA — Learning Platform

Herramienta bilingüe (es/en) de aprendizaje y operación para preparadores de impuestos de USA atendiendo a la diáspora salvadoreña desde El Salvador.

## Funcionalidades

1. **📚 Aprender** — 11 capítulos MDX bilingües:
   1. Fundamentos del sistema fiscal federal
   2. Virginia Form 760 y reglas estatales
   3. Panorama de otros estados
   4. Formularios clave (W-2, 1099, schedules, W-7)
   5. Casos especiales de la diáspora (ITIN, TPS, FBAR)
   6. Credenciales de preparador desde El Salvador (PTIN, AFSP, EA)
   7. Montar el negocio (LLC Wyoming, EIN, Form 5472)
   8. Software y herramientas profesionales
   9. Workflow del cliente + Pricing guide
   10. Compliance y gestión de riesgos
   11. Calendario fiscal del año

2. **🔄 Proceso del Negocio** — Guía paso a paso interactiva con 10 pasos completos del proceso de operación, desde captación del cliente hasta entrega final. Cada paso incluye:
   - Qué preguntar al cliente (discovery questions)
   - Qué documentos pedir (12 docs detallados con "por qué")
   - Substeps accionables
   - Herramientas recomendadas
   - Advertencias críticas
   - Tiempo estimado

3. **🎴 Flashcards** — 44 tarjetas bilingües con algoritmo SM-2 (SuperMemo 2) de repetición espaciada. Progreso persistente en localStorage.

4. **📝 Examen EA** — Simulacro del Special Enrollment Examination del IRS. Parte 1 (Individuals) con 30 preguntas de muestra. Modos: práctica (feedback inmediato) y simulacro (timer 60min, scaled score 40-130, passing 105).

5. **✅ Checklists** — 7 checklists interactivos con persistencia:
   - Solicitud PTIN (no-residente)
   - Formación LLC Wyoming
   - Onboarding de cliente nuevo
   - Preparación de return individual
   - Due Diligence Form 8867
   - WISP y Data Security
   - Cierre de temporada fiscal

6. **💵 Calculadora de Honorarios** — Cotizador completo con:
   - Presets NATP (promedio USA) y Diáspora (competitivo, 30-50% menos)
   - Selección de return base + schedules + estados múltiples + add-ons
   - Multiplicador de complejidad (1.0x/1.3x/1.6x)
   - Descuentos
   - Total live
   - Copy-to-clipboard con cotización bilingüe
   - Guardar historial de cotizaciones
   - Editor de tarifas personalizado en `/fees/settings`
   - Disclaimer Circular 230 §10.27 visible

## Stack técnico

- **Next.js 16.2.2** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** con glassmorphism
- **MDX** con `@next/mdx` + `remark-gfm`
- **Zustand** + localStorage persist
- **i18n nativo** (dictionaries en `messages/`)

## Estructura

```
E:\Sistema\TAXES USA\
├── app/[lang]/              # App Router con i18n es/en
│   ├── layout.tsx           # Root layout con html/body
│   ├── page.tsx             # Home con feature cards
│   ├── learn/               # 11 capítulos
│   │   └── [chapter]/       # Dynamic MDX loader
│   ├── process/             # 10 pasos del negocio
│   ├── flashcards/          # SRS dashboard + review
│   ├── exam/                # Simulacro EA
│   ├── checklists/          # Lista + detail
│   ├── fees/                # Calculadora
│   │   └── settings/        # Editor de tarifas
│   └── dictionaries.ts      # i18n loader
├── content/{es,en}/         # 11 MDX files por idioma
├── data/                    # Data sources tipadas
│   ├── chapters.ts
│   ├── quizzes/             # 11 quiz banks
│   ├── flashcards/deck.ts
│   ├── exam/part1-individuals.ts
│   ├── checklists/index.ts
│   ├── process/steps.ts
│   └── fees/base-rates.ts
├── components/
│   ├── layout/              # Header, Footer, LocaleSwitch
│   ├── mdx/                 # Callout, FormRef, KeyDate
│   ├── learn/ChapterQuiz.tsx
│   ├── flashcards/FlashcardsApp.tsx
│   ├── exam/ExamApp.tsx
│   ├── process/ProcessApp.tsx
│   ├── checklists/ChecklistView.tsx
│   └── fees/{FeeCalculator,RatesEditor}.tsx
├── stores/                  # Zustand stores con persist
│   ├── useQuizStore.ts
│   ├── useSrsStore.ts
│   ├── useExamStore.ts
│   ├── useChecklistStore.ts
│   └── useFeesStore.ts
├── lib/
│   ├── srs.ts               # Algoritmo SM-2
│   └── storage.ts           # localStorage wrapper versionado
├── messages/{es,en}.json    # i18n UI strings
├── mdx-components.tsx       # Componentes MDX custom
├── proxy.ts                 # i18n middleware (Next.js 16)
├── next.config.mjs          # MDX + remark-gfm (string refs para Turbopack)
└── package.json
```

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3001
```

El proxy redirige `/` → `/es` automáticamente (o `/en` si el Accept-Language del navegador es inglés).

## Notas técnicas importantes

1. **Next.js 16 breaking changes** respecto a versiones anteriores:
   - `params` son async: `const { lang } = await params`
   - Middleware ahora se llama `proxy.ts` (no `middleware.ts`)
   - `app/[lang]/layout.tsx` puede ser el root layout con `<html>`/`<body>`
   - Turbopack es bundler default
   - `next lint` deprecated, usar `eslint` CLI directamente

2. **MDX con Turbopack**: plugins deben especificarse como strings, no como function refs. Ejemplo: `remarkPlugins: ['remark-gfm']`.

3. **MDX parser gotcha**: el carácter `<` seguido de dígito es interpretado como JSX. Evitar expresiones como `<24h`, `<19`, `<11`. Usar "menos de 24h", "under 11" etc.

4. **Hydration mismatch**: componentes que usan `Math.random()` o `Date.now()` deben inicializarse con valores estables y mover la aleatoriedad a `useEffect` para evitar diffs server vs client.

5. **Store persistence**: usar `mounted` flag (`useEffect(() => setMounted(true), [])`) antes de leer valores de Zustand persist en render, para evitar hydration mismatch con localStorage.

## Compliance y disclaimer

⚠️ **Herramienta educativa. NO sustituye asesoría legal ni fiscal.**

- Todos los datos (tasas, umbrales, fees, deadlines) deben validarse anualmente contra las fuentes oficiales:
  - IRS: https://www.irs.gov
  - Virginia Tax: https://www.tax.virginia.gov
  - FinCEN: https://www.fincen.gov
  - NATP Fee Study: https://www.natptax.com

- Las preguntas del simulacro EA son de muestra/estudio. NO son las preguntas oficiales de Prometric/IRS.

- La estructura LLC WY + Form 5472 tiene consecuencias legales importantes. Consultar con CPA o abogado fiscal especializado en no-residentes antes de implementar.

- **Circular 230 §10.27**: prohibido cobrar porcentaje del refund en returns federales originales. Esta herramienta incluye disclaimers visibles en la calculadora de honorarios.

## Licencia

Uso personal del autor. No distribuir sin autorización.
