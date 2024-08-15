import { INITIAL_EXP, INITIAL_LEVEL } from "@/features/playerStats/constants";
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
}): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-evenly w-full gap-2">
      <button
        className="flex-1 bg-blue-500 hover:bg-blue-700 py-8 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed active:bg-blue-800"
        onClick={onAddExp}
        disabled={playerStats.level >= 100}
      >
        経験値アップ
        <br />
        +20
      </button>
      <button
        className="flex-1 bg-blue-500 hover:bg-blue-700 py-8 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed active:bg-blue-800"
        onClick={onAddLevel}
        disabled={playerStats.level >= 100}
      >
        レベルアップ
        <br />
        +1
      </button>
    </div>
    <button
      className="w-full bg-red-500 hover:bg-red-700 py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
      onClick={onReset}
      disabled={
        playerStats.exp === INITIAL_EXP && playerStats.level === INITIAL_LEVEL
      }
    >
      リセット
    </button>
  </div>
);
