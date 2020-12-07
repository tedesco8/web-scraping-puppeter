const scraperObject = {
    url: 'https://www.mercadolibre.com.uy/',
    async scraper(browser, search){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.type(".nav-search-input", search);
        // await page.click(".nav-search-btn button");
    }
}

module.exports = scraperObject;