import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottomshadow': '4px 6px 3px 0 rgba(0,0,0,0.4),0px 10px 15px -3px rgba(0,0,0,0.4)',
        'cardshadow': 'inset 0 0 0 .1rem rgb(105, 105, 105), inset 0 0 3rem rgba(0,0,0,0.3), inset 0 0 .5rem 0.75rem rgba(150,150,150,.25)',
      }
    },
  },
  plugins: [],
} 
export default config
