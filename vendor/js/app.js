let quote = '';
let author = '';

function loadJSON(callback) {

  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './src/data/quotes.json', true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function newQuote() {
  loadJSON(response => {
    // Parse JSON string into object
    let quotes = JSON.parse(response);
    let randomNumber = Math.random() * (Object.keys(quotes).length - 1);
    randomNumber = Math.round(randomNumber);
    quote = quotes[randomNumber].quote;
    author = quotes[randomNumber].author;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
  });
}

let applyTheme = () => {
  let theme = localStorage.getItem('theme');

  if (theme === 'bubbles') {
    colorfulBubbles();
  } else if (theme === 'clear') {
    clear();
  } else if (theme === 'connected' || !theme) {
    canvasDots();
  }
};

let setTheme = function (theme) {
  if (theme === 'bubbles') {
    localStorage.setItem('theme', theme);
  } else if (theme === 'clear') {
    localStorage.setItem('theme', theme);
  } else if (theme === 'connected') {
    localStorage.setItem('theme', theme);
  }

  applyTheme();
};

window.onload = applyTheme();
window.onload = newQuote();