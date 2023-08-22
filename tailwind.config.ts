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
        'bordershadow': '4px 6px 3px 0 rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
} 
export default config
