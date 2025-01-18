/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-shape": "72% 28% 73% 27% / 29% 72% 28% 71%",
      },
    },
  },
  plugins: [],
};
