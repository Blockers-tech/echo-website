/*
Theme Name: Boozy
Theme URI: https://themewar.com/html/boozy
Author: Themewar
Author URI: https://themeforest.net/user/themewar
Description: Boozy - Creative Agency Responsive HTML5 Template
Version: 1.0.0
License:
License URI:
*/

(function () {
    'use strict';

    /*==================================
    [Table of contents]
    ===================================
        01. Variables
        02. All Slider
        03. Nice Selects
        04. Funfact Counters
        05. Skill Progress bar
        06. Popup Search
        07. Right Grid Sidebar
        08. Back To Top
        09. Revolution Slider
        10. Video Popup
        11. Mobile Menu
        12. Sticky Header
        13. Custom Element Inside Collumn
        14. Contact Form Submission
        15. Js Aos Animation 
        16. Js Typewriter 
        17. Js Ripples
        18. Shaffle Filter
        19. Preloader
    */
   
   /*------------------------------------------------------
    /  01. Variables
    /------------------------------------------------------*/
    var $projectSlider01 = $('.projectCarousel'), 
        $testimonial01 = $('.testimonial01'), 
        $clientTestimonial01 = $('.clientTestimonial01'), 
        $clientTestimonial02 = $('.clientTestimonial02'), 
        $clientTestimonial02 = $('.clientTestimonial02'), 
        $singleSkill = $('.singleSkill'), 
        $protfolioCarousel01 = $('.protfolioCarousel01'),  
        $protfolioCarousel02 = $('.protfolioCarousel02'),  
        $popup_video = $('.playBTn01');


    	$(document).ready(function() {
            "use strict";
            
            ScrollEffects();
            isMobile();
            Core();
        });

    /*--------------------------------------------------------
    / 02. All Slider
    /----------------------------------------------------------*/
    // Project Slider
    if ($projectSlider01.length > 0) {
        var $projectSlider01_obj = $projectSlider01.owlCarousel({
            autoplay: false,
            margin: 24,
            loop: false,
            nav: false,
            navText: ["<i class='boozy-left-arrow'></i>","<i class='boozy-righ-arrow'></i>"],
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    autoplay:true,
                    loop:true,
                },
                576: {
                    items: 1,
                    dots: false,
                    autoplay:true,
                    loop:true,
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    var pjFilterBar = document.querySelector('.pjCatFilter_area');
    $(pjFilterBar).on('click', '.pjFilterItem', function(e) {
        var $item = $(this);
        var filter = $item.data('owl-filter');
        $item.addClass('current').siblings().removeClass('current');
    
        $projectSlider01_obj.owlcarousel2_filter(filter);
    
        if (filter === '*') {
            // Reset ball element if all filters are selected
            gsap.to('#ball', { borderWidth: '4px', scale: 0.5, opacity: 1, borderColor: '#999999', backgroundColor: 'transparent', width: '80px', height: '80px'});
            $('#ball p').remove();
        } else {
            // Modify ball element for filtered items
            $('.projectItemView' + filter).on('mouseenter', function() {
                var $this = $(this);
                gsap.to('#ball', { borderWidth: '2px', scale: 1.1, borderColor: 'rgba(0,0,0)', backgroundColor: 'rgba(0,0,0)',});
                $("#ball").append('<p class="firstLine">' + $this.data("firstline") + '</p>' + '<p class="secondLine">' + $this.data("secondline") + '</p>');
            });
            $('.projectItemView' + filter).on('mouseleave', function() {
                gsap.to('#ball', { borderWidth: '4px', scale: 0.5, opacity: 1, borderColor: '#999999', backgroundColor: 'transparent', width: '80px', height: '80px'});
                $('#ball p').remove();
            });
        }
    });

    // Testimonial 01
    if ($testimonial01.length > 0) {
        var $testimonial01_obj = $testimonial01.owlCarousel({
            autoplay: false,
            loop: true,
            nav: true,
            navText: ["<i class='boozy-left-arrow'></i>","<i class='boozy-righ-arrow'></i>"],
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    } 

    // Client Testimonial 01
    if ($clientTestimonial01.length > 0) {
        var $clientTestimonial01_obj = $clientTestimonial01.owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            center:true,
            margin:0,
            responsive: {
                0: {
                    items: 1.8
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6.8
                },
                1400: {
                    items: 7.8
                }
            },
        });
    }

    // Client Testimonial 02
    if ($clientTestimonial02.length > 0) {
        var $clientTestimonial02_boj = $clientTestimonial02.owlCarousel({
            autoplay: false,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            margin:0,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }    
    
    // Portfolio Carousel 
    if ($protfolioCarousel01.length > 0) {
        var $protfolioCarousel01_obj = $protfolioCarousel01.owlCarousel({
            autoplay: false,
            loop: false,
            nav: false,
            dots: false,
            responsiveClass: true,
            smartSpeed:1300,
            margin:0,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        });
        $protfolioCarousel01.on('mousewheel', '.owl-stage', function (e) {
            if (e.originalEvent.deltaY > 0){
                $protfolioCarousel01.trigger('next.owl',[1500]);
            }else {
                $protfolioCarousel01.trigger('prev.owl',[1500]);
            }
            e.preventDefault();
        });
    }

    // Portfolio02 Slick Slider 
    if ($protfolioCarousel02.length > 0) {
        var $protfolioCarousel02_obj = $protfolioCarousel02.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            dots: false,
            speed: 1200,
            centerPadding: '445px',
            speed: 1500,
            infinite: true,
            autoplay: false,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="boozy-left-arrow"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="boozy-righ-arrow"></i></button>',
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                      centerPadding: '360px',
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                    centerPadding: '280px',
                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                    centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                    centerPadding: '150px',
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                    centerPadding: '80px',
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    centerPadding: '20px',
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    centerPadding: '12px',
                  }
                }
              ]
        });
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        $protfolioCarousel02.on('wheel', (function(e) {
            if (e.originalEvent.deltaY < 0) {
                $(this).slick('slickNext');
            }else {
                $(this).slick('slickPrev');
            }
            e.preventDefault();
        }));
    }
    
    /*------------------------------------------------------
    /  03. Nice Selects
    /------------------------------------------------------*/
    // if (select.length > 0) {
    //     select.niceSelect();
    // };

    /*------------------------------------------------------
    /  04. Funfact Counters
    /------------------------------------------------------*/
    $(".OniCounter").appear();
    $(document.body).on("appear", ".OniCounter", function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass("appeared")) {
                jQuery({Counter: 0}).animate({Counter: $this.attr("data-count")},{
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                            var num = Math.ceil(this.Counter).toString();
                        $this.html(num);
                    },
                });
                $this.addClass("appeared");
            }
        });
    });
    
    /*--------------------------------------------------------
    /  05. Skill Progress bar
    /---------------------------------------------------------*/
    if ($(".singleSkill").length > 0) {
        $('.singleSkill').appear();
        $('.singleSkill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills() {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-skill");
            $(".skill", this).animate({ 'width': datacount + '%' }, 2000);
            if (coun) {
                $(this).find('span').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: datacount }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }

    /*--------------------------------------------------------
    / 06. Popup Search
    /----------------------------------------------------------*/
     $(".oniSearch > a").on("click", function (e) {
        e.preventDefault();
        $(".popup_search_sec").toggleClass("active");
    });
    $(".popup_search_overlay, #search_Closer").on("click", function () {
        $(".popup_search_sec").removeClass("active");
    });

    /*--------------------------------------------------------
    /  07. Right Grid Sidebar
    /---------------------------------------------------------*/
     $(".boozyGridMenu > a").on("click", function (e) {
        e.preventDefault();
        $(".rightsidebar").toggleClass("active");
    });
    $(".rightsidebarOverlay, .rightsidebarCloser").on("click", function () {
        $(".rightsidebar").removeClass("active");
    });

    /*--------------------------------------------------------
    / 08. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({ bottom: '30px', opacity: '1', visibility: 'visible' });
            back.addClass('active');
        } else {
            back.css({ bottom: '-30px', opacity: '0', visibility: 'hidden' });
            back.removeClass('active');
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({ scrollTop: 0 });
        return false;
    });

    /*--------------------------------------------------------
    / 09. Revolution Slider
    /----------------------------------------------------------*/
    // Revolution Slider for Home 01
     if ($(".slider01").length > 0) {
        var revapi1 = jQuery("#rev_slider_1").show().revolution({
            delay: 9000,
            responsiveLevels: [1200, 1200, 992, 768],
            gridwidth: [1290, 920, 700, 380],
            jsFileLocation: "js/",
            sliderLayout: "fullwidth",
            gridheight: [1120, 1015, 920, 800],
            minHeight: "650",
            spinner: '',
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    style: "custom",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_under: 1300,
                    tmp: "",
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0,
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0,
                    },
                },
                bullets: {
                    enable: false,
                    style: "custom",
                    tmp: "<span></span>",
                    direction: "horizontal",
                    rtl: false,

                    container: "layergrid",
                    h_align: "left",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 60,
                    space: 20,

                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 1000,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                },
            },
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 900,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                disable_onmobile: "on",
            },
        });
    }
    if ($(".slider02").length > 0) {
        var revapi1 = jQuery("#rev_slider_2").show().revolution({
            delay: 9000,
            responsiveLevels: [1200, 1200, 992, 768],
            gridwidth: [1290, 920, 700, 380],
            jsFileLocation: "js/",
            sliderLayout: "fullwidth",
            gridheight: [1120, 1015, 920, 800],
            minHeight: "650",
            spinner: '',
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                arrows: {
                    style: "custom",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_under: 1300,
                    tmp: "",
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0,
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 60,
                        v_offset: 0,
                    },
                },
                bullets: {
                    enable: false,
                    style: "custom",
                    tmp: "<span></span>",
                    direction: "horizontal",
                    rtl: false,

                    container: "layergrid",
                    h_align: "left",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 60,
                    space: 20,

                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 1000,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                },
            },
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 900,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                disable_onmobile: "on",
            },
        });
    }


    /*------------------------------------------------------
    /  10. Video Popup
    /------------------------------------------------------*/
    if ($popup_video.length > 0) {
        $popup_video.lightcase({
            transition: 'elastic',
            showSequenceInfo: false,
            slideshow: false,
            swipe: true,
            showTitle: false,
            showCaption: false,
            controls: true
        });
    }

    /*--------------------------------------------------------
    / 11. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('active')
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });

    /*--------------------------------------------------------
    /  12. Sticky Header
    /---------------------------------------------------------*/
    $(window).on('scroll', function () {
        var heights = $(window).height();
        var header_height = $(".isSticky").height();
        if ($(window).scrollTop() > heights) {
            if($(".isSticky").hasClass('h01Mode2')){
                $('.blanks').css('height', header_height);
            }
            $(".isSticky").addClass('fixedHeader animated slideInDown');
        } else {
            if($(".isSticky").hasClass('h01Mode2')){
                $('.blanks').css('height', '0');
            }
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }
    });

    /*------------------------------------------------------
    /  13. Custom Element Inside Collumn
    /------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function() {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                colsheight = $this.closest('[class^="col-"]').height(),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    tw_stretch();


    /*----------------------------------------------------------
    / 14. Contact Form Submission
    /----------------------------------------------------------*/
     $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr("disabled", "disabled").html("Processing...");
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === "") {
                $(this).addClass("reqError");
                required += 1;
            } else {
                if ($(this).hasClass("reqError")) {
                    $(this).removeClass("reqError");
                    if (required > 0) {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: "POST",
                url: "../ajax/mail.php",
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr("disabled").html("Send Message");

                    $(".con_message", $this).fadeIn().html("<strong>Congratulations!</strong> Your query successfully sent to site admin.").removeClass("alert-warning").addClass("alert-success");
                    setTimeout(function () {
                        $(".con_message", $this).fadeOut().html("").removeClass("alert-success alert-warning");
                    }, 5000);
                },
            });
        } else {
            $('button[type="submit"]', $this).removeAttr("disabled").html("Send Message");
            $(".con_message", $this).fadeIn().html("<strong>Opps!</strong> Errpr found. Please fix those and re submit.").removeClass("alert-success").addClass("alert-warning");
            setTimeout(function () {
                $(".con_message", $this).fadeOut().html("").removeClass("alert-success alert-warning");
            }, 5000);
        }
    });
    $(".required").on("keyup", function () {
        $(this).removeClass("reqError");
    });

    /*------------------------------------------------------
    /  15. Aos Animation 
    /------------------------------------------------------*/
    // aos animation 
    AOS.init();
    
    /*------------------------------------------------------
    /  16. Js Typewriter 
    /------------------------------------------------------*/
    let typeApp = document.querySelectorAll('.typeHeading');
    if(typeApp.length > 0){
        let i = 0;
        while( i < typeApp.length){;
            var typewriter = new Typewriter(typeApp[i], {
                loop: true,
                delay: 75,
            });
            typewriter.pauseFor(2500)
                .typeString('Creative')
                .pauseFor(2000)
                .deleteChars(10)
                .typeString('Agency')
                .pauseFor(2000)
                .deleteChars(8)
                .typeString('BRANDS')
                .pauseFor(2000)
                .deleteChars(10)
                .typeString('DESIGN')
                .pauseFor(2500)
                .start();
            i++;
        }
    }

    /*------------------------------------------------------
    /  17. Js Ripples
    /------------------------------------------------------*/
    $('.animateThumb').each(function(){
        let filterEl = document.querySelector('.blgsvg_1 [type="fractalNoise"]');
        let tl = new TimelineMax({repeat: -1});
        
        tl.to(filterEl, 10, {attr: { baseFrequency: '0.001 0.004' }}, 0)
        
        // tl.play();
        $(this).mouseover(function(){
            this.style.filter ="url(#warp)";
            tl.play();
            tl.yoyo(true);
        })
        $(this).mouseout(function(){
            this.style.filter ="none";
            tl.reverse();
            tl.yoyo(false);
        })
        let filterEl2 = document.querySelector('.blgsvg_2 [type="fractalNoise"]');
        let tl2 = new TimelineMax({repeat: -1});
        
        tl2.to(filterEl2, 3, {attr: { baseFrequency: '0.0005 0.0005' }}, 0)
        
        tl2.yoyo(true);
    })
    
    /*------------------------------------------------------
    /  18. Shaffle Filter
    /------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shafull_container").length > 0) {
            var $grid = $('.shafull_container');

            var Shuffle = window.Shuffle;
            var element = document.querySelector('.shafull_container');
            var sizer = element.querySelector('.shaf_sizer');

            var shaff_inst = new Shuffle(element, {
                itemSelector: '.shaf_item',
                sizer: sizer 
            });
            $('.filterBTN_bare li').on('click', function () {
                $('.filterBTN_bare li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                shaff_inst.filter(groupName);
            });
        }
    });


    
    // js animation 
    if (!$('body').hasClass("disable-cursor")) {
        if($('.testimonial01').hasClass('owl-carousel')){
            if(!$('.testimonial01 .owl-nav').hasClass('disabled')){
                $('.testimonial01 .owl-nav button').on('mouseenter', function(e){
                    gsap.to(ball, { borderWidth: '0px', scale:1.2, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'})
                }) ;
                $('.testimonial01 .owl-nav button').on('mouseleave', function(e){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                })
            }
        }
    };
  


})(jQuery), 

/*------------------------------------------------------
/  19. Js Preloader
/------------------------------------------------------*/
(function ($) {
    var width = 100,
            perfData = window.performance.timing,
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


    var PercentageID = $("#precent"),
            start = 0,
            end = 100,
            durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            $(".loader_bar").css({width: current + '%'})

            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    setTimeout(function () {
        $('.preloader-wrap').fadeOut(400);
    }, time);

})(jQuery);

