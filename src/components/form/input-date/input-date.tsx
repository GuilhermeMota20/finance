import { FormControl, FormHelperText, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FocusEvent, Fragment } from 'react';
import { useController } from 'react-hook-form';
import { Props } from './types';

/**
 * O componente InputDate é uma abstração do DatePicker da biblioteca Material UI,
 * integrado ao React Hook Form para facilitar o controle de datas.
 *
 * Props:
 * - control?: Control<any>;
 * - name: string;
 * - hidden?: boolean;
 * - col?: number;
 *
 * A propriedade `col` encapsula o DatePicker em um Grid responsivo.
 * A propriedade `hidden` oculta o componente.
 */

export const InputDate = (props: Props) => {
  const { control, hidden, col, ...rest } = props;

  if (hidden) return null;

  const Element = col != undefined ? Grid : Fragment;
  const propsElement = col != undefined ? { xs: 12, md: col } : undefined;

  if (!control) {
    return (
      <Element size={propsElement}>
        <FormControl fullWidth size={`${props.size ?? 'small'}`}>
          <DatePicker
            {...rest}
            format="dd/MM/yyyy"
            slotProps={{
              textField: {
                size: 'small',
                fullWidth: true,
              },
            }}
          />
        </FormControl>
      </Element>
    );
  };

  const {
    field,
    formState: { errors },
  } = useController({
    name: props.name,
    control: control,
  });

  const error = !!errors?.[props.name]?.message;

  return (
    <Element size={propsElement}>
      <FormControl fullWidth size={`${props.size ?? 'small'}`}>
        <DatePicker
          {...rest}
          inputRef={field.ref}
          name={field.name}
          value={field.value || null}
          onChange={(event, child) => {
            field.onChange(event, child);
            if (rest.onChange) rest.onChange(event, child);
          }}
          format="dd/MM/yyyy"
          slotProps={{
            textField: {
              size: 'small',
              variant: 'filled',
              color: 'primary',
              fullWidth: true,
              error,
              inputRef: field.ref,
              onBlur: (e: FocusEvent<HTMLInputElement>) => {
                field.onBlur();
                if (rest.onBlur) rest.onBlur(e);
              },
            },
          }}
        />
      </FormControl>

      <FormHelperText error={!!errors?.[`${props?.name}`]?.message}>
        {`${errors?.[`${props?.name}`]?.message ?? ''}`}
      </FormHelperText>
    </Element>
  );
};
