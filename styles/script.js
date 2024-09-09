// scripts

//mobile nav menu


var hamburger = document.querySelector('.nav-mobile');
var menu = document.querySelector('.menu');

// hamburger.addEventListener('click', function() {
//     if (menu.style.display === 'none') {
//         menu.style.display = 'flex';
//     } else {
//         menu.style.display = 'none';
//     }

hamburger.addEventListener('click', function() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }

});

//scroll to element

$(document).ready(function(){
    $(".arrow-link").click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1200, 'easeInOutExpo');
});
  });
  
  $(document).ready(function() {
    $(document).on('keydown', function(e) {
      if (e.key === 'w' || e.keyCode === 87) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(window).scrollTop() + $(window).height()
        }, 2000, 'easeInOutExpo');
      }
    });
  });
  
  