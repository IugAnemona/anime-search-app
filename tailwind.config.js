/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#555",
        border: "#ccc",
        focus: "#007bff",
        "primary-color": "#001220",
        "color-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
