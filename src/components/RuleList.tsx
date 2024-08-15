import React, { useState } from "react";
import { EXP_INCREMENT, EXP_TO_LEVEL_UP, INITIAL_LEVEL } from "@/config";
import { ChevronDown, ChevronUp } from "lucide-react";

export const RulesList: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const rules = [
    `経験値は、「経験値アップ」ボタンをクリックするごとに +${EXP_INCREMENT}`,
    `経験値${EXP_TO_LEVEL_UP} 以上で、レベルが +1`,
    "レベルは、「レベルアップ」ボタンをクリックするごとに +1（経験値は初期化）",
    "「リセット」ボタンをクリックすると、経験値とレベルが初期化",
  ];

  return (
    <div className="text-sm bg-slate-800 rounded">
      <button
        className="flex justify-between items-center w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>ルール</h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2 p-4">
          <ol className="list-decimal list-inside">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
          <p className="">
            ※初期値は、経験値: 0, レベル: {INITIAL_LEVEL}とする。
          </p>
        </div>
      )}
    </div>
  );
};
