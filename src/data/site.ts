// サイト全体で使う共通データ（ナビ・SNS・連絡先など）
// ※デモ用に既存サイト/SNS/Wikipediaから収集した情報を反映。
//   正式値は要件確定後に差し替える。

export const SITE = {
  name: '相模原プロセス',
  nameEn: 'SAGAMIHARA PROCESS',
  tagline: 'TRUST THE PROCESS',
  philosophy: '相模原をバスケットの聖地へ',
  league: '3x3.EXE PREMIER JAPAN',
  hometown: '神奈川県相模原市南区',
  founded: '2020',
  email: 'sp@sagamihara-process.com',
};

export const NAV = [
  { label: 'HOME', labelJp: 'ホーム', href: '/' },
  { label: 'PLAYERS', labelJp: '選手紹介', href: '/players/' },
  { label: 'SPONSOR', labelJp: 'スポンサー募集', href: '/sponsor/' },
  { label: 'ACADEMY', labelJp: 'アカデミー', href: '/academy/' },
  { label: 'CONTACT', labelJp: 'お問い合わせ', href: '/contact/' },
];

// 表示順: Instagram（メイン）→ X → Facebook
export const SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@sagamihara3x3',
    href: 'https://www.instagram.com/sagamihara3x3/',
    primary: true,
  },
  {
    key: 'x',
    label: 'X (Twitter)',
    handle: '@process_3x3',
    href: 'https://x.com/process_3x3',
    primary: false,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    handle: '相模原プロセス',
    href: 'https://www.facebook.com/SagamiharaProcess/',
    primary: false,
  },
];
