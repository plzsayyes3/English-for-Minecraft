# English for Minecraft

Minecraftをきっかけに、英語を「勉強する」より先に「読めた・分かった」と感じるための小学生向けWebアプリです。

## ねらい

- 小学校低学年を主対象にする
- 音声入力ではなく、文字を見て意味を取ることに特化する
- 最終的にMinecraftサーバーの短い説明やルールを大まかに読めるところを目指す
- iPhone / iPad / PCで動作し、進捗は端末内に保存する

## 学習設計

重要なルールは **「問題文と選択肢に同じ英単語を同時表示して、文字の形だけで正解できる問題を作らない」** こと。

1. **導入：日本語 → 英語** — 「木」はどれ？ → TREE / STONE / PIG / WATER
2. **読解：英語 → 絵** — `Open the door.` → 絵だけからドアを選ぶ。選択肢の英単語は隠す
3. **意味理解：英文 → 日本語の意味** — `You can build here.` → 「建築できる」などから選ぶ
4. **実践：サーバー説明 → 内容理解** — 複数の短文を読み、そのサーバーで何ができるか判断する

日本語は入口と意味確認に使い、進むほど英語そのものから意味を取る比率を高めます。文法用語の説明は初期段階では行いません。

## 現在の学習フロー

- **Forest** — tree / water / stone など、日本語からMinecraftで使う英単語を選ぶ
- **Shelter** — Open the door. / Get wood. などを読み、文字のない絵から対象を選ぶ
- **Cave** — Do not... / You can... などのルールを読み、日本語で意味を選ぶ
- **Server Gate** — Minecraftサーバー紹介風の短い英文を読む

現在は12問のプロトタイプです。

## 構成

- `index.html` — 画面
- `style.css` — iPhone / iPad対応UI
- `app.js` — 学習データ、判定、進捗保存
- `manifest.webmanifest` — ホーム画面追加用
- `service-worker.js` — 基本的なオフラインキャッシュ

## GitHub Pages

`https://plzsayyes3.github.io/English-for-Minecraft/`

## 次に検討すること

- 最初の30語を正式に選定する
- 問題数ではなく「世界を進む」感覚を強化する
- 間違えた語を自然に再登場させる
- 1日3〜5分で終わるミッション構成
- サーバー説明、看板、チャット、設定画面など実際に読みたい英文への段階的接続
- 端末内だけで子どもの習熟度を記録する仕組み

## Disclaimer

This is an unofficial educational project and is not affiliated with Mojang Studios or Microsoft.
