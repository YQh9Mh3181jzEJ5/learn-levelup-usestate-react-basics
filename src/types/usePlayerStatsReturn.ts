import { PlayerStats } from "./playerStats";

export interface UsePlayerStatsReturn {
  playerStats: PlayerStats;
  addExp: () => void;
  addLevel: () => void;
  resetStats: () => void;
  confirmReset: () => void;
  cancelReset: () => void;
  isConfirmModalOpen: boolean;
}
