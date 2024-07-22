/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/img/drone1.jpg')",
        "hero-pattern1": "url('src/img/drone2.jpg')",
        "hero-pattern2": "url('src/img/drone3.jpg')",
      },
    },
  },
  plugins: [],
};
