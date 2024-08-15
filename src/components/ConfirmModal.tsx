import { ConfirmModal as ConfirmModalProps } from "@/types";
import React from "react";
import ReactDOM from "react-dom";

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
}): React.ReactNode => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl text-white">
        <p className="mb-4">{message}</p>
        <div className="flex justify-between gap-2">
          <button
            className="flex-1 text-black px-4 py-2 bg-gray-200 rounded"
            onClick={onCancel}
          >
            キャンセル
          </button>
          <button
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            リセットする
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
