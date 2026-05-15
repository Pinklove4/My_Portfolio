/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0b1622',
          900: '#102335',
          800: '#1a3350',
          700: '#1e4a6a',
          600: '#245578',
        },
        brand: {
          light: '#e8f2fc',
          muted: '#b9cde0',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-source)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-subtle': `linear-gradient(rgba(94,234,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.05) 1px, transparent 1px)`,
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
