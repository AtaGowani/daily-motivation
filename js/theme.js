function setTheme(userPreference){
  var colorDot;
  var colorLine;
  var elements, i, len; //to hold the elements to be retrived from classes

  switch(userPreference)
  {
    case "Theme1":
      document.body.style.background = '#0F2043';
      document.getElementById('blockQ').style.color = '#D5A458';
      document.getElementById('Theme1').style.display = 'none';
      //document.a.style.color = '#D5A458';
      elements = document.getElementsByClassName('main-menu');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.background = '#0F2043';
        elements[i].style.color = '#D5A458';
      }
      elements = document.getElementsByClassName('fa-gear');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#D5A458';
      }
      elements = document.getElementsByClassName('linkColor');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#AD8343';
      }
      document.getElementById('footer').style.color = '#D5A458';
      colorDot = '#79CEDC';
      colorLine = '#79CEDC';
      
      break;

    case "Theme2":
      document.body.style.background = '#F2F2F2';
      document.getElementById('blockQ').style.color = '#561210';
      document.getElementById('Theme2').style.display = 'none';
      //document.a.style.color = '#561210';
      elements = document.getElementsByClassName('main-menu');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.background = '#F2F2F2';
        elements[i].style.color = '#561210';
      }
      elements = document.getElementsByClassName('fa-gear');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#561210';
      }
      elements = document.getElementsByClassName('linkColor');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#300908';
      }
      document.getElementById('footer').style.color = '#561210';
      colorDot = '#EF9121';
      colorLine = '#EF9121';
      
      break;

    case "Theme3":
      document.body.style.background = '#3F2B2C'
      document.getElementById('blockQ').style.color = '#EC3047';
      document.getElementById('Theme3').style.display = 'none';
      //document.a.style.color = '#EC3047';
      elements = document.getElementsByClassName('main-menu');
      //console.log(document.getElementById('newID'));
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.background = '#3F2B2C';
        elements[i].style.color = '#EC3047';
      }
      elements = document.getElementsByClassName('fa-gear');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#EC3047';
      }
      elements = document.getElementsByClassName('linkColor');
      for(i = 0, len = elements.length; i < len; i++)
      {
        elements[i].style.color = '#B02536';
      }
      document.getElementById('footer').style.color = '#EC3047';
      colorDot = '#ACA287';
      colorLine = '#ACA287';
      
      break;

    default:
      document.getElementById('Default').style.display = 'none';
      colorLine = '#CECECE';
      colorDot = '#CECECE';
  }
  canvasDots(colorLine, colorDot);
}

function setCookie(theme)
{
  console.log(theme);
  Cookies.set('Theme', theme, {expires: (365 * 100)}); //setting a ridiculously long expiration time
  window.location.reload(); //changes the current quote as well
}

document.addEventListener('DOMContentLoaded', function() 
{
  var link = document.getElementById('Theme1');
  // onClick's logic below:
  link.addEventListener('click', function() 
  {
    setCookie('Theme1');
  });
});

document.addEventListener('DOMContentLoaded', function() 
{
  var link = document.getElementById('Theme2');
  // onClick's logic below:
  link.addEventListener('click', function() {
    setCookie('Theme2');
  });
});

document.addEventListener('DOMContentLoaded', function() 
{
  var link = document.getElementById('Theme3');
  // onClick's logic below:
  link.addEventListener('click', function() {
    setCookie('Theme3');
  });
});

document.addEventListener('DOMContentLoaded', function() 
{
  var link = document.getElementById('Default');
  // onClick's logic below:
  link.addEventListener('click', function() 
  {
    setCookie('Default');
  });
});

window.onload = function()
{
  var x = Cookies.get('Theme');; //variable to hold the cookie value
  console.log("cookie" + x);
  setTheme(x);
}
