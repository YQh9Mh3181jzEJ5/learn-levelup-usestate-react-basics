import React from "react";
import { RulesList } from "./RuleList";

export const GameRules: React.FC = (): JSX.Element => (
  <div className="flex justify-between items-center">
    <header className="text-2xl text-center my-4">
      ポケモン風？カウントアップ
    </header>
    <RulesList />
  </div>
);
