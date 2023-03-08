function checkElementLocation() {
  var $window = $(window);
  var bottom_of_window = $window.scrollTop() + $window.height();

  $('.probootstrap-animate').each(function(i) {
    var $that = $(this);
    var bottom_of_object = $that.position().top + $that.outerHeight();

    //if element is in viewport, add the animate class
    if (bottom_of_window > bottom_of_object) {
      $(this).addClass('probootstrap-animated fadeIn');
    }
  });

  $('.probootstrap-animate-fadeup').each(function(i) {
    var $that = $(this);
    var bottom_of_object = $that.position().top + $that.outerHeight();

    //if element is in viewport, add the animate class
    if (bottom_of_window > bottom_of_object) {
      $(this).removeClass('d-none').addClass('animate__animated animate__fadeInUp');
    }
  });

  
}
// if in viewport, show the animation
checkElementLocation();

$(window).on('scroll', function() {
  checkElementLocation();
});





const animatedUps = document.querySelectorAll('.animateUp');
const animatedLefts = document.querySelectorAll('.animateRight');


const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach((entry) => {
    
    if (!entry.isIntersecting) {
      return;
    } 
    //alert(entry.target.className);
    if (entry.target.className == 'animateUp') {

      // entry.target.classList.remove("animateUp");
       entry.target.classList.add('animate__animated','animate__fadeInUp', 'visible')
        
    }else if (entry.target.className == 'animateRight') {
        // entry.target.classList.remove('animateUp')
      entry.target.classList.add('animate__animated','animate__fadeInRight', 'visible')
    } 
  

  });
});

animatedUps.forEach(animatedUp => observer.observe(animatedUp));
animatedLefts.forEach(animatedLeft => observer.observe(animatedLeft));







const counters = document.querySelectorAll('.value');
const speed = 400;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

$(document).ready(function(){
  $('.btn').click(function(){
    $('.btn').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
    });
})
