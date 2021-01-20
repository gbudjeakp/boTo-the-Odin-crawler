const axios = require('axios')
// Cheerio helps us to access the html element on the page we are scraping.
const cheerio = require('cheerio')

const url = 'https://www.theodinproject.com/home'

// Using async as it allows us to await the response from the server/api
async function scrapeOdin () {
  const html = await axios.get(url)
  const $ = cheerio.load(html.data)
  // The returned data is stored in an array. This is so that say we wanted to display this in a front-end application we were building, we could just, map through the array and display whatever we wanted to display
  const data = []

  // The data we wwanted from the website is contained in a container class div. So we select the div using cheerio then loop through the elements inside the div and pick out the title, link and image data which is then store in our empty array.
  $('.container a').each((i, el) => {
    data.push({
      title: $(el).text(),
      link: $(el).attr('href'),
      image: $(el).find('img').attr('src')
    })
  })
  console.log('Scrapping complete')
}

scrapeOdin()
