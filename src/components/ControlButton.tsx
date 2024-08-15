import { PlayerStats } from "@/types";
import React from "react";

interface Props {
  onAddExp: () => void;
  onAddLevel: () => void;
  onReset: () => void;
  playerStats: PlayerStats;
}

export const ControlButtons: React.FC<Props> = ({
  onAddExp,
  onAddLevel,
  onReset,
  playerStats,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-evenly w-full gap-2">
      <button
        className="flex-1 bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={onAddExp}
        disabled={playerStats.level >= 100}
      >
        経験値アップ
      </button>
      <button
        className="flex-1 bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={onAddLevel}
        disabled={playerStats.level >= 100}
      >
        レベルアップ
      </button>
    </div>
    <button
      className="w-full bg-red-500 hover:bg-red-700 py-2 px-4 rounded"
      onClick={onReset}
    >
      リセット
    </button>
  </div>
);
