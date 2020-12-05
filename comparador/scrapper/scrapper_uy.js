const puppeteer = require('puppeteer')
const jobUrl = 'https://loi.com.uy/'
let page
let browser
let cardArr = []
class Jobs {
  // We will add 3 methods here

  // Initializes and create puppeteer instance
  static async init() {
    browser = await puppeteer.launch({
      // headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu',
      ],
    })

    page = await browser.newPage()
    await Promise.race([
      await page.goto(jobUrl, { waitUntil: 'networkidle2' }).catch((err) => {
        console.log(err)
      }),
      await page.waitForSelector('.algolia-autocomplete').catch((err) => {
        console.log(err)
      }),
    ])
  }

  // Visits the page, retrieves the job
  static async resolver() {
    await this.init()
    await page.type('#buscador', 'computadoras')
    await page.click('#contenedor-boton-buscador button')
    await page.waitForSelector('.ais-hits--item').catch(() => {})

    const jobURLs = await page.evaluate(() => {
      const cards = document.querySelectorAll('.resultado-de-busqueda')
      cardArr = Array.from(cards)
      const cardLinks = []
      cardArr.map((card) => {
        const cardTitle = card.querySelector(
          '.informacion-resultado-de-busqueda h2 a'
        )
        const cardDesc = card.querySelector('.resultado-info-descripcion')
        // const cardCompany = card.querySelector(
        //   'a[data-cy="search-result-company-name"]'
        // )
        const cardDate = card.querySelector('.posted-date')
        const { text } = cardTitle
        const { host } = cardTitle
        const { protocol } = cardTitle
        const pathName = cardTitle.pathname
        const query = cardTitle.search
        const titleURL = protocol + '//' + host + pathName + query
        // const company = cardCompany.textContent
        const company = 'Loi, la Oferta Irresistible'
        cardLinks.push({
          titleText: text,
          titleURLHost: host,
          titleURLPathname: pathName,
          titleURLSearchQuery: query,
          titleURL: titleURL,
          titleDesc: cardDesc.innerHTML,
          titleCompany: company,
          titleDate: cardDate.textContent,
        })
      })
      return cardLinks
    })
    return jobURLs
  }

  // Converts the job to array
  static async getJobs() {
    const jobs = await this.resolver()
    await browser.close()
    const data = {}
    data.jobs = jobs
    data.total_jobs = jobs.length
    return data
  }
}
export default Jobs
