$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    ///////// **Fixed Header** ///////// 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $(".fixed-header").addClass("scroll");
        } else {
            $(".fixed-header").removeClass("scroll");
        }
        // if ($(window).width() <= 767) {
        //     if ($(this).scrollTop() >= 30) {
        //         $(".fixed-header").addClass("scroll");
        //     } else {
        //         $(".fixed-header").removeClass("scroll");
        //     }
        // }
    });
    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
    });
    ///////// **gallery Slider** ///////// 
    $('.gallery-slider').owlCarousel({
        margin: 15,
        rtl: document.dir == 'rtl' ? true : false,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
        }
    });
    ///////// **news Slider** ///////// 
    $('.news-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });
    ///////// **parts Slider** ///////// 
    $('.parts-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            767: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1199: {
                items: 6,
            },
        }
    });
    /////////modals/////////
    $('.logModalLink').click(function () {
        $(".overlay").fadeIn(300);
        $(".log-modal").slideDown(400);
        $("body").addClass("overflow");
    });
    $('.regModalLink').click(function () {
        $(".overlay").fadeIn(300);
        $(".log-modal").slideUp(400, function () {
            $(".reg-modal").slideDown(400);
        });
        $("body").addClass("overflow");
    });
    $('.forget-link').click(function () {
        $(".overlay").fadeIn(300);
        $(".log-modal").slideUp(400, function () {
            $(".pass-modal").slideDown(400);
        });
        $("body").addClass("overflow");
    });
    $('.overlay,.close-modal').click(function () {
        $(".overlay").fadeOut(400);
        $(".mo-modal").slideUp(300);
        $("body").removeClass("overflow");
    });
    ///////// **menu** /////////
    if ($(window).width() <= 767) {
        $('.has-sub>.navA').removeAttr("href")
        $('.menu-btn').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navBar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navBar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navBar').click(function (e) {
            e.stopPropagation();
        });
        $('.has-sub>.navA').click(function () {
            $(".has-sub>.navA").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".has-sub>.navA").not(this).siblings().slideUp(500);
        })
    }
    ///////// **comments** /////////
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 1000, 'swing');
    });
});