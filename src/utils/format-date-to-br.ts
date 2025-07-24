import { format } from 'date-fns';

type FirestoreTimestamp = {
  seconds: number;
  nanoseconds: number;
  toDate?: () => Date;
};

export const formatDateBR = (date?: Date | string | number | FirestoreTimestamp): string => {
  if (!date) return '-';

  let parsedDate: Date;

  if (typeof date === 'object' && 'seconds' in date) {
    parsedDate = date.toDate ? date.toDate() : new Date(date.seconds * 1000);
  } else {
    parsedDate = new Date(date);
  }

  return isNaN(parsedDate.getTime()) ? '-' : format(parsedDate, 'dd/MM/yyyy');
};
