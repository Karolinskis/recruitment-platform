
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.vue"],

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{js,jsx}",
    "./views/**/*.{js,jsx}",
  ],

  theme: {
    // ...
  },
  plugins: [

    // ...

    require("tailwindcss"),
    require("autoprefixer"),
    // Add other PostCSS plugins as needed

  ],
};
