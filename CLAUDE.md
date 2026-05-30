# sagamihara-process

相模原プロセス Webサイト（HP）のコードリポジトリ。

## リポジトリ情報
| 項目 | 値 |
|------|-----|
| リポジトリ | （GitHub URL：未設定） |
| ブランチ | main |
| 公開URL | （GitHub Pages：未設定） |

## Git 設定（必須）
コミット時は必ず以下のidentityを使用:
```
git config user.name "Takumi Higashiyama"
git config user.email "atozist@gmail.com"
```

## 技術スタック
| 分類 | 技術 |
|------|------|
| フレームワーク | Astro |
| スタイリング | （Tailwind CSS 等：実装時に確定） |
| ホスティング | GitHub Pages |
| デプロイ | GitHub Actions（push → ビルド → Pages公開） |

## デプロイルール（この案件の方針）
- **本案件は GitHub Pages へデプロイする**（グローバルルールのVercelデプロイは適用しない）
- デプロイは GitHub push → GitHub Actions 自動ビルド → Pages公開 の流れのみ
- Astro の `site` / `base` 設定を GitHub Pages の公開URLに合わせる
- 手動アップロード・CLI直デプロイは禁止

## ブランチ運用
- mainブランチへの直接pushは禁止
- feature/xxx ブランチで開発 → PR → マージ
- コミットメッセージは日本語OK

## 開発ルール
- コンポーネントは `src/components/`、ページは `src/pages/`、レイアウトは `src/layouts/`
- 画像等の静的アセットは `public/` または `src/assets/`
- コンテンツ（MD/MDX）を使う場合は `src/content/` でコンテンツコレクション管理
- UIダイアログはブラウザネイティブ（confirm/alert）禁止 → アプリ内モーダル/トースト
- デザインのAIっぽさ排除ルール（左縁ボーダー禁止・装飾絵文字禁止）を遵守

## ドキュメント参照ルール
- 案件レベルのドキュメント（要件定義・サイトマップ・SEO要件等）は親ディレクトリの CLAUDE.md を参照
- 問題解決後は docs/TROUBLESHOOTING.md、再利用パターンは docs/TECH_TIPS.md に追記
