/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColorOliver:'#AEA434',
        customColorLilac:'#D9ADD1',
        customColorPoppy:'#E26728',
        customColorFlamingo:'#F69593',
        customColorBabyBlue:'#CBCADC',
      },
    },
  },
  plugins: [],
};
