import { defineConfig } from "cypress";

/**
 * Decibel Tribe — Cypress learning lab
 * SUT: https://www.decibeltribe.com (override with CYPRESS_BASE_URL)
 * Students: edit specs only. Do not change the app repo.
 */
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Optional: app must be instrumented for coverage to do anything useful
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const codeCoverageTask = require("@cypress/code-coverage/task");
        codeCoverageTask(on, config);
      } catch {
        // coverage plugin optional for learners
      }
      return config;
    },
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: process.env.CYPRESS_BASE_URL || "https://www.decibeltribe.com/",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,
  },
});
