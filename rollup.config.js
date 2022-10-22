import scss from "rollup-plugin-scss";

export default {
  input: "./index.js",
  output: {
    file: "./dist/rollupmain.min.js",
    format: "esm",
  },
  plugins: [
    scss({
      output: "./dist/rollupstyle.css",
      failOnError: true,
      runtime: require("sass"),
    }),
  ],
};