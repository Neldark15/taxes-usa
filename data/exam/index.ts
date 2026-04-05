import type { ExamBank, ExamPart } from './types'
import { examPart1 } from './part1-individuals'
import { examPart2 } from './part2-businesses'
import { examPart3 } from './part3-representation'

export const examBanks: Record<ExamPart, ExamBank> = {
  1: examPart1,
  2: examPart2,
  3: examPart3,
}

export const getExamBank = (part: ExamPart): ExamBank => examBanks[part]
