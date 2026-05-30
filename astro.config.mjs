// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages（独自ドメイン sagamihara-process.com）向け設定。
// 独自ドメインを使うため base は '/'。public/CNAME でドメインを指定する。
// もしプロジェクトページ（xxx.github.io/sagamihara-process）で公開する場合は
// base を '/sagamihara-process' に変更すること。
export default defineConfig({
  site: 'https://sagamihara-process.smalltech.jp',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
