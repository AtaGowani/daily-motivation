let clear = (textColor = '#000', backgroundColor = '#fff') => {

  let body = document.querySelector('body');
  body.style.color = textColor;
  body.style.background = backgroundColor;

  if (document.querySelector('canvas')) { // If there is an existing canvas element
    let canvas = document.querySelector('canvas');

    // Removes the canvas to start over
    document.querySelector('body').removeChild(canvas);
  }

  if (document.getElementById('wrap')) { // If the div with dots exists

    // Get the div with dots
    let colorfulDiv = document.getElementById('wrap');

    // Delete div with dots
    document.querySelector('body').removeChild(colorfulDiv);
  }
}