import { NewFinanceType } from "@pages/dashboard/types";
import { db } from "@service/firebase";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export const useUpdateFinanceApi = () => {
  const financeCollection = collection(db, "finance");

  const updateFinance = async (
    financeId: string,
    userUid: string,
    data: Partial<NewFinanceType>
  ) => {
    try {
      if (!financeId) {
        return {
          success: false,
          error: "ID do registro não foi fornecido!",
        };
      };

      const financeRef = doc(financeCollection, financeId);
      const docSnap = await getDoc(financeRef);

      if (!docSnap.exists()) {
        return {
          success: false,
          error: "Registro não encontrado!",
        };
      };

      const financeData = docSnap.data();

      if (financeData.userUid !== userUid) {
        return {
          success: false,
          error: "Você não tem permissão para editar este registro.",
        };
      };

      await updateDoc(financeRef, data);

      return { success: true };
    } catch (error) {
      return { success: false, error: "Não foi possível atualizar o registro! Por favor, tente novamente.", };
    };
  };

  return {
    updateFinance,
  };
};
