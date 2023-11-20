import './globals.css';

import type { Metadata } from 'next';

import { milne, montserrat_arm, jost } from '@/fonts';

import Header from '@/app/ui/Header';
import { ParamsType } from '@/types';

export const metadata: Metadata = {
  title: 'ZipIt',
  description: 'accessories store',
  alternates: {
    languages: {
      'am': '/am',
      'ru': '/ru'
    }
  }
};

type Props = {
  children: React.ReactNode;
  params: ParamsType;
}

export default function RootLayout({ children, params }: Props) {
  const font = params.lang === 'am' ? montserrat_arm : jost;

  return (
    <html 
      lang={params.lang}
      className={`${font.className} ${milne.variable}`}
    >
      <body className='overflow-hidden'>
        <Header 
          params={params}
        />
        {children}
      </body>
    </html>
  );
}
