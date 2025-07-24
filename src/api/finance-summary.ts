import { NewFinanceType } from '@pages/dashboard/types';
import { useMemo } from 'react';

export const useFinanceSummary = ({ allFinances }: { allFinances: NewFinanceType[] }) => {
  // Função para converter "R$ 56,45" em número 56.45
  const parseCurrencyToNumber = (value: string | number) => {
    if (typeof value === 'number') return value;
    if (!value) return 0;

    // Remove R$, espaços e pontos de milhar, depois troca vírgula por ponto
    const normalized = value
      .replace(/\s/g, '')
      .replace('R$', '')
      .replace(/\./g, '')
      .replace(',', '.');

    return parseFloat(normalized) || 0;
  };
  
  // Cálculo dos valores agregados usando useMemo para otimizar
  const summary = useMemo(() => {
    let entradas = 0;
    let saidas = 0;

    allFinances?.forEach(({ tipo, valor }) => {
      const numValor = parseCurrencyToNumber(valor);

      if (tipo === "ENTRADA") {
        entradas += numValor;
      } else if (tipo === "SAIDA") {
        saidas += numValor;
      };
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
