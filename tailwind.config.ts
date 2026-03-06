import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        bg: '#07080A',
        surface: '#0F1115',
        border: '#1E2028',
        accent: '#FF4D00',
        cyan: '#00E5FF',
        muted: '#4A4F5C',
        text: '#E8E9EC',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'flicker': 'flicker 4s infinite',
        'scan': 'scan 6s linear infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.4' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.2' },
          '99%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
