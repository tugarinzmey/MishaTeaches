const scss = require('rollup-plugin-scss');

export default {
    input: "./src/index.js",
    output: {
      file: "./bundle/main.min.js",
      format: "esm", 
    },
    plugins: [
      scss({
        output: "bundle.css",
        include:  ['/**/*.css', '/**/*.scss', '/**/*.sass'],
        sourceMap: true,
        failOnError: true,
      }),
    ],
  };