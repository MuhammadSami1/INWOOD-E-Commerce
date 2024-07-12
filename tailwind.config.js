/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomColor: "#337a46",
        CustomColor1: "#176d2d",
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
