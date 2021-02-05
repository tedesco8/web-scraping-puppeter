const browserObject = require("../config/browser");
const scraperPage = require("../services/scraper");

export default {
  query: async (req, res, next) => {
    try {
      let search = req.body.busqueda;
      //Start the browser and create a browser instance
      let browserInstance = browserObject.startBrowser();

      // Pass the browser instance to the scraper service
      let result = await scraperPage(browserInstance, search);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
