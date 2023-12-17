const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  plugins: {
    e2e: {
      setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber())
      },
    },
  },
  e2e: {
    specPattern: "cypress/features/*.feature",
  },
});
