import React from "react";
import { RulesList } from "./RuleList";

export const GameRules: React.FC = (): JSX.Element => (
  <div className="mb-4">
    <h1 className="text-2xl text-center mb-2">ポケモン風？カウントアップ</h1>
    <RulesList />
  </div>
);
