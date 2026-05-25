import { NewFinanceType } from '@pages/dashboard/types';
import { parseFinanceValue } from '@utils/finance-filters';
import { useMemo } from 'react';

export const useFinanceSummary = ({ allFinances }: { allFinances: NewFinanceType[] }) => {
  const summary = useMemo(() => {
    let entradas = 0;
    let saidas = 0;

    allFinances.forEach(({ tipo, valor }) => {
      const numValor = parseFinanceValue(valor);

      if (tipo === 'ENTRADA') {
        entradas += numValor;
      } else if (tipo === 'SAIDA') {
        saidas += numValor;
      }
    });

    const total = entradas - saidas;
    const percentual = entradas > 0 ? (saidas / entradas) * 100 : 0;

    return {
      entradas,
      saidas,
      total,
      percentual,
    };
  }, [allFinances]);

  return {
    summary,
  };
};
