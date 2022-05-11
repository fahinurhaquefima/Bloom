$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  });
 
  $('.portfolio_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left leftarrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right rightarrow"></i>',
    
   
  });
// =====================sticky menu================
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('#main_menu').addClass("sticky");
      }
      else{
        $('#main_menu').removeClass("sticky");
      }
    });