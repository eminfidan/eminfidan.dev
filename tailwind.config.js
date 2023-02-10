/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1290px',
    },
    colors: {
      primary: {
        DEFAULT: '#FF014F',
      },
      secondary: {
        DEFAULT: '#4BC9F0',
      },
      neutrals: {
        black: {
          DEFAULT: '#141416',
          100: '#23262F',
          200: '#353945',
        },
        gray: {
          DEFAULT: '#777E91',
          100: '#B1B5C4',
          200: '#E6E8EC',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F4F5F6',
          200: '#FCFCFD',
        }
      }
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      36: '36px',
      42: '42px',
      60: '60px',
      64: '64px',
    },
    lineHeight: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      42: '42px',
      60: '60px',
      64: '64px',
    },
    fontWeight: {
      light: 300,
      semibold: 600,
      bold: 700,
    },
    borderRadius: {
      none: '0',
      sm: '5px',
      DEFAULT: '10px',
      lg: '15px',
      xl: '25px',
      '2xl': '90px',
      full: '9999px',
    },
    boxShadow: {
      sm: '0px 5px 15px 0px rgba(97, 0, 0, 0.2)',
      md: '0px 10px 15px 0px rgba(97, 0, 0, 0.2)',
      lg: '0px 10px 30px 0px rgba(97, 0, 0, 0.2)',
    },
    keyframes: {
      'flip': {
        '0%': {
          'transform': 'rotateY(180deg)'
        },
        '100%': {
          'transform': 'rotateY(-180deg)'
        }
      },
    },
    animation: {
      'flip': 'flip 2s infinite',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
    },
  },
  plugins: [],
};