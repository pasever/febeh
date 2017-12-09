const $ = require("jquery");
const Nightmare = require('nightmare');		
const nightmare = Nightmare({ show: true });


nightmare
  .goto("http://google.com")
  .type("#lst-ib", "craigslist charlotte nc")
  //.specialKeyPress('Enter')
  .click("#gbqfbb")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()  
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });