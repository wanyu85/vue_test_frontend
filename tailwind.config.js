/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#141414',
        customGray: '#1c1c1c',
        customMenuGray: '#262626',
        customGreen: '#4E6868',
        customBlue: '#013780',
        customPrimary: 'var(--primary)',
        customPrimaryBg: 'var(--primary-bg)',
        customFocusColor: 'var(--focus-color)',
        customFocusBg: 'var(--focus-bg)',
        customBtnBg: 'var(--btn-bg)',
      }
    },
  },
  plugins: [],
}
