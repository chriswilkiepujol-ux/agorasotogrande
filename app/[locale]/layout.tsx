import { content } from '@/lib/content';
import { locales, href, type Locale } from '@/lib/routes';
import { notFound } from 'next/navigation';
import { CookieBanner } from '@/components/cookie-banner';
import { Motion } from '@/components/motion';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export const dynamicParams = false;

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
  if (!locales.includes(params.locale)) notFound();
  const c = content[params.locale];
  return (
    <html lang={params.locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Manrope:wght@400;500;600;700&family=Pinyon+Script&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Motion />
        <CookieBanner c={c} policyHref={href('cookies', params.locale)} />
      </body>
    </html>
  );
}
