const browserObject = require("../config/browser");

export default {
  query: async (req, res, next) => {
    try {
      //Start the browser and create a browser instance
      let browserInstance = browserObject.startBrowser();

      // Pass the browser instance to the scraper service
      scraperPage(browserInstance);
      res.status(200);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
