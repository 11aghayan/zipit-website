import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oxford: '#002447',
        amazon: '#34685c',
        customOrange: '#ff8e00',
        saffron: '#efbf38'
  
      },
      fontFamily: {
        milne: ['var(--font-milne)']
      }
    },
  },
  plugins: [],
};

export default config;
