import { useAuth } from "@context/AuthContext";
import { db } from "@service/firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";

export const useDeleteFinanceApi = () => {
  const { user } = useAuth();

  const deleteFinance = async (id: string) => {
    if (!user?.uid) {
      return { success: false, error: "Usuário não autenticado" };
    };

    try {
      const financeDocRef = doc(db, "finance", id);
      const financeDocSnap = await getDoc(financeDocRef);

      if (!financeDocSnap?.exists()) {
        return { success: false, error: "Registro não encontrado" };
      };

      const financeData = financeDocSnap?.data();

      // Valida se o registro pertence ao usuário logado
      if (financeData?.userUid !== user?.uid) {
        return { success: false, error: "Permissão negada para excluir este registro" };
      };

      await deleteDoc(financeDocRef);
      return { success: true };

    } catch (error) {
      return { success: false, error: `Erro ao excluir finance: ${error}` };
    };
  };

  return {
    deleteFinance,
  };
};
