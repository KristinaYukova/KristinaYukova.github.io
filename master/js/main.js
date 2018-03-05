$(document).ready(function(){ $(".owl-carousel").owlCarousel(); });

$('.owl-carousel_hits').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout:3000,
    nav:false,
    dots: false,
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
})

$('.owl-carousel_news').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout:3500,
    nav:false,
    dots: false,
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
})
$('.owl-carousel_reviews').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2500,
    navText:["",""],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})