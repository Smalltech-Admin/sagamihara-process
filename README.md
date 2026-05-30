# 相模原プロセス 公式サイト（リニューアル）

3x3プロバスケットボールクラブ「相模原プロセス（SAGAMIHARA PROCESS）」公式サイトの
リニューアル版。既存サイト（https://sagamihara-process.com/）のリプレイスを目的としたデモ。

## 技術スタック
| 分類 | 技術 |
|------|------|
| フレームワーク | [Astro](https://astro.build/) v5 |
| スタイル | Tailwind CSS v4（`@tailwindcss/vite`） |
| ホスティング | GitHub Pages（独自ドメイン `sagamihara-process.com`） |
| デプロイ | GitHub Actions（`.github/workflows/deploy.yml`） |

## ページ構成
- `/` ホーム（ヒーロースライドショー・理念・選手プレビュー・SNS）
- `/players/` 選手紹介
- `/sponsor/` スポンサー募集
- `/academy/` アカデミー（SAGAMIHARA BASKETBALL LAB）
- `/contact/` お問い合わせ

## 開発
```bash
npm install      # 依存インストール
npm run dev      # 開発サーバ（http://localhost:4321）
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果のプレビュー
```

## ディレクトリ
```
src/
├── components/   # Header / Footer / Logo / Slideshow / PlayerCard / PageHero など
├── data/         # site.ts（ナビ・SNS・連絡先）, players.ts（選手データ）
├── layouts/      # Layout.astro（共通レイアウト・SEO・リビールアニメ）
├── pages/        # 各ページ
└── styles/       # global.css（デザイントークン・カスタムユーティリティ）
public/
├── CNAME             # 独自ドメイン（GitHub Pages用）
├── favicon.svg
└── images/           # 既存サイトから再利用した実画像
    ├── brand/        # ロゴ（カンガルークレスト）
    ├── hero/         # ヒーロー/スライドショー用
    ├── players/      # 選手写真（p1〜p6）
    └── gallery/      # 試合・遠征・チーム写真
```

## 画像について
`public/images/` 配下は既存サイトから再利用した実画像です。
- 選手写真と「選手名・背番号・プロフィール」の対応は **デモ用の仮設定**。正式情報に差し替えてください。
- SNSフィード（ホーム下部）は実投稿の写真・動画に差し替え予定。
- スポンサーロゴはプレースホルダー枠です。

## デプロイ（GitHub Pages）
1. GitHubにリポジトリを作成し push（`main`）。
2. リポジトリ Settings → Pages → Source を「GitHub Actions」に設定。
3. push すると `.github/workflows/deploy.yml` が自動ビルド＆公開。
4. 独自ドメインは `public/CNAME`（`sagamihara-process.com`）で指定済み。
   - プロジェクトページ（`<user>.github.io/sagamihara-process`）で公開する場合は
     `astro.config.mjs` の `base` を `/sagamihara-process` に変更し、CNAMEを削除する。

## お問い合わせ
お問い合わせはメールアドレス（`sp@sagamihara-process.com`）と各SNSへの導線のみ。
入力フォームは設置していません（[contact.astro](src/pages/contact.astro)）。
