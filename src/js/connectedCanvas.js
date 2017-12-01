var canvasDots = function(colorOfNetwork = '#000', backgroundColor = '#fff', textColor = '#000') {

  let body = document.querySelector('body');
  body.style.color = textColor;

  if (document.getElementById('wrap')) { // If the div with dots exists
    // Get the div with dots
    var colorfulDiv = document.getElementById('wrap');

    // Delete div with dots
    document.querySelector('body').removeChild(colorfulDiv);
  }

  // If the element canvas#canvas does not already exist
  if (!(document.getElementById('canvas'))) {
    var canvas = document.createElement('canvas'), // Creates a new canvas element
    ctx = canvas.getContext('2d');

    // Define details for the canvas element
    canvas.id = 'canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    canvas.style.background = backgroundColor;

    // Add the canvas element to the DOM
    document.querySelector('body').appendChild(canvas);

    var colorDot = color = colorOfNetwork;

    // Detail for the look of the dots and lines
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };

    var dots = {
      nb: 350,
      distance: 60,
      d_radius: 100,
      array: []
    };

    function Dot(){
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -.5 + Math.random();
      this.vy = -.5 + Math.random();

      this.radius = Math.random();
    }

    Dot.prototype = {
      create: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },

      animate: function(){
        for(i = 0; i < dots.nb; i++){

          var dot = dots.array[i];

          if(dot.y < 0 || dot.y > canvas.height){
            dot.vx = dot.vx;
            dot.vy = - dot.vy;
          }
          else if(dot.x < 0 || dot.x > canvas.width){
            dot.vx = - dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function(){
        for(i = 0; i < dots.nb; i++){
          for(j = 0; j < dots.nb; j++){
            i_dot = dots.array[i];
            j_dot = dots.array[j];

            if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
              if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    };

    function createDots(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(i = 0; i < dots.nb; i++){
        dots.array.push(new Dot());
        dot = dots.array[i];

        dot.create();
      }

      dot.line();
      dot.animate();
    }

    document.addEventListener('mousemove', function(parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
    });

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000/30); 

    window.addEventListener('resize', () => {
      // re-define details for the canvas element on resive
      let canvas = document.getElementById('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      colorDot = color = colorOfNetwork;
  
      // Detail for the look of the dots and lines
      ctx.fillStyle = colorDot;
      ctx.lineWidth = .1;
      ctx.strokeStyle = color;
    });
  }
};