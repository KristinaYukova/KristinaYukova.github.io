$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoHeight:true,
    autoWidth:true,
    items:4,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
