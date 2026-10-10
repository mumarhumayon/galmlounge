/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glam-bg': '#FAF7F2',
        'glam-secondary': '#F3EDE5',
        'glam-tertiary': '#EAE1D5',
        'glam-border': '#E4D9CC',
        'glam-text': '#382F2D',
        'glam-muted': '#786C68',
        'glam-rose': '#B97878',
        'glam-rose-hover': '#A46565',
        'glam-gold': '#C6A15B',
        'glam-dark': '#241E1D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glam-sm': '0 4px 20px rgba(56, 47, 45, 0.04)',
        'glam-md': '0 8px 30px rgba(56, 47, 45, 0.08)',
        'glam-lg': '0 12px 40px rgba(56, 47, 45, 0.12)',
        'glam-rose': '0 8px 25px rgba(185, 120, 120, 0.25)',
      }
    },
  },
  plugins: [],
}
