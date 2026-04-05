export type QuizQuestion = {
  id: string
  question_es: string
  question_en: string
  choices_es: string[]
  choices_en: string[]
  answer: number // index into choices
  explanation_es: string
  explanation_en: string
}

export type QuizBank = QuizQuestion[]
