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




});

