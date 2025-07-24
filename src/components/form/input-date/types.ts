import { DateFieldProps } from '@mui/x-date-pickers';
import type { Control } from 'react-hook-form';

export type Props = {
  control?: Control<any>;
  name: string;
  hidden?: boolean;
  mask?: (value: string | undefined) => string | undefined;
  maskBlur?: (value: string | undefined) => string | undefined;
  col?: number;
} & DateFieldProps;
