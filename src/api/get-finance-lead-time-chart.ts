import { useAuth } from '@context/AuthContext';
import { NewFinanceType, leadTimeChartObject } from '@pages/dashboard/types';
import { db } from '@service/firebase';
import { parseDateFirestoreToDate } from '@utils/parse-date-firestore-to-date';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useGetFinanceLeadTimeChartApi = () => {
  const [chartData, setChartData] = useState<leadTimeChartObject>({
    xAxis: [],
    entradas: [],
    saidas: [],
  });

  const { user } = useAuth();
  const financeCollection = collection(db, 'finance');

  useEffect(() => {
    if (!user?.uid) return;

    const currentUser = where('userUid', '==', user?.uid);
    const financeQuery = query(financeCollection, currentUser);

    const unsubscribe = onSnapshot(financeQuery, (querySnapshot) => {
      const monthlyGroups = new Map<string, { entradas: number; saidas: number }>();

      querySnapshot.forEach((doc) => {
        const data = doc.data() as NewFinanceType;
        const date = parseDateFirestoreToDate(data.data);
        if (!date) return;

        const monthKey = format(date, 'yyyy-MM');
        const numericValue =
          parseFloat(data.valor.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

        if (!monthlyGroups.has(monthKey)) {
          monthlyGroups.set(monthKey, { entradas: 0, saidas: 0 });
        }

        const group = monthlyGroups.get(monthKey)!;
        if (data.tipo === 'ENTRADA') {
          group.entradas += numericValue;
        } else {
          group.saidas += numericValue;
        }
      });

      const sortedMonths = Array.from(monthlyGroups.keys()).sort();

      const xAxis = sortedMonths.map((key) => {
        const [year, month] = key.split('-').map(Number);
        return format(new Date(year, month - 1), 'MMM/yy', { locale: ptBR });
      });

      const round = (value: number) => Number(value.toFixed(2));

      const entradas = sortedMonths.map((key) =>
        round(monthlyGroups.get(key)!.entradas)
      );
      const saidas = sortedMonths.map((key) =>
        round(monthlyGroups.get(key)!.saidas)
      );

      setChartData({ xAxis, entradas, saidas });
    });

    return () => unsubscribe();
  }, [user?.uid]);

  return { chartData };
};
