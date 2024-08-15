import { INITIAL_EXP, INITIAL_LEVEL } from "@/features/playerStats/constants";
import { ControlButtons as ControlButtonsProps } from "@/types";
import React from "react";

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  onAddExp,
  onAddLevel,
  onReset,
  playerStats,
}): JSX.Element => {
  const isMaxLevel = playerStats.level >= 100;
  const isInitialState =
    playerStats.exp === INITIAL_EXP && playerStats.level === INITIAL_LEVEL;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-evenly w-full gap-2">
        <button
          className="flex-1 bg-blue-500 hover:bg-blue-700 py-8 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed active:bg-blue-800"
          onClick={onAddExp}
          disabled={isMaxLevel}
        >
          経験値アップ
          <br />
          +20
        </button>
        <button
          className="flex-1 bg-blue-500 hover:bg-blue-700 py-8 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed active:bg-blue-800"
          onClick={onAddLevel}
          disabled={isMaxLevel}
        >
          レベルアップ
          <br />
          +1
        </button>
      </div>
      <button
        className="w-full bg-red-500 hover:bg-red-700 py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={onReset}
        disabled={isInitialState}
      >
        リセット
      </button>
    </div>
  );
};
