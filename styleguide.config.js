var path = require("path");

module.exports = {
  require: [path.join(__dirname, "src/styleguide/styleguide.scss")],
  components: "src/components/**/*.{jsx,ts,tsx}",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper")
  }
};
