import React from "react";
import { RulesList } from "./RuleList";

export const GameRules: React.FC = (): JSX.Element => (
  <div className="flex justify-between items-center">
    <header className="my-4">
      <h1 className="text-2xl">ポケモン風？カウントアップ</h1>
    </header>
    <RulesList />
  </div>
);
