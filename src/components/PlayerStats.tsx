import React from "react";
import { PlayerStats as PlayerStatsType } from "@/types";

interface Props {
  playerStats: PlayerStatsType;
}

export const PlayerStats: React.FC<Props> = ({ playerStats }): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center">
      <span className="w-20">経験値</span>
      <span className="flex-1 h-12 bg-gray-600 rounded flex items-center justify-center">
        {playerStats.exp}
      </span>
    </div>
    <div className="flex items-center">
      <span className="w-20">レベル</span>
      <span className="flex-1 h-12 bg-gray-600 rounded flex items-center justify-center">
        {playerStats.level}
      </span>
    </div>
  </div>
);
