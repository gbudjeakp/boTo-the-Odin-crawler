const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.theodinproject.com/home'

async function scrapeOdin () {
  const html = await axios.get(url)
  const $ = await cheerio.load(html.data)
  const data = []

  $('.container a').each((i, el) => {
    data.push({
      title: $(el).text(),
      link: $(el).attr('href'),
      image: $(el).find('img').attr('src')
    })
  })
  console.log(data)
}

scrapeOdin()
