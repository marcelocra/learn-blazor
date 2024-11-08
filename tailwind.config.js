/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Components/**/*.{razor,html,cshtml,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
