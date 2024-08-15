import { useConfirmModalReturn } from "@/types";
import { useState } from "react";

export const useConfirmModal = (): useConfirmModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  return { isOpen, openModal, closeModal };
};
