$(document).ready(function() {
  var overlay = $('.overlay'),
      modal = $('.modal-window'),
      body = $('body'),
      sign = $('#sign-in'),
      modalHeader = $('.modal-start-header'),
      content = $('.modal-content-box'),
      close = $('.modal-close');

  content.hide();
  $('[data-call]').on('click', function() {
    $('.modal-content-box[data-content = '+$(this).attr('data-call')+']').show();
    overlay.addClass('overlay_active');
    modal.addClass('modal-window_active');
    modalHeader.text($(this).attr('data-header'));
    body.css('overflow-y', 'hidden');
  });
  close.on('click', function() {
    overlay.removeClass('overlay_active');
    modal.removeClass('modal-window_active');
    content.hide();
    body.css('overflow-y', 'auto');
  });
  overlay.click(function() {
    overlay.removeClass('overlay_active');
    modal.removeClass('modal-window_active');
    content.hide();
    body.css('overflow-y', 'auto');
  });
  /*Head Slider*/
  $('.menu-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../img/icons/right-arrow.svg" alt="←" /></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../img/icons/right-arrow.svg" alt="→" /></button>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*Soon slider*/
   $('.left-top-soon-slider').slick({
    dots: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../img/icons/right-arrow.svg" alt="←" /></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../img/icons/right-arrow.svg" alt="→" /></button>',
    slidesToShow: 1,
  });
   /*/Sliders*/
});