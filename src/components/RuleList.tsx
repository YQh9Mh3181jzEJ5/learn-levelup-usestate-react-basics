import React, { useState } from "react";
import { EXP_INCREMENT, EXP_TO_LEVEL_UP, INITIAL_LEVEL } from "@/config";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export const RulesList: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const rules = [
    {
      title: "経験値アップ",
      description: `「経験値アップ」ボタンをクリックするごとに +${EXP_INCREMENT}`,
    },
    {
      title: "レベルアップ条件",
      description: `経験値${EXP_TO_LEVEL_UP} 以上で、レベルが +1`,
    },
    {
      title: "手動レベルアップ",
      description:
        "「レベルアップ」ボタンをクリックするごとに +1（経験値は初期化）",
    },
    {
      title: "リセット",
      description: "「リセット」ボタンをクリックすると、経験値とレベルが初期化",
    },
  ];

  return (
    <div className="text-sm bg-slate-800 rounded">
      <button
        className="flex justify-between items-center w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-ms font-semibold">ルール</h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col gap-4 p-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start">
              <ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-blue-400" />
              <div>
                <h3 className="font-medium text-blue-400">{rule.title}</h3>
                <p className="mt-1 text-gray-300">{rule.description}</p>
              </div>
            </div>
          ))}
          <p className="mt-2 italic text-gray-400">
            ※初期値は、経験値: 0, レベル: {INITIAL_LEVEL}とする。
          </p>
        </div>
      )}
    </div>
  );
};
