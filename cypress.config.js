const { defineConfig } = require("cypress");

module.exports = defineConfig({

  trashAssetsBeforeRuns: true, //whether cypress will trash assets within the downloadfolder, screenshotsfolder, and videosfolder before test run with cypress run.

  //Folders/ Files
  downloadsFolder : 'cypress/downloads',
  fixturesFolder : 'cypress/fixtures',

  //Screenshots
  screenshotsFolder : 'cypress/screenshots',
  screenshotOnRunFailure : true,     //whether cypress will take a screenshot when a test fails during cypress run

  //Videos
  video : true,                     //Whether cypress will capture a video of the tests run with cypress run.
  videosFolder : 'cypress/videos',

  //Viewport
  viewportHeight : 1080,
  viewportWidth: 1920, 

  //Timeouts
  defaultCommandTimeout : 5000, //Time, in milliseconds, to wait untill most DOM based commands are considered timed out.

  retries : {
    // configure retry attempts for 'cypress run'
    // default is 0
    runMode: 1,
    // configure retry attempts for 'cypress open'
    // default is 0
    openMode: 1
  },

  e2e: {

    "baseUrl": "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
    "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    "supportFile": "cypress/support/e2e.{js,jsx,ts,tsx}",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here  
    },
  },
});
