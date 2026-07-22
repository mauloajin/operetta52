import './globals.css';

const name = '鴨餃子とワインバル オペレッタ52｜東梅田 居酒屋バル';
const description = '東梅田・梅田の居酒屋バル「鴨餃子とワインバル オペレッタ52」。鴨餃子、創作鴨料理とワインを楽しめるモダン居酒屋レストラン。住所、営業時間、予約、メニュー、アクセスを案内します。';

export const metadata = {
  metadataBase: new URL('https://operetta52.vercel.app'),
  title: `${name}｜鴨餃子・鴨料理とワイン`,
  description,
  alternates: { canonical: '/' },
  openGraph: { title: name, description, url: '/', siteName: name, locale: 'ja_JP', type: 'website' },
  robots: { index: true, follow: true },
  verification: { google: 'ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM' },
};

export default function RootLayout({ children }) {
  return <html lang="ja"><body>{children}</body></html>;
}
