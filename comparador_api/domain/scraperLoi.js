const scraperObject = {
  url: "https://loi.com.uy/",
  async scraper(browser, search) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.type(".form-control", search);
    // await page.click("#contenedor-boton-buscador button");
  },
};

module.exports = scraperObject;
