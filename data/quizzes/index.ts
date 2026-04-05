import type { QuizBank } from './types'
import { quiz01 } from './01-fundamentos-federal'
import { quiz02 } from './02-virginia-estatal'
import { quiz03 } from './03-otros-estados'
import { quiz04 } from './04-formularios'
import { quiz05 } from './05-diaspora'
import { quiz06 } from './06-credenciales'
import { quiz07 } from './07-negocio'
import { quiz08 } from './08-software'
import { quiz09 } from './09-workflow'
import { quiz10 } from './10-compliance'
import { quiz11 } from './11-calendario'

export const quizzes: Record<string, QuizBank> = {
  'fundamentos-federal': quiz01,
  'virginia-estatal': quiz02,
  'otros-estados': quiz03,
  formularios: quiz04,
  diaspora: quiz05,
  credenciales: quiz06,
  negocio: quiz07,
  software: quiz08,
  workflow: quiz09,
  compliance: quiz10,
  calendario: quiz11,
}

export const getQuiz = (slug: string): QuizBank | null => quizzes[slug] ?? null
