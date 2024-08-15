import { useState, useCallback } from "react";
import { EXP_INCREMENT, EXP_TO_LEVEL_UP, INITIAL_LEVEL } from "@/config";
import { PlayerStats } from "@/types";

export const usePlayerStats = () => {
  const [playerStats, setPlayerStats] = useState<PlayerStats>({
    exp: 0,
    level: INITIAL_LEVEL,
  });

  const addExp = useCallback(() => {
    setPlayerStats((prev) => {
      const newExp = prev.exp + EXP_INCREMENT;
      if (newExp >= EXP_TO_LEVEL_UP) {
        return { exp: 0, level: prev.level + 1 };
      }
      return { ...prev, exp: newExp };
    });
  }, []);

  const addLevel = useCallback(() => {
    setPlayerStats((prev) => {
      if (prev.level >= 100) {
        return { ...prev, level: 100 };
      } else {
        return { ...prev, level: prev.level + 1 };
      }
    });
  }, []);

  const resetStats = useCallback(() => {
    setPlayerStats({ exp: 0, level: INITIAL_LEVEL });
  }, []);

  return { playerStats, addExp, addLevel, resetStats };
};
