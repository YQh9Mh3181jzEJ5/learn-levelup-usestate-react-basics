import { useState, useCallback } from "react";
import {
  EXP_INCREMENT,
  EXP_TO_LEVEL_UP,
  INITIAL_LEVEL,
  INITIAL_EXP,
  MAX_LEVEL,
} from "@/config";
import { PlayerStats, UsePlayerStatsReturn } from "@/types";

export const usePlayerStats = (): UsePlayerStatsReturn => {
  const [playerStats, setPlayerStats] = useState<PlayerStats>({
    exp: INITIAL_EXP,
    level: INITIAL_LEVEL,
  });

  const addExp = useCallback((): void => {
    setPlayerStats((prev: PlayerStats) => {
      if (prev.level >= MAX_LEVEL) return prev;

      const newExp = prev.exp + EXP_INCREMENT;
      if (newExp < EXP_TO_LEVEL_UP) {
        return { ...prev, exp: newExp };
      }

      return {
        exp: INITIAL_EXP,
        level: Math.min(prev.level + 1, MAX_LEVEL),
      };
    });
  }, []);

  const addLevel = useCallback((): void => {
    setPlayerStats((prev: PlayerStats) => ({
      exp: INITIAL_EXP,
      level: Math.min(prev.level + 1, MAX_LEVEL),
    }));
  }, []);

  const resetStats = useCallback((): void => {
    setPlayerStats({ exp: INITIAL_EXP, level: INITIAL_LEVEL });
  }, []);

  return { playerStats, addExp, addLevel, resetStats };
};
