const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/tw-elements/js/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColorOliver: '#c4a62c',
        customColorLilac: '#c0adc0',
        customColorPoppy: '#e59677',
        customColorFlamingo: '#efd1b5',
        customColorBabyBlue: '#CBCADC',
      },
    },
  },
  darkMode: "class",
  plugins: [
    flowbite.plugin(),
    [require("tw-elements/plugin.cjs")]
  ],
};