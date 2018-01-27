"use strict";


jQuery(document).ready(function ($) {
    jQuery('.navbar-fixed-top').addClass('menu-scroll');
    var $navbar = $('.nav');
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    // Scrolly.
        $('.scrolly').scrolly({
            speed: 1000,
            offset: $navbar.height()

        });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

        var wow = new WOW({
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_comments_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
	    nav:false,
	    navText: [
                    "<i class='lnr lnr-chevron-left'></i>",
                    "<i class='lnr lnr-chevron-right'></i>"
                ],
      autoplayHoverPause: true

    });


	    
//$('#test').mixItUp({
//    animation: {
//      animateResizeContainer: false,
//      effects: 'fade rotateX(-45deg) translateY(-10%)'
//   }
// });

// main-menu-scroll

	// jQuery(window).scroll(function () {
	//   var top = jQuery(document).scrollTop();
	// 	var height = -1;
	//   //alert(batas);
	  
	//   if (top > height) {
		
	//   } else {
	//    jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	//   }
	// });	 
	
// scroll Up

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });	

    //  function openModal() {
    //   document.getElementById('myModal').style.display = "block";
    // }

    // // Close the Modal
    // function closeModal() {
    //   document.getElementById('myModal').style.display = "none";
    // }

    // var slideIndex = 1;
    // showSlides(slideIndex);

    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("demo");
    //   var captionText = document.getElementById("caption");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    //   captionText.innerHTML = dots[slideIndex-1].alt;
    // }
   

    //End
});
