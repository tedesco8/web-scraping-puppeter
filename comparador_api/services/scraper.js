const scraperLoi = require('../domain/scraperLoi');
const scraperMeli = require('../domain/scraperMeli');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await scraperLoi.scraper(browser);
        await scraperMeli.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)