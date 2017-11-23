function colorfulBubbles() {
  
  var canvas = document.querySelector('canvas');
  var bubblesArea = document.getElementById('wrap');

  console.log(canvas);

  if (canvas) { // If there is an existing canvas element
    // Removes the canvas to start over
    document.querySelector('body').removeChild(canvas);
  }

  // If the color div element does not already exist
  if (!bubblesArea) {
    var colorfulSpace = document.createElement('div');
    colorfulSpace.id = 'wrap';
  
    var body = document.querySelector('body');
    var bubblesHolder = document.createDocumentFragment();

    // Create the div that will be filled with the colorful balls
    body.appendChild(colorfulSpace);
  
    var mousePos = {};
    
    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min + 1)) + min;
    }
    
    window.addEventListener('mousemove', function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
  
    window.addEventListener('mousemove', function() {
      if(mousePos.x > 0 && mousePos.y > 0){
        
        var range = 50,
            color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");",
            sizeInt = getRandomInt(10, 50),
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;"
        var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"
        var style = left+top+color+size
  
        var ball = document.createElement('div');
        ball.classList = 'ball';
        ball.style = style;
  
        bubblesHolder.appendChild(ball);
        document.getElementById('wrap').appendChild(bubblesHolder);
      }
    });
  }
}