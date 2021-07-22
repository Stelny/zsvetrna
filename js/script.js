$(document).ready(function(){
  $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });
    
    var partners = $('.partners__carousel');

    partners.owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          500:{
            items:4
          },
          991:{
              items:6
          },
      }
  })

  $('.partners-ar.right').click(function(e) {
    e.preventDefault();
    partners.trigger('next.owl.carousel');
    })

    $('.partners-ar.left').click(function(e) {
        e.preventDefault();
        partners.trigger('prev.owl.carousel');
    })


  $(".homepage__slider").owlCarousel({
       items: 1,
       nav: false,
       loop: true,
       dots: true,
       dotsContainer: '#carousel-custom-dots'
   });


})
