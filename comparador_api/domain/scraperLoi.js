const scraperObject = {
  url: "https://loi.com.uy/",
  async scraper(browser, search) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // await page.waitFor(2000);
    await page.type(".form-control", search);
    await page.waitForSelector("#pe_confirm");
    await page.click("#pe_close_btn");
    // await form.evaluate(form => form.submit());
    await page.click("#contenedor-boton-buscador button");
  },
};

module.exports = scraperObject;
