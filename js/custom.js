$(function(){
//video
$('.venobox').venobox();


//counter
$('.counter').counterUp({
    delay: 50,
    time: 5000
});

//blog slider


$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
  });



$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop:0},1000);

});

$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
      if(scrolling > 300){
          $('.navbar').addClass('bg');
      }
      else{
      $('.navbar').removeClass('bg');
  
      }
      // back to top button 
      if(scrolling > 200){
          $('.back-to-top').fadeIn(500);
      }
      else{
          $('.back-to-top').fadeOut(500);
      }
  });



  var html_body = $('html, body');
  $('.navbar a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 90
              }, 1500);
              return false;
          }
      }
  });


  $(window).on('load', function(){
      $('.preloader').delay(1500).fadeOut(500);
  });




});

