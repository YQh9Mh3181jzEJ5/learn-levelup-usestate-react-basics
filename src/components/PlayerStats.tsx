import React from "react";
import { PlayerStats as PlayerStatsType } from "@/types";

interface Props {
  playerStats: PlayerStatsType;
}

export const PlayerStats: React.FC<Props> = ({ playerStats }): JSX.Element => (
  <div>
    <p className="mb-2">現在のステータス</p>
    <div className="grid grid-cols-2 gap-2">
      <div className="h-12 bg-gray-600 rounded flex items-center">
        <span className="w-1/2 text-center">経験値</span>
        <span className="w-1/2 text-center text-2xl">{playerStats.exp}</span>
      </div>
      <div className="h-12 bg-gray-600 rounded flex items-center ">
        <span className="w-1/2 text-center">レベル</span>
        <span className="w-1/2 text-center text-2xl">{playerStats.level}</span>
      </div>
    </div>
  </div>
);
