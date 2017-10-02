$(document).ready(function(){

    $('.one-slide').owlCarousel({
        items:1,        
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        autoWidth:true,
    })
    $('.three-slide').owlCarousel({
        items:3,        
        loop:true,
        margin:30,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.clients-slide').owlCarousel({
        items:1,        
        loop:true,
        nav:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.owl-prev span').html('<i class="fa fa-long-arrow-left" aria-hidden="true"></i>');
    $('.owl-next span').html('<i class="fa fa-long-arrow-right" aria-hidden="true"></i>')
  });
 
