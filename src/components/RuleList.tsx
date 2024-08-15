import React from "react";
import {
  EXP_INCREMENT,
  EXP_TO_LEVEL_UP,
  INITIAL_LEVEL,
  INITIAL_EXP,
} from "@/features/playerStats/constants";
import { ArrowRight } from "lucide-react";
import { GameFeature } from "@/types";

const gameFeatures: GameFeature[] = [
  {
    title: "経験値アップ",
    description: `「経験値アップ」ボタンをクリックするごとに +${EXP_INCREMENT}`,
  },
  {
    title: "レベルアップ条件",
    description: `経験値 ${EXP_TO_LEVEL_UP} 以上で、レベルが +1`,
  },
  {
    title: "手動レベルアップ",
    description:
      "「レベルアップ」ボタンをクリックするごとに +1（経験値は初期化）",
  },
  {
    title: "レベル上限",
    description: "レベルの上限は、100",
  },
  {
    title: "リセット",
    description: "「リセット」ボタンをクリックすると、経験値とレベルが初期化",
  },
];

export const RulesList: React.FC = () => {
  return (
    <div className="text-sm text-white">
      <ul className="space-y-2">
        {gameFeatures.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-blue-700" />
            <div>
              <h3 className="font-medium text-blue-600">{feature.title}</h3>
              <p className="mt-1">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 italic text-gray-500 text-xs">
        ※初期値は、経験値: {INITIAL_EXP}, レベル: {INITIAL_LEVEL}とする。
      </p>
    </div>
  );
};
