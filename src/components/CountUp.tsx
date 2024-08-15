import React from "react";
import { useConfirmModal, usePlayerStats } from "@/features/playerStats/hooks";
import { ControlButtons, PlayerStats } from "@/components";
import { ConfirmModal } from "./ConfirmModal";

export const CountUp: React.FC = (): JSX.Element => {
  const { playerStats, addExp, addLevel, resetStats } = usePlayerStats();
  const {
    isOpen: isConfirmModalOpen,
    openModal,
    closeModal,
  } = useConfirmModal();

  const handleResetClick = (): void => openModal();
  const handleConfirmReset = (): void => {
    resetStats();
    closeModal();
  };

  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col gap-4 w-full min-w-[280px] max-w-md bg-gray-700 p-4 rounded shadow-lg">
        <PlayerStats playerStats={playerStats} />
        <ControlButtons
          onAddExp={addExp}
          onAddLevel={addLevel}
          onReset={handleResetClick}
          playerStats={playerStats}
        />
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onConfirm={handleConfirmReset}
          onCancel={closeModal}
          message="本当にリセットしますか？ この操作は取り消せません。"
        />
      </div>
    </main>
  );
};
