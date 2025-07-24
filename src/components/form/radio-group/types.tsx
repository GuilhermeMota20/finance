import type { RadioGroupProps, RadioProps } from '@mui/material';
import type { JSX } from 'react';
import type { Control } from 'react-hook-form';

export type Props = {
  control?: Control<any>;
  name: string;
  label?: string;
  hidden?: boolean;
  value?: boolean;
  children: JSX.Element | JSX.Element[];
  col?: number;
} & RadioProps & RadioGroupProps;
