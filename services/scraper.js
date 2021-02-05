const scraperLoi = require('../domain/scraperLoi');
const scraperMeli = require('../domain/scraperMeli');
async function scrapeAll(browserInstance, search){
    let browser;
    try{
        browser = await browserInstance;
        await scraperLoi.scraper(browser, search);
        await scraperMeli.scraper(browser, search);
        // browser.close()

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, search) => scrapeAll(browserInstance, search)