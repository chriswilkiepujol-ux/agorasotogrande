import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b0b0d', night: '#141416', smoke: '#1d1d21', bone: '#f3efe7', sand: '#d9cdb8', ember: '#e8623a', copper: '#c9865b' },
      fontFamily: { display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'], body: ['Manrope', 'system-ui', 'sans-serif'], script: ['"Pinyon Script"', 'cursive'] },
    },
  },
  plugins: [],
};
export default config;
