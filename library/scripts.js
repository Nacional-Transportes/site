$(document).ready(function() {

    preloader();

    navBarFixed();

    owlCarrossel();

    //scrollNavActive();

    //navbarHide();

    navbarClickActiveScroll();

});

/*Preload fade*/
function preloader() {
    $("#preloader").fadeOut("slow");
}

/* Navbar Fixed */
function navBarFixed() {
    $('.navbar').addClass('fixed-top');
}

/* OWL CAROUSEL 2 */
function owlCarrossel() {
    $('.owl-carousel.owl-banner').owlCarousel({
        autoplay:false,
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: false,
        responsiveClass: true
    });

    $('.owl-carousel.owl-clientes').owlCarousel({
        autoplay:false,
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    $('.owl-carousel.owl-depoimentos').owlCarousel({
        autoplay:false,
        loop: false,
        margin: 50,
        nav: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            }
        }
    });
}

/* Scroll Nav-item Active */
function scrollNavActive() {    
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section.scroll').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
            $('.nav-item.scroll.active').removeClass('active');
            $('.nav-item.scroll').eq(i).addClass('active');
            }
        });
    })
    .scroll();
}

/* NAVBAR - HIDE */
function navbarHide() {    
    jQuery(function ($) {
        $('.nav-link').on('click', function () {
            $('.navbar .collapse').collapse('hide');
        })
    });
}

/* NAVBAR - CLICK ACTIVE SCROLL */
function navbarClickActiveScroll() {
    jQuery(function ($) {
        count=0;
        
        $('.navbar-toggler').on('click', function () {
            if (count==0) {
                $('.bg-header').addClass('active');
                count = count + 1;
            } else {
                setTimeout(function(){  $('.bg-header').removeClass('active'); }, 300);
                count = count - 1;
            }
        });

        jQuery(window).scroll(function () {
            $scrollTop = $(this).scrollTop();
            if ($scrollTop >= 50) {
                $('.bg-header').addClass('active');
            } else {
                if (count==1) {
                    $('.bg-header').addClass('active');
                } else {
                    $('.bg-header').removeClass('active');
                }
            }
        });
            
    });
}