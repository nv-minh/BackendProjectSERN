/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      overline: {
        2: 'display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;',
      },
      width: {
        1100: '1100px',
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#1266dd',
        secondary2: '#f73859',
        blue: {
          100: '#0071c2 !important',
        },
      },
      maxWidth: {
        600: '600px',
        1100: '1100px',
      },
    },
  },
  plugins: [],
};
