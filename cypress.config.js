const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1150, // Largura da viewport em pixels
  viewportHeight: 950, // Altura da viewport em pixels
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});