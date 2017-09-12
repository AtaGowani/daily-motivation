var quote = ''
var author = ''

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest()
  xobj.overrideMimeType("application/json")
  xobj.open('GET', './src/data/quotes.json', true)
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText)
        }
  }
  xobj.send(null)
}

function newQuote() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var quotes = JSON.parse(response)
    var randomNumber = Math.random() * (Object.keys(quotes).length - 1)
    randomNumber = Math.round(randomNumber)
    quote = quotes[randomNumber].quote
    author = quotes[randomNumber].author
    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = author
  })
}

newQuote()