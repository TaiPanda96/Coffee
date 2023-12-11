import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class

  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6F6E7',
          100: '#E8E8D1',
          200: '#BBCC97',
          300: '#86AF6F',
          400: '#559352',
          500: '#3B774B',
          600: '#6f4e37',
          700: '#1A3E3B',
          800: '#112C2A',
          900: '#091918',
          1000: '#800015',
          1100: '#FAFAFA',
          1200: '#bda27e',
          1300: '#d2b48c',
          1400: '#3A3226',
        },
      },
      fontFamily: {
        sans: [
          'trap',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
}
export default config
