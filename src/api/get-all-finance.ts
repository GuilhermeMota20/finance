import { useAuth } from '@context/AuthContext';
import { NewFinanceType } from '@pages/dashboard/types';
import { db } from '@service/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useGetAllFinanceApi = () => {
  const [allFinances, setAllFinances] = useState<NewFinanceType[]>([]);
  const { user } = useAuth();

  const financeCollection = collection(db, 'finance');

  useEffect(() => {
    if (!user?.uid) return;

    const currentUser = where('userUid', '==', user?.uid);
    const allFinancesQuery = query(financeCollection, currentUser);

    const fetchAllFinance = onSnapshot(allFinancesQuery, (querySnapshot) => {
      const financeArray: NewFinanceType[] = [];
      querySnapshot.forEach((doc) => {
        financeArray?.push({
          id: doc?.id,
          ...doc?.data(),
        } as NewFinanceType & { id: string });
      });

      setAllFinances(financeArray);
    });

    return () => fetchAllFinance();
  }, [user?.uid]);

  return {
    allFinances,
  };
};


