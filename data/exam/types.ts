export type ExamQuestion = {
  id: string
  topic: string // e.g., "Filing Status", "Income", "Deductions"
  question: string // English — SEE is officially in English
  choices: string[]
  answer: number
  explanation_en: string
  explanation_es: string
}

export type ExamPart = 1 | 2 | 3

export type ExamBank = {
  part: ExamPart
  name: string
  questions: ExamQuestion[]
}
