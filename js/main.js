(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

$('.product-list').slick({
	slidesToShow: 3,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
  cssEase: 'linear',
	prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fas fa-chevron-left"></i></div></div>',
  nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fas fa-chevron-right"></i></div></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

