import { LabelsType, PieChartRawData } from '@components/pie-chart-custom/types';
import { useAuth } from '@context/AuthContext';
import { db } from '@service/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

type GroupByType = "categoria" | "tipo" | "metodoPagamento";

export const useGetFinancePieChartApi = (
  groupBy: GroupByType,
  colorsValues: string[] = []
) => {
  const [chartData, setChartData] = useState<PieChartRawData>({
    labels: [],
    total: 0,
  });

  const { user } = useAuth();
  const financeCollection = collection(db, 'finance');

  useEffect(() => {
    if (!user?.uid) return;

    const filters = [where('userUid', '==', user.uid)];
    const pieQuery = query(financeCollection, ...filters);

    const unsubscribe = onSnapshot(pieQuery, (querySnapshot) => {
      const groupCount = new Map<string, number>();
      let total = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Determina qual campo usar no agrupamento
        const groupKey = (data[groupBy] as string) || "OUTROS";

        // Converte para número (em reais)
        const value =
          parseFloat(data.valor.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

        total += value;
        groupCount.set(groupKey, (groupCount.get(groupKey) || 0) + value);
      });

      // Monta os labels com cor e porcentagem
      const labels: LabelsType[] = Array.from(groupCount.entries()).map(
        ([label, quantity], index) => ({
          label,
          quantity,
          percent: total > 0 ? (quantity / total) * 100 : 0,
          color: colorsValues.length
            ? colorsValues[index % colorsValues.length]
            : undefined,
        })
      );

      setChartData({ labels, total });
    });

    return () => unsubscribe();
  }, [user?.uid, groupBy, colorsValues]);

  return { chartData };
};
