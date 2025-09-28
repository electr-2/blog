/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#363c70",
        accent: "#f5dc3d",
        "accent-dark": "#000d8a",
        black: "rgb(15, 18, 25)",
        gray: "rgb(96, 115, 159)",
        "gray-light": "rgb(229, 233, 240)",
        "gray-dark": "rgb(34, 41, 57)",
      },
      backgroundImage: {
        "gray-gradient": "linear-gradient(rgba(229, 233, 240, 0.5), #fff)",
      },
    },
  },
  plugins: [],
};
