# English for Minecraft

Minecraftをきっかけに、英語を「勉強する」より先に「読めた・分かった」と感じるための小学生向けWebアプリです。

## 初版のねらい

- 小学校低学年を主対象にする
- 音声入力ではなく、文字を見て意味を取ることに特化する
- 日本語訳の暗記より、英語を読んだ結果として何をすればよいか分かる体験を優先する
- 最終的にMinecraftサーバーの短い説明やルールを大まかに読めるところを目指す
- iPhone / iPad / PCのブラウザで動作させる
- ログインやサーバーを必要とせず、学習進捗は端末のlocalStorageに保存する

## 現在の学習フロー

1. **Forest** — tree / water / stone など、目に見えるものを読む
2. **Shelter** — Open the door. / Get wood. など、短い指示を読む
3. **Cave** — Do not... / You can... など、ルールを読む
4. **Server Gate** — Minecraftサーバー紹介風の短い英文を読む

現在は12問の小さなプロトタイプです。

## 設計方針

- 問題文はできるだけ英語だけで先に提示する
- 日本語は「ヒント」を押したときと回答後の確認に使う
- 文法用語の説明は初期段階では行わない
- `can`, `do not`, `with`, `build`, `break` など、Minecraftの説明・ルールを読むのに役立つ語を優先する
- 公式Minecraft画像・テクスチャ等は使用せず、独自UIと絵文字で構成する

## 構成

- `index.html` — 画面
- `style.css` — iPhone / iPad対応UI
- `app.js` — 学習データ、判定、進捗保存
- `manifest.webmanifest` — ホーム画面追加用
- `service-worker.js` — 基本的なオフラインキャッシュ

## GitHub Pages

GitHub Pagesを `main` ブランチの `/ (root)` から公開すると、そのまま静的Webアプリとして利用できます。

公開URL想定:

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
