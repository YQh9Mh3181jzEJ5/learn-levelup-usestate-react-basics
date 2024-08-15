import React from "react";
import { EXP_INCREMENT, EXP_TO_LEVEL_UP, INITIAL_LEVEL } from "@/config";

export const RulesList: React.FC = (): JSX.Element => {
  const rules = [
    `経験値は、「経験値アップ」ボタンをクリックするごとに +${EXP_INCREMENT}`,
    `経験値${EXP_TO_LEVEL_UP} 以上で、レベルが +1`,
    "レベルは、「レベルアップ」ボタンをクリックするごとに +1（経験値は初期化）",
    "「リセット」ボタンをクリックすると、経験値とレベルが初期化",
  ];

  return (
    <div className={`text-sm p-4 bg-slate-800 rounded`}>
      <h2>ルール</h2>
      <ol className="list-decimal list-inside mt-2">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>
      <p className="mt-2">
        ※初期値は、経験値: 0, レベル: {INITIAL_LEVEL}とする。
      </p>
    </div>
  );
};
