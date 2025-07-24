/**
 * Converte uma data (string, Date ou Firestore Timestamp) para objeto Date
 */
export const getDateValue = (value: any): Date | null => {
  if (!value) return null;

  // Caso Firestore Timestamp
  if (value?.seconds) return new Date(value.seconds * 1000);

  // Caso Date
  if (value instanceof Date) return value;

  // Caso string no formato dd/mm/yyyy
  if (typeof value === 'string' && value.includes('/')) {
    const [dia, mes, ano] = value.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
  }

  // Tenta converter qualquer outro formato
  return new Date(value);
};