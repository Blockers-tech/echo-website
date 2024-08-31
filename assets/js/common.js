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


    
    /*------------------------------------------------------
    /  Function ScrollEffects 
    /------------------------------------------------------*/
    window.ScrollEffects = function(){

        gsap.defaults({overwrite: "auto"});
        gsap.registerPlugin(ScrollTrigger);

        var resizeTimeout;
		$(window).resize(function() {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(onResize, 100);
		});
		function onResize(){
			if( window.stMarquee != null ){
				window.stMarquee.refresh();
			}
		}
    }
    
    
    /*------------------------------------------------------
    /  Function Core 
    /------------------------------------------------------*/
	window.Core = function() {
        
        if (!isMobile() &&  !$('body').hasClass("disable-cursor")) {
            let mouse = { x: 0, y: 0 };
            let pos = { x: 0, y: 0 };
            let ratio = 0.65;			
            let active = false;			
            var ball = document.getElementById("ball");
            var offsetX = 35;
            
            
            gsap.set(ball, { xPercent: -50, yPercent: -50, scale:0.5, borderWidth: '4px', width: '80px', height:'80px'});
            
            document.addEventListener("mousemove", mouseMove);
            
            function mouseMove(e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouse.x = e.pageX;
                mouse.y = e.pageY - scrollTop;

            }
            gsap.ticker.add(updatePosition);
            
            function updatePosition() {
                if (!active) {
                    pos.x += (mouse.x - pos.x) * ratio;
                    pos.y += (mouse.y - pos.y) * ratio;
            
                    gsap.to(ball, { duration: 0.4, x: pos.x, y: pos.y });
                }
            }


            if($('nav').hasClass('mainMenu')){
                $('.mainMenu li').on('mouseenter', function(e){
                    gsap.to(ball, { borderWidth: '0px', scale:1.2, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'});
                })
                $('.mainMenu li').on('mouseleave', function(e){
                    gsap.to(ball,{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            if($('.headerOniAccess').find('.hdOniSocial', '.oniSearch', '.oniCart', '.hdSupportBtn', '.boozyGridMenu')){
                $('.hdOniSocial ul li a , .oniSearch a, .oniCart > a, .hdSupportBtn, .boozyGridMenu a, .pageBannerPath a').on('mouseenter', function(){
                    gsap.to(ball, { borderWidth: '0px', scale:.7, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'})
                }) 
                $('.hdOniSocial ul li a , .oniSearch a , .oniCart > a, .hdSupportBtn, .boozyGridMenu a, .pageBannerPath a').on('mouseleave', function(){
                    gsap.to(ball,{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                }) 
                $('.hdSupportBtn, .boozyGridMenu a').on('mouseenter', function(){
                    gsap.to('#ball',{ borderWidth: '0px', scale:1.1, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'
                    })
                }) 
                $('.hdSupportBtn, .boozyGridMenu a').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            if($('header, div, footer, section').find('.dfCursor')){
                $('.dfCursor').on('mouseenter', function(){
                    gsap.to('#ball',{borderWidth: '0px',scale: .5,opacity: 0,borderColor:'transparent',backgroundColor:'transparent'})
                }) 
                $('.dfCursor').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            if($('footer, section, div').find('.footerInfoNav, .footerInfoSocial')){
                $('.footerInfoNav li a, .footerInfoSocial a').on('mouseenter', function(){
                    gsap.to('#ball',{ borderWidth: '0px', scale:1, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'
                    })
                }) 
                $('.footerInfoNav li a, .footerInfoSocial a').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            if($('.pjCatFilter_area').find('.openHoverCursor')){
                $('.openHoverCursor li a').on('mouseenter', function(){
                    gsap.to('#ball',{
                        borderWidth: '0px',
                        scale:1.4,
                        opacity: 0.15,
                        borderColor:'rgba(253, 253, 253)',
                        backgroundColor:'rgba(253, 253, 253)'
                    })
                }) 
                $('.openHoverCursor li a').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            if($('.project_item').hasClass('projectItemView')){
                $('.projectItemView').on('mouseenter', function(){
                    var $this = $(this);
                    gsap.to('#ball', {
                        borderWidth: '2px', 
                        scale: 1.1, 
                        borderColor:'rgba(0,0,0)', 
                        backgroundColor:'rgba(0,0,0)',
                    });
                    $("#ball").append( '<p class="firstLine">' + $this.data("firstline") + '</p>' + '<p class="secondLine">' + $this.data("secondline") + '</p>');
                    
                }) 
                $('.projectItemView').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                    $('#ball p').remove();		
                })
            }

            if($('.portfolioCarItam, .portfolioCarItam02').hasClass('projectItemView')){
                $('.projectItemView').on('mouseenter', function(){
                    var $this = $(this);
                    gsap.to('#ball', {
                        borderWidth: '2px', 
                        scale: 1.1, 
                        borderColor:'rgba(0,0,0)', 
                        backgroundColor:'rgba(0,0,0)',
                    });
                    if($('.portfolioCarItam').hasClass('projectItemView')){var Linecolor = '#FFF';} 
                    if($('.portfolioCarItam02').hasClass('projectItemView')){var Linecolor = '#ff5100';} 
                    $("#ball").append( '<p class="firstLine" style="color:'+Linecolor +';">' + $this.data("firstline") + '</p>' + '<p class="secondLine" style="color: '+Linecolor +';">' + $this.data("secondline") + '</p>');
                    
                    
                }) 
                $('.projectItemView').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    $('#ball p').remove();	
                    gsap.ticker.add(updatePosition);		
                })
            }

            if($('.project_thumb03').hasClass('projectItemView')){
                $('.projectItemView').on('mouseenter', function(){
                    var $this = $(this);
                    gsap.to('#ball', {
                        borderWidth: '2px', 
                        scale: 1.1, 
                        borderColor:'rgba(0,0,0)', 
                        backgroundColor:'rgba(0,0,0)',
                    });
                    if($('.portfolioCarItam, .project_thumb03').hasClass('projectItemView')){var Linecolor = '#FFF';}
                    if($('.portfolioCarItam02').hasClass('projectItemView')){var Linecolor = '#ff5100';} 
                    $("#ball").append( '<p class="firstLine" style="color:'+Linecolor +';">' + $this.data("firstline") + '</p>' + '<p class="secondLine" style="color: '+Linecolor +';">' + $this.data("secondline") + '</p>');
                    
                    
                }) 
                $('.projectItemView').on('mouseleave', function(){
                    gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    $('#ball p').remove();	
                    gsap.ticker.add(updatePosition);		
                })
            }

            if($('.tm01Social a' > 0)){
                $('.tm01Social a').on('mouseenter', function(){
                    gsap.to('#ball', {borderWidth: '0px',scale:.58,opacity: 0.25,borderColor:'rgba(253, 253, 253)',backgroundColor:'rgba(253, 253, 253)'})
                })
                $('.tm01Social a').on('mouseleave', function(){
                    gsap.to(ball, { borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                    gsap.ticker.add(updatePosition);	
                })
            }

            
            $(".sticky.left").mouseenter(function(e) {		  
                var rcBounds = $(this)[0].getBoundingClientRect();		  
                var positionX = rcBounds.left - offsetX + 14;
                var positionY = rcBounds.top + rcBounds.height/2;		  
                gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.45, opacity:1, borderWidth: '4px', borderColor:'#ff5100'});
                gsap.ticker.remove(updatePosition);
            })
            
            $(".sticky.right").mouseenter(function(e) {		  
                var rcBounds = $(this)[0].getBoundingClientRect();		  
                var positionX = rcBounds.right + offsetX - 14;
                var positionY = rcBounds.top + rcBounds.height/2;		  
                gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.45, opacity:1, borderWidth: '4px', borderColor:'#ff5100'});
                gsap.ticker.remove(updatePosition);
            })
            $(".btnWrapper_sm.sticky.right").mouseenter(function(e) {		  
                var rcBounds = $(this)[0].getBoundingClientRect();		  
                var positionX = rcBounds.right + offsetX - 16;
                var positionY = rcBounds.top + rcBounds.height/2 + 1;		  
                gsap.to(ball, { duration: 0.5, x: positionX, y: positionY, scale:0.40, opacity:1, borderWidth: '4px', borderColor:'#ff5100'});
                gsap.ticker.remove(updatePosition);
            })
            
            $(".sticky").mouseleave(function(e) {			
                gsap.to(ball, { duration: 0.2, scale:0.5, borderWidth: '4px', borderColor:'#999', opacity:1, width: '80px',height:'80px' });
                gsap.ticker.add(updatePosition);		  
            })	
            
            $(".parallax-wrap.iconWrapper").mouseenter(function(e) {
                gsap.to(ball, { duration: 0.3, scale: 0.45, borderWidth: '4px', opacity:1, borderColor:'#ff5100' });
                gsap.to($( this ).children(), {duration: 0.3, scale:1, color: '#ff5100'});
            });
            $(".iconWrapper_sm.parallax-wrap.iconWrapper").mouseenter(function(e) {
                gsap.to(ball, { duration: 0.3, scale: 0.40, borderWidth: '4px', opacity:1, borderColor:'#ff5100' });
                gsap.to($( this ).children(), {duration: 0.3, scale:1, color: '#ff5100'});
            });
            $(".parallax-wrap").mouseleave(function(e) {
                gsap.to(this, { duration: 0.3, scale: 1 , color: '#FFF'});
                gsap.to(ball, { duration: 0.3, scale: 0.5, borderWidth: '4px', opacity:1, borderColor:'#999999'  });
                gsap.to($( this ).children(), {duration: 0.3, scale:1, x: 0, y:0, color: "#FFF"});
                active = false;
            });		
            
            $(".parallax-wrap").mousemove(function(e) {
                parallaxCursor(e, this, 2);
                callParallax(e, this);
            });
            
            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
            }
            
            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.pageX - boundingRect.left;
                var relY = e.pageY - boundingRect.top;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                gsap.to(target, {
                    duration: 0.3,
                    x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                    y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
                    ease: Power2.easeOut
                });
            }
            
            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.pageX - rect.left;
                var relY = e.pageY - rect.top;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
                gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
            }
            
                
            $('.bzCursroHv > a').on('mouseenter', function(){
                gsap.to('#ball',{ borderWidth: '0px', scale:.8, opacity: 0.15, borderColor:'rgba(253, 253, 253)', backgroundColor:'rgba(253, 253, 253)'})
            }) 
            $('.bzCursroHv > a').on('mouseleave', function(){
                gsap.to('#ball',{ borderWidth: '4px', scale:0.5, opacity: 1, borderColor:'#999999', backgroundColor:'transparent',width:'80px',height:'80px'});
                gsap.ticker.add(updatePosition);		  
            })


            $(".magic-hover").on("mouseenter", function(e){  
                var rcBounds = $(this)[0].getBoundingClientRect();		  
                var positionX = rcBounds.left + rcBounds.width/2;
                var positionY = rcBounds.top + rcBounds.height/2;
                var boxWidth = rcBounds.width;		  
                var boxHeight = rcBounds.height;	
                var boxRadius = $(this).data("radius");
                var boxborder = $(this).data("border-color");
                gsap.to(ball, { duration: 0.4, x: positionX, y: positionY, scale: 1, borderWidth: '1px', borderColor: boxborder, width: boxWidth, height: boxHeight, borderRadius: boxRadius});
                gsap.ticker.remove(updatePosition);
            });                
            $(".magic-hover").mouseleave(function(e) {			
                gsap.to(ball, { duration: 0.2, scale:0.5, borderWidth: '4px', borderColor:'#999999', opacity:1, width: '80px', height: '80px', borderRadius: '50%'});
                gsap.ticker.add(updatePosition);		  
            })	
           
        }


        
        // Heading sec 
        if(document.querySelector('.secHeading')){
            $('.secHeading').each(function(){
                var $this = $(this);
                gsap.from($this,{
                    scrollTrigger:{ trigger: $this, start: 'top 90%', end: 'bottom 30%', scrub: 1,},
                    stagger: 0.4, 
                    opacity: 1,
                    scale: 1,
                    y: 80,
                    duration: .2,
                })
            })
        }
        if(document.querySelector('.projectCat_area li')){
            var projectCats = gsap.utils.toArray('.projectCat_area li');
            if(projectCats !== null){
                projectCats.forEach((projectCat) => {
                    gsap.from(projectCat, { 
                        scrollTrigger: { trigger: projectCat, start: 'top bottom', end: 'bottom top', scrub: 1,},
                        opacity :.3,
                        y: 60,
                        scale: .9,
                        duration:1,
                    });
                })
            }
        }
        
        if(document.querySelector('.testimonial01Wrapper')){
            gsap.from('.testimonial01Wrapper',{
                scrollTrigger:{trigger: '.testimonial01Wrapper', start: 'top 90%',end: 'bottom 30%',scrub: 1, },
                opacity: .5,
                scale: 1.1,
                duration: .2,
            }) 
        }
        
        if(document.querySelector('#videoPlay')){
            gsap.from('#videoPlay', {
                scrollTrigger: { trigger: '#videoPlay', start: 'top 100%', end: 'bottom 80%', scrub: 1,},
                scale: .9,
                duration: .5,
            })
        }
        if($('.swipeHvImage').find('.swipeimage')){
            gsap.utils.toArray(".swipeHvImage").forEach((el) => {
            
            var imageSize = el.querySelector("img.swipeimage");
            var imageWH = $(imageSize)[0].getBoundingClientRect();	
            var positionX =  imageWH.width/2; 
            var positionY =  imageWH.height/2; 
                
                const image = el.querySelector("img.swipeimage"),
                    setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" }),
                    setY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3" }),	
                    align = (e) => {
                    var rcBounds = $(el)[0].getBoundingClientRect();
                    setX(e.clientX - rcBounds.left - positionX);
                    setY(e.clientY - rcBounds.top - positionY);
                    },
                    startFollow = () => document.addEventListener("mousemove", align),
                    stopFollow = () => document.removeEventListener("mousemove", align),
                    fade = gsap.to(image, {
                    autoAlpha: 1,
                    ease: "none",
                    paused: true,
                    onReverseComplete: stopFollow,
                    rotate: '6.7deg'
                    });
                
                el.addEventListener("mouseenter", (e) => {
                    fade.play();
                    startFollow();
                    align(e);
                    gsap.to('#ball',{borderWidth: 0})
                });
                
                el.addEventListener("mouseleave", () => {fade.reverse(); gsap.to('#ball',{borderWidth: '4px'})});
            
            });
        }
            
    }


    /*------------------------------------------------------
    /  function isMobile 
    /------------------------------------------------------*/
    window.isMobile = function() {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			$('body').addClass("disable-cursor");
			return true
		}
		else {
			if ($(window).width() <= 1024) {
				$('body').addClass("disable-cursor");
				return true 
			}	
            if($(window).resize(function(){
                if ($(window).width() <= 1024) {
                    $('body').addClass("disable-cursor");
                    return true 
                }else{
                    $('body').removeClass("disable-cursor");
                }
            }));
		};
		return false
	};
    
})(jQuery)

    // Export functions to scripts
    var ScrollEffects = window.ScrollEffects;
    var isMobile = window.isMobile;
    var Core = window.Core;	