import React from "react";
import {
  EXP_INCREMENT,
  EXP_TO_LEVEL_UP,
  INITIAL_LEVEL,
} from "../config/constants";

export const GameRules: React.FC = () => (
  <div className="mb-4">
    <h1 className="text-2xl text-center mb-2">
      【React】useStateを使ったカウントアップ処理の実装
    </h1>
    <p className="text-sm p-2">
      ルール:
      <br />
      1. 経験値は、「経験値アップ」ボタンをクリックするごとに +{EXP_INCREMENT}
      <br />
      2. 経験値{EXP_TO_LEVEL_UP} 以上で、レベルが +1
      <br />
      3. レベルは、「レベルアップ」ボタンをクリックするごとに
      +1（経験値は初期化）
      <br />
      4. 「リセット」ボタンをクリックすると、経験値とレベルが初期化
      <br />
      なお、初期値は、経験値: 0, レベル: {INITIAL_LEVEL}とする。
    </p>
  </div>
);
