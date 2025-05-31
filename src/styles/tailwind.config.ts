import type { Config } from 'tailwindcss'
// @ts-expect-error: Tailwind plugin has no types, but is valid JS
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        oppa: {
          primary: '#1E40AF',       // Deep blue from OPPA's branding
          secondary: '#3B82F6',     // Vibrant blue for accents
          accent: '#F59E0B',        // Gold for highlights
          dark: '#1F2937',          // Dark gray for text
          light: '#F8FAFC',         // Off-white backgrounds
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      backgroundImage: {
        'circuit-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866...'%3E%3C/svg%3E")`,
      },
      animation: {
        'scroll-circuit': 'scrollCircuit 120s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
      boxShadow: {
        'oppa-lg': '0 10px 25px -5px rgba(30, 64, 175, 0.15)',
      },
    },
  },
  plugins: [typography, aspectRatio],
}

export default config
