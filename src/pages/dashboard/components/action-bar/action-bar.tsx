import { AnimationIn } from "@components/animation-in";
import { useModalGlobals } from "@hooks/useGlobalModals";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { colors } from "@theme/colors";
import { FinanceMonthOption } from "../../types";

type Props = {
  monthOptions: FinanceMonthOption[];
  selectedMonth: string;
  onMonthChange: (value: string) => void;
};

export const ActionBar: React.FC<Props> = ({ monthOptions, onMonthChange, selectedMonth }) => {
  const { onOpenNewFinance } = useModalGlobals();

  return (
    <AnimationIn>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gap="1rem"
      >
        <Button
          variant="contained"
          startIcon={<AccountBalanceWalletOutlinedIcon />}
          onClick={onOpenNewFinance}
        >
          Adicionar registro financeiro
        </Button>

        <FormControl
          size="small"
          sx={{
            minWidth: { xs: '100%', sm: 260 },
            flex: { xs: '1 1 100%', sm: '0 0 auto' },
          }}
        >
          <Select
            displayEmpty
            value={selectedMonth}
            onChange={(event) => onMonthChange(String(event.target.value))}
            IconComponent={KeyboardArrowDownRoundedIcon}
            renderValue={(value) => {
              const selectedValue = String(value ?? '');
              const label = !selectedValue
                ? 'Todos os meses'
                : monthOptions.find((option) => option.value === selectedValue)?.label ?? selectedValue;

              return (
                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarMonthOutlinedIcon fontSize="small" />
                  <span>{label}</span>
                </Box>
              );
            }}
            sx={(theme) => ({
              minHeight: 36,
              borderRadius: 1,
              bgcolor: colors.primary.main,
              color: colors.primary.contrastText,
              boxShadow: theme.shadows[2],
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.75,
              letterSpacing: '0.02857em',
              textTransform: 'uppercase',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                alignItems: 'center',
                display: 'flex',
                minHeight: 'auto !important',
                py: '6px',
                pl: 1.75,
                pr: 4.5,
              },
              '& .MuiSelect-icon': {
                color: colors.primary.contrastText,
                right: 10,
              },
            })}
            MenuProps={{
              PaperProps: {
                sx: {
                  mt: 1,
                  borderRadius: 2,
                },
              },
            }}
          >
            <MenuItem value="">Todos os meses</MenuItem>
            {monthOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </AnimationIn>
  );
};
