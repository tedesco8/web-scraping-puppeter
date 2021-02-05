const scraperObject = {
  url: 'https://www.mercadolibre.com.uy/',
  async scraper(browser, search) {
    console.log("LLEGO")
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
    //Nos movemos a cada articulo y capturamos los datos
    const articles = []
    for(let enlace of enlaces) {
      let i = 0
      if (i === 3) { break; }
      await page.goto(enlace)
      await page.waitForSelector('.ui-pdp-container__col')
      const article = await page.evaluate(() => {
        const tmp = {}
        tmp.title = document.querySelector('.ui-pdp-title').innerText
        let str = document.querySelector('.ui-pdp-price').innerText
        // let newStr = str.slice(0,1)
        // let newStr2 = str.slice(4)
        // str = `${newStr} ${newStr2}`
        tmp.price = str
        return tmp
      })
      articles.push(article)
      i = i + 1
    }
    console.log(articles)
    //browser.close()
  },
};

module.exports = scraperObject;
