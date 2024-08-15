import { useConfirmModalReturn } from "@/types";
import { useState, useCallback } from "react";

export const useConfirmModal = (): useConfirmModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback((): void => setIsOpen(true), []);
  const closeModal = useCallback((): void => setIsOpen(false), []);

  return { isOpen, openModal, closeModal };
};
