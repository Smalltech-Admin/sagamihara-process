// 選手データ
// 公式Instagram(@sagamihara3x3)の加入告知（SIGNED）ビジュアルより、
// 選手名・背番号・国・写真を取得して反映。
// ※ 日本語表記の一部（遠藤・山木・エドボー）は読みを確認のうえ確定する。

export type Player = {
  no: string;
  nameEn: string; // ローマ字（公式表記）
  name?: string; // 日本語表記（確認済みのみ）
  country: string;
  photo: string;
};

export const PLAYERS: Player[] = [
  { no: '1', nameEn: 'ITSUKI ENDO', country: 'JPN', photo: '/images/insta/ig12.jpg' },
  { no: '3', nameEn: 'KENT EDOBOR', country: 'JPN', photo: '/images/insta/ig13.jpg' },
  { no: '22', nameEn: 'HIROTO YAMAKI', country: 'JPN', photo: '/images/insta/ig14.jpg' },
  {
    no: '13',
    nameEn: 'UROS KANIC',
    name: 'ウロシュ・カニッチ',
    country: 'SRB',
    photo: '/images/insta/ig15.jpg',
  },
  {
    no: '5',
    nameEn: 'DAIKOU MATSUZAWA',
    name: '松澤 大晃',
    country: 'JPN',
    photo: '/images/insta/ig16.jpg',
  },
  { no: '15', nameEn: 'KENYA IGO', name: '井後 健矢', country: 'JPN', photo: '/images/insta/ig17.jpg' },
];
