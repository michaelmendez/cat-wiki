/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#291507',
          100: '#544439',
        },
      },
    },
  },
  plugins: [],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
};
