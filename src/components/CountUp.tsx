import React from "react";
import { usePlayerStats } from "@/features/playerStats/hooks";
import { ControlButtons, PlayerStats } from "@/components";
import { ConfirmModal } from "./ConfirmModal";

export const CountUp: React.FC = (): JSX.Element => {
  const {
    playerStats,
    addExp,
    addLevel,
    resetStats,
    isConfirmModalOpen,
    confirmReset,
    cancelReset,
  } = usePlayerStats();

  return (
    <main className="flex justify-center">
      <div className="flex jusity-center flex-col gap-4 w-full max-w-md bg-gray-700 p-4 rounded shadow-lg">
        <PlayerStats playerStats={playerStats} />
        <ControlButtons
          onAddExp={addExp}
          onAddLevel={addLevel}
          onReset={resetStats}
          playerStats={playerStats}
        />
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onConfirm={confirmReset}
          onCancel={cancelReset}
          message="本当にリセットしますか？ この操作は取り消せません。"
        />
      </div>
    </main>
  );
};
