import { NewFinanceType } from "@pages/dashboard/types";
import { db } from "@service/firebase";
import { addDoc, collection } from "firebase/firestore";

export const useCreateFinanceApi = () => {
  const financeCollection = collection(db, 'finance');

  const createFinance = async (userUid: string, data: NewFinanceType) => {
    try {
      await addDoc(financeCollection, {
        userUid,
        ...data,
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: "Não foi possível salvar o registro! Por favor, tente novamente." };
    };
  };

  return {
    createFinance,
  };
};