/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customPurple: {
          50: "#f3e8ff", // lightest
          100: "#e0ccff",
          200: "#c1a6ff",
          300: "#a380ff",
          400: "#8460ff",
          500: "#784cfb", // base color
          600: "#663be0",
          700: "#552bb5",
          800: "#441d8b",
          900: "#341260", // darkest
        },
      },
    },
  },
  plugins: [],
};
