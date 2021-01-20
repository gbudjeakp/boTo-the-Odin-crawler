# boTo-the-Odin-crawler
A simple web scrapper that scrapes the odin project website returns the curriculum detail.

## How to start bot ##
Simple clone the repo, open it up in your editor of choice, then run 
`Yarn install` to get the node_modules needed. Then start bot using `node app.js`.
`nodemon` was installed as a dependency to make life easier for anyone who wants to alter the code base for their personal use.


### Possible use case ###
I gues if you were trying to learn web developement and just wanted to get straight to the curriculum, you could just use this.
The code can also be altered to scrape other websites of choice. You could even use this to scrape the twitter API and get 
information when ever your close friends tweet or you gain a new follower. You could scrape amazon and save the data you scrape to 
a database and create some kind of data visualisation dashboard. If you really like scraping data then check out this node module 
[Crawler](https://github.com/bda-research/node-crawler). This module really helps reduce the amount of code you have to type and simplifies the scraping process. You could easily create search queries for sites that do not have them and search up words on the site. 

### What I would have loved to do ###
Wanted to scrape google with this bot but after doing some research, it did not seem like a good idea. Though they have restored their query search API,
the plan prices and the restrictions on API use just made using it seem tedious.:disappointed:
