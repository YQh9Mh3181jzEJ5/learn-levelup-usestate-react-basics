import { PlayerStats } from "./playerStats";

export interface ControlButtons {
  onAddExp: () => void;
  onAddLevel: () => void;
  onReset: () => void;
  playerStats: PlayerStats;
}
