import localFont from 'next/font/local';
import { Jost } from 'next/font/google';
 
export const milne = localFont({
  src: [
    {
      path: 'fonts/milne/black.otf',
      weight: '900'
    },
    {
      path: 'fonts/milne/extra-bold.otf',
      weight: '800'
    },
    {
      path: 'fonts/milne/bold.otf',
      weight: '700'
    }
  ],
  variable: '--font-milne'
});
 
export const montserrat_arm = localFont({
  src: [
    {
      path: 'fonts/montserrat-arm/black.otf',
      weight: '900'
    },
    {
      path: 'fonts/montserrat-arm/bold.otf',
      weight: '700'
    },
    {
      path: 'fonts/montserrat-arm/semi-bold.otf',
      weight: '600'
    },
    {
      path: 'fonts/montserrat-arm/medium.otf',
      weight: '500'
    },
  ],
});

export const jost = Jost({
  subsets: ['cyrillic'],
  weight: ['500', '600', '700', '900']
});