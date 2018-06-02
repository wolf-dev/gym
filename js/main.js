(function ($) {

    "use strict";

 
    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    
    /*==== Sticky ====*/
    $("#header").sticky({topSpacing:0});
    //filter container mixitup

 

    //
      $('#MixItUp1').mixItUp({
    selectors: {
      filter: '.filter',
      
    }
  });
      // ===== Scroll to Top ==== 

    $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
    

   

    /*==== Smoothscroll ====*/    
    $('#home a, .custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
          event.preventDefault();
    });
    
  /* Mixit up*/
   $('.portfolio').mixItUp();

//Active books carousel
 $('.active-books').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>', '<span class="lnr lnr-arrow-right"></span>'],
        items: 3,
        margin: 20,
        autoHeight : true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
              0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:1500,
                autoplayHoverPause:true,
                margin: 0
            },
            440:{
                items:1,
                nav: false
            },
            768:{
                items:3,
                nav: false
            },
            1000:{
                items:4,
            }
        }
    })

   //Book-Review
   
     if($(".flexslider")[0]) { 
        $('.flexslider').flexslider(
            { 
                "directionNav" : true,
                "controlNav" : false,
                "animation" : "fade",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : false,
                "animationSpeed" : 500,
                "slideshowSpeed" : 4500,
          
        });
    }
    // Testimonial-carousel
          if($(".flexslider")[0]) { 
        $('.testimonial-list').flexslider(
            { 
                "directionNav" : false,
                "controlNav" : false,
                "animation" : "fade",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : false,
                "animationSpeed" : 500,
                "slideshowSpeed" : 6500,
          
        });
    }
     //
       /* banner-Owl*/
       /*$('.header-slide').flexslider({
    animation: "slide",
    controlNav: false
}); */
     if($(".flexslider")[0]) { 
        $('.header-slide').flexslider(
            { 
                "directionNav" : true,
                "controlNav" : false,
                "animation" : "fade",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : false,
                "animationSpeed" : 500,
                "slideshowSpeed" : 6500,
          
        });
    }

    /*Home Banner
    ======================================================*/

 
})(jQuery);