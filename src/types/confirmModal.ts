export interface ConfirmModal {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}
