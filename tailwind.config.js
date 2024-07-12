/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomColor1: "#08545e",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"], // Enable fill for hover and focus states if needed
    },
  },
  plugins: [],
};
