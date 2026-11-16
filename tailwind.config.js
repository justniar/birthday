/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          950: '#120c08',
          900: '#1c130e',
          850: '#241913',
          800: '#2f2119',
          700: '#3e2c22',
        },
        cardstock: {
          950: '#0e0e11',
          900: '#141417',
          850: '#19181d',
          800: '#222127',
          700: '#302f37',
        },
        kraft: {
          light: '#d2a679',
          DEFAULT: '#b88553',
          dark: '#936338',
          deep: '#734a26',
        },
        parchment: {
          DEFAULT: '#faf6f0',
          warm: '#f3ebd9',
          aged: '#e7d9c3',
          border: '#cfbc9f',
        },
        lilac: {
          50: '#faf5fb',
          100: '#f3e8f4',
          200: '#e5cde7',
          300: '#d8b4e2',
          400: '#c8a2c8',
          500: '#ad7cb0',
          600: '#8e5b92',
          700: '#6d4270',
        },
        twine: {
          pink: '#f4a6ba',
          white: '#ffffff',
        }
      },
      fontFamily: {
        calligraphy: ['"Alex Brush"', 'cursive'],
        handwritten: ['"Caveat"', 'cursive'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'polaroid': '0 12px 28px -6px rgba(0, 0, 0, 0.6), 0 4px 10px -2px rgba(0, 0, 0, 0.4)',
        'kraft': '2px 4px 12px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
