$(document).ready(function() {

    preloader();

    navBarFixed();

    owlCarrossel();

    //scrollNavActive();

    //navbarHide();

    navbarClickActiveScroll();

    pageMenuActive();

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
        autoplay:true,
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
        $scrollTop = 0;
        
       /*  $('.navbar-toggler').on('click', function () {
            if (count==0) {
                $('.bg-header').addClass('active');
                count = count + 1;
            } else {
                setTimeout(function(){  $('.bg-header').removeClass('active'); }, 300);
                count = count - 1;
            }
        }); */

        
        $('.navbar-toggler').on('click', function () {
            //alert('count:' + count);

            $scrollTop = $(this).scrollTop();
            if (count == 0) {
                $('.bg-header').addClass('active');
                //alert('entrou add');
                count++;
            } 
            else if (count == 1) {
                $('.bg-header').removeClass('active');
                //alert('remove add');
                count--;
            }
            else if (count == 2) {
                $('.bg-header').addClass('active');
                //alert('remove add');
                //count--;
            }
                
        });


        jQuery(window).scroll(function () {
            $scrollTop = $(this).scrollTop();
            if ($scrollTop >= 10) {
                $('.bg-header').addClass('active');
                count = 2;
                //alert(count)
            } else {

                count = 0;
                //alert(count)
                $('.navbar-collapse').removeClass('show');

                if (count==1) {
                    $('.bg-header').addClass('active');
                } else {
                    $('.bg-header').removeClass('active');
                }
            }
        });
            
    });
}

/* NAVBAR - MENU ACTIVE */
function pageMenuActive() {
    $(function(){
        var page = $("body").attr("class");
        $(".navbar li[data='"+page+"']").addClass("active");
    });
}