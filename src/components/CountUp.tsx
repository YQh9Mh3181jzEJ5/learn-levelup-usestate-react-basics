import React from "react";
import { usePlayerStats } from "@/features/playerStats/hooks";
import { ControlButtons, PlayerStats } from "@/components";

export const CountUp: React.FC = (): JSX.Element => {
  const { playerStats, addExp, addLevel, resetStats } = usePlayerStats();

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
      </div>
    </main>
  );
};
