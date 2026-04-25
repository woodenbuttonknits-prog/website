import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f4ee',
        sand: '#d8c8b2',
        moss: '#7b8e76',
        wood: '#b99777',
        ink: '#4f4a45'
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(130, 110, 90, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
