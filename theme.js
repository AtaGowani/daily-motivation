function canvasDots(colorLine, colorDot) {
        var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');

        console.log(canvas);
        console.log(ctx);
        console.log(colorDot);
        console.log(colorLine);


        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = .1;
        ctx.strokeStyle = colorLine;

        var mousePosition = {
          x: 30 * canvas.width / 100,
          y: 30 * canvas.height / 100
        };

        var dots = {
          nb: 600,
          distance: 50,
          d_radius: 100,
          array: []
      };

      function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
      }

      Dot.prototype = {
      create: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },

      animate: function() {
        for (i = 0; i < dots.nb; i++) {

          var dot = dots.array[i];

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function() {
        for (i = 0; i < dots.nb; i++) {
          for (j = 0; j < dots.nb; j++) {
            i_dot = dots.array[i];
            j_dot = dots.array[j];

            if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
              if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
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

      function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        dot = dots.array[i];

        dot.create();
      }

      dot.line();
      dot.animate();
      }

      window.onmousemove = function(parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
      }

      mousePosition.x = window.innerWidth / 2;
      mousePosition.y = window.innerHeight / 2;

      setInterval(createDots, 1000 / 30);
      }

      function setCookie(theme){
          var themeCookie = theme;
          console.log(themeCookie);
          Cookies.set('Theme', themeCookie);
          window.location.reload(); //maybe not do this...it changes the current quote as well
        }

      

      function setTheme(userPreference){
        var colorDot;
        var colorLine;
        var elements, i, len; //to hold the elements to be retrived from classes

        switch(userPreference){
          case "Theme1":
            document.body.style.background = '#0F2043';
            document.getElementById('blockQ').style.color = '#D5A458';
            //document.a.style.color = '#D5A458';
            elements = document.getElementsByClassName('main-menu');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.background = '#0F2043';
              elements[i].style.color = '#D5A458';
            }
            elements = document.getElementsByClassName('fa-gear');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#D5A458';
            }
            elements = document.getElementsByClassName('linkColor');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#AD8343';
            }
            document.getElementById('footer').style.color = '#D5A458';
            colorDot = '#79CEDC';
            colorLine = '#79CEDC';
            
            break;

          case "Theme2":
            document.body.style.background = '#F2F2F2';
            document.getElementById('blockQ').style.color = '#561210';
            //document.a.style.color = '#561210';
            elements = document.getElementsByClassName('main-menu');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.background = '#F2F2F2';
              elements[i].style.color = '#561210';
            }
            elements = document.getElementsByClassName('fa-gear');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#561210';
            }
            elements = document.getElementsByClassName('linkColor');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#300908';
            }
            document.getElementById('footer').style.color = '#561210';
            colorDot = '#EF9121';
            colorLine = '#EF9121';
            
            break;

          case "Theme3":
            document.body.style.background = '#3F2B2C'
            document.getElementById('blockQ').style.color = '#EC3047';
            //document.a.style.color = '#EC3047';
            elements = document.getElementsByClassName('main-menu');
            //console.log(document.getElementById('newID'));
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.background = '#3F2B2C';
              elements[i].style.color = '#EC3047';
            }
            elements = document.getElementsByClassName('fa-gear');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#EC3047';
            }
            elements = document.getElementsByClassName('linkColor');
            for(i = 0, len = elements.length; i < len; i++){
              elements[i].style.color = '#B02536';
            }
            document.getElementById('footer').style.color = '#EC3047';
            colorDot = '#ACA287';
            colorLine = '#ACA287';
            
            break;

          default:
            colorLine = '#CECECE';
            colorDot = '#CECECE';
        }
        canvasDots(colorLine, colorDot);
      }


      //IN THE FUTURE FIND A EASIER WAY TO DO THIS!!
      document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('Theme1');
        // onClick's logic below:
        link.addEventListener('click', function() {
          setCookie('Theme1');
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('Theme2');
        // onClick's logic below:
        link.addEventListener('click', function() {
          setCookie('Theme2');
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('Theme3');
        // onClick's logic below:
        link.addEventListener('click', function() {
          setCookie('Theme3');
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('Default');
        // onClick's logic below:
        link.addEventListener('click', function() {
          setCookie('Default');
        });
      });

      window.onload = function(){
        var x = Cookies.get('Theme');; //variable to hold the cookie value
        console.log("cookie" + x);
        setTheme(x);
      }
