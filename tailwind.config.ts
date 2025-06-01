import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/config/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        oppa: {
          primary: '#1E40AF',
          secondary: '#3B82F6',
          accent: '#F59E0B',
          dark: '#1F2937',
          light: '#F8FAFC',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      backgroundImage: {
        'circuit-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866...'%3E%3C/svg%3E")`,
      },
      animation: {
        'scroll-circuit': 'scrollCircuit 120s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spiral-fade': 'spiralFade 10s ease-in-out infinite',
      },
      keyframes: {
        scrollCircuit: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 1000px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spiralFade: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        }
      },
      boxShadow: {
        'oppa-lg': '0 10px 25px -5px rgba(30, 64, 175, 0.15)',
      },
    },
  },
  plugins: [typography, aspectRatio],
};

export default config;