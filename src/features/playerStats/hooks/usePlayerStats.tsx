import { useState, useCallback } from "react";
import {
  EXP_INCREMENT,
  EXP_TO_LEVEL_UP,
  INITIAL_LEVEL,
  INITIAL_EXP,
} from "@/config";
import { PlayerStats } from "@/types";

export const usePlayerStats = () => {
  const [playerStats, setPlayerStats] = useState<PlayerStats>({
    exp: INITIAL_EXP,
    level: INITIAL_LEVEL,
  });

  const addExp = useCallback((): void => {
    setPlayerStats((prev) => {
      if (prev.level >= 100) {
        return prev;
      }
      const newExp = prev.exp + EXP_INCREMENT;
      if (newExp >= EXP_TO_LEVEL_UP) {
        const newLevel = Math.min(prev.level + 1, 100);
        return { exp: 0, level: newLevel };
      }
      return { ...prev, exp: newExp };
    });
  }, []);

  const addLevel = useCallback((): void => {
    setPlayerStats((prev) => ({
      ...prev,
      level: Math.min(prev.level + 1, 100),
    }));
  }, []);

  const resetStats = useCallback((): void => {
    setPlayerStats({ exp: 0, level: INITIAL_LEVEL });
  }, []);

  return { playerStats, addExp, addLevel, resetStats };
};
