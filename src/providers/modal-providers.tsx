import { ModalConfirmDelete } from "@pages/dashboard/components/modal-confirm-delete/modal-confirm-delete";
import { ModalNewFinance } from "@pages/dashboard/components/modal-new-finance";
import { useEffect, useState } from "react";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <ModalNewFinance />
      <ModalConfirmDelete />
    </>
  )
}