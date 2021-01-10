const scraperObject = {
  url: 'https://www.mercadolibre.com.uy/',
  async scraper(browser, search) {
    //Obtenemos la instancia de una nueva pagina
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    //Navegamos a la url
    await page.goto(this.url);
    //Escribimos en el selector nuestra busqueda
    await page.type('.nav-search-input', search);
    //Presionamos el boton de buscar
    await page.click('.nav-search-btn');
    //Espera la carga del selector
    await page.waitForSelector('.ui-search-layout__item'); //Atributos entre corchetes '[ui-search-layout__item]'
    //waitFor(300) esperamos tres segundos

    //Capturamos enlaces
    const enlaces = await page.evaluate(() => {

      const nodes = document.getElementsByClassName("ui-search-result__image") 
      const arrNodes=Array.from(nodes)
      const links = arrNodes.map(n=n=>n.firstElementChild.href)
      
      return links;
    });
    console.log(enlaces.length)
    console.log(enlaces);
    //browser.close()
  },
};

module.exports = scraperObject;
