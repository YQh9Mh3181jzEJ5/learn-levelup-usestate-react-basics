import { PlayerStats } from "./playerStats";

export interface UsePlayerStatsReturn {
  playerStats: PlayerStats;
  addExp: () => void;
  addLevel: () => void;
  resetStats: () => void;
}
