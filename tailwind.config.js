/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      yellow: "#fef100",
      black: "#000000",
    },
    fontFamily: {
      display: "var(--bebas-neue)",
      body: "var(--outfit)",
    },
  },
  plugins: [],
};
