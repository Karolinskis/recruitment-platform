// process-css.js
const fs = require("fs");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const inputPath = "./src/input.css";
const outputPath = "./dist/output.css";

const inputCss = fs.readFileSync(inputPath, "utf8");

postcss([tailwindcss, autoprefixer])
  .process(inputCss, { from: inputPath, to: outputPath })
  .then((result) => {
    fs.writeFileSync(outputPath, result.css);
  })
  .catch((error) => {
    console.error(error);
  });
