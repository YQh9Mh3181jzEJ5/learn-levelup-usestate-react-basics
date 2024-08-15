# ポケモン風カウントアップボタン 🎮

## プロジェクト概要 📝

このプロジェクトは、React、TypeScript、Vite、Tailwind CSS を使用して作成された、シンプルなカウントアップゲームです。ポケモンの世界観をイメージしたデザインで、経験値を積む -> レベルアップという過程を実装しました。

![ゲームスクリーンショット](./path/to/screenshot.png)

## 特徴 ✨

- 経験値アップとレベルアップのカウントアップボタン
- リセット機能
- ルール説明のハンバーガーメニュー
- レスポンシブデザイン
- Tailwind CSS によるスタイリング
- TypeScript による型安全性

## 技術スタック 🛠️

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (アイコン)

## セットアップ方法 🚀

1. リポジトリをクローンします：

   ```shell
   git clone https://github.com/yourusername/pokemon-style-countup.git
   ```

2. プロジェクトディレクトリに移動します：

   ```shell
   cd pokemon-style-countup
   ```

3. 依存関係をインストールします：

   ```shell
   npm install
   ```

4. 開発サーバーを起動します：

   ```shell
   npm run dev
   ```

5. ブラウザで [http://localhost:5173](http://localhost:5173) を開いてゲームをプレイします。

## 使い方 📖

- 「経験値アップ」ボタンをクリックして経験値を獲得します。
- 経験値が一定量に達すると自動的にレベルアップします。
- 「レベルアップ」ボタンを使って手動でレベルを上げることもできます。
- 「リセット」ボタンで経験値とレベルを初期状態に戻せます。
- ハンバーガーメニューからゲームルールを確認できます。

## プロジェクト構造 📁

このプロジェクトは、Viteを使用したReactアプリケーションです。
基本的なファイル構造は以下の通りです。

```shell
src/
├── assets/
│   └── images/
│       └── pokemon_bg.jpg
├── components/
│   ├── ConfirmModal.tsx
│   ├── ControlButton.tsx
│   ├── CountUp.tsx
│   ├── GameRules.tsx
│   ├── Header.tsx
│   ├── PlayerStats.tsx
│   └── RuleList.tsx
├── features/
│   └── playerStats/
│       ├── constants/
│       └── hooks/
├── types/
│   └── ...
├── App.tsx
└── main.tsx
```

## 貢献方法 🤝

1. このリポジトリをフォークします。
2. 新しいブランチを作成します： `git checkout -b feature/awesome-feature`
3. 変更をコミットします： `git commit -am 'Add awesome feature'`
4. ブランチにプッシュします： `git push origin feature/awesome-feature`
5. プルリクエストを作成します。

## ライセンス 📄

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 作者 👤

YourName - [@yourusername](https://github.com/yourusername)

プロジェクトへのリンク: [https://github.com/yourusername/pokemon-style-countup](https://github.com/yourusername/pokemon-style-countup)

---

Happy Coding! 🎉
