const scraperObject = {
    url: 'https://www.mercadolibre.com.uy/',
    async scraper(browser, search){
        let page = await browser.newPage();
        let results = 0;
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.type(".nav-search-input", search);
        await page.click(".nav-search-btn");
        await page.waitForSelector(".ui-search-results");
        const items = await page.evaluate(() => {
            const elements = document.querySelectorAll('.ui-search-layout__item');
            const objs = [];
            for(let element in elements) {
                objs.push({element});
            }
            return objs
        });
        results = items.length;
        console.log(results)
    }
}

module.exports = scraperObject;