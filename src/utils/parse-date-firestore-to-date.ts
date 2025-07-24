export const parseDateFirestoreToDate = (date?: any): Date | null => {
  if (!date) return null;
  if (date?.toDate) return date.toDate();
  if (date?.seconds) return new Date(date.seconds * 1000);
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? null : parsed;
};