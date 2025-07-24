import { isValid, parse, parseISO, format } from 'date-fns';

/**
 * Formata qualquer valor de data para string ISO no formato "yyyy-MM-dd" (sem hora).
 * Aceita Date, string ou undefined/null. Retorna null se inválido.
 */
export function formatDateToISO(value: string | Date | null | undefined): string | null {
  if (!value) return null;

  let date: Date;

  if (typeof value === 'string') {
    // Tenta parsear string ISO ou string brasileiro
    try {
      date = parseISO(value);
      if (!isValid(date)) {
        date = parse(value, 'dd/MM/yyyy', new Date());
      }
    } catch {
      return null;
    }
  } else {
    date = value;
  }

  return isValid(date) ? format(date, 'yyyy-MM-dd') : null;
}
