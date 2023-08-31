//head
function typeEffect(element, speed) {
      var text = element.innerHTML;
      element.innerHTML = "";

      var i = 0;
      var timer = setInterval(function() {
      if (i < text.length) {
            element.append(text.charAt(i));
            i++;
      } else {
            clearInterval(timer);
      }
      }, speed);
}

// application
var speed = 30;
var h1 = document.querySelector('.head_title');
var p = document.querySelector('.head_content');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function(){
      p.style.display = "inline-block";
      typeEffect(p, speed);
}, delay);



//menu
// let isScrolling;
// const navbar = document.querySelector('.menu');

// window.addEventListener('scroll', function() {
      
//       window.clearTimeout(isScrolling);

//       isScrolling = setTimeout(function() {
//       navbar.classList.remove('shrink');
//       }, 250);

//       navbar.classList.add('shrink');
// });