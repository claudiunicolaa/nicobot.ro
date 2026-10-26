/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#4361EE', 50: '#EDF1FD', 100: '#DCE4FB', 200: '#BFCCF8', 300: '#9DB0FF', 400: '#6E86F3', 500: '#4361EE', 600: '#4361EE', 700: '#3450D4', 800: '#2A42B5', 900: '#213590' },
        navy: { DEFAULT: '#0F1D4A', 50: '#E8ECF7', 100: '#C7D0EA', 200: '#A9B5DA', 700: '#1A2B61', 800: '#142353', 900: '#0F1D4A', 950: '#0A1436' },
        ink: { 900: '#111A33', 700: '#3A4766', 500: '#5C6885', 400: '#8792AB' },
        clinical: { DEFAULT: '#F3F6FC', deep: '#EAF0F9' },
        line: { DEFAULT: '#DCE3F1', strong: '#C3CDE6' },
        sage: { 50: '#E6F4F1', 100: '#C8E8E1', 300: '#7FD1C3', 600: '#177B6E', 700: '#116B60' },
        warn: { 50: '#FFF4E0', 700: '#9A5B00' },
        danger: { 50: '#FEF0EE', 700: '#B42318' },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: { control: '10px', card: '16px', panel: '20px' },
      boxShadow: {
        hairline: '0 1px 2px 0 rgba(15,29,74,0.06)',
        panel: '0 1px 2px rgba(15,29,74,0.04), 0 12px 32px -12px rgba(15,29,74,0.18)',
        'panel-dark': '0 1px 2px rgba(0,0,0,0.2), 0 16px 40px -16px rgba(0,0,0,0.5)',
      },
      maxWidth: { site: '1200px', narrow: '44rem', prose: '65ch' },
      letterSpacing: { eyebrow: '0.12em' },
    },
  },
  plugins: [],
};
