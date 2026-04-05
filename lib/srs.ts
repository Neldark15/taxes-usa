/**
 * Spaced Repetition System — algoritmo SM-2 (SuperMemo 2)
 *
 * Referencia: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method
 *
 * Cada card guarda: intervalo actual (días), ease factor (dificultad), repeticiones
 * consecutivas correctas, y fecha de próxima revisión.
 *
 * Rating del usuario (0-5):
 *   0-2 = fallo → reiniciar repeticiones, intervalo=1
 *   3   = pasado con dificultad → mantener
 *   4   = bien
 *   5   = fácil → incrementar más
 *
 * En la UI mapeamos 4 botones a ratings:
 *   Again=0, Hard=3, Good=4, Easy=5
 */

export type CardState = {
  interval: number // días hasta próxima revisión
  efactor: number // ease factor, mínimo 1.3
  reps: number // repeticiones consecutivas correctas
  dueDate: number // epoch ms
  lastReview: number // epoch ms
}

export const NEW_CARD_STATE: CardState = {
  interval: 0,
  efactor: 2.5,
  reps: 0,
  dueDate: 0,
  lastReview: 0,
}

export const MIN_EFACTOR = 1.3

const MS_PER_DAY = 24 * 60 * 60 * 1000

/**
 * Aplica SM-2 a un card dada una calificación.
 * Devuelve el nuevo estado del card.
 *
 * @param card estado actual
 * @param rating 0-5 (0=olvidó, 5=muy fácil)
 * @param now timestamp actual (para testing)
 */
export function reviewCard(card: CardState, rating: number, now: number = Date.now()): CardState {
  const r = Math.max(0, Math.min(5, Math.round(rating)))

  // Fallo: rating < 3
  if (r < 3) {
    return {
      ...card,
      reps: 0,
      interval: 1,
      efactor: card.efactor, // SM-2 clásico NO reduce efactor en fallos (algunos derivados sí)
      dueDate: now + 1 * MS_PER_DAY,
      lastReview: now,
    }
  }

  // Éxito: calcular nuevo intervalo
  const reps = card.reps + 1
  let interval: number
  if (reps === 1) {
    interval = 1
  } else if (reps === 2) {
    interval = 6
  } else {
    interval = Math.round(card.interval * card.efactor)
  }

  // Ajustar efactor
  // Fórmula SM-2: EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  const delta = 0.1 - (5 - r) * (0.08 + (5 - r) * 0.02)
  const efactor = Math.max(MIN_EFACTOR, card.efactor + delta)

  return {
    interval,
    efactor,
    reps,
    dueDate: now + interval * MS_PER_DAY,
    lastReview: now,
  }
}

/**
 * Determina la "categoría" de un card para stats/UI
 */
export type CardCategory = 'new' | 'learning' | 'mature'

export function categorize(card: CardState): CardCategory {
  if (card.reps === 0) return 'new'
  if (card.interval < 21) return 'learning'
  return 'mature'
}

/**
 * ¿Este card está pendiente (due) ahora?
 */
export function isDue(card: CardState, now: number = Date.now()): boolean {
  if (card.reps === 0) return true // cards nuevas siempre disponibles
  return card.dueDate <= now
}

/**
 * Cuenta cards due en una lista
 */
export function countDue(cards: Record<string, CardState>, now: number = Date.now()): number {
  return Object.values(cards).filter((c) => isDue(c, now)).length
}
