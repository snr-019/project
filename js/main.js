

var typed = new Typed(".new-text", {
    strings:["hamin asto,", "hamin asto,", "hamin ast."], 
    typeSpeed:200,
    backSpeed:150,
    loop:true
    
});


// script to change the background images of main
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "bgimg/1.jpg",
        "bgimg/2.jpg",
        "bgimg/3.jpg",
        "bgimg/4.jpg",
        "bgimg/5.jpg",
    ];

    const heroHeader = document.querySelector(".hero-header");

    // Function to set random background image
    function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        heroHeader.style.backgroundImage = `linear-gradient(rgba(38, 37, 37, 0.9), rgba(36, 31, 31, 0.1)), url(${randomImage})`;
    }

   // Call the function initially to set a random background image
   setRandomBackground();

   // Set interval to change background image every 5 seconds
   setInterval(setRandomBackground, 1000);
});
// changing the color of main text using jquery.
$(".new-text").css("color","#0F7C6C");



(function ($) {
    "use strict";

    // Spinner
    // var spinner = function () {
    //     setTimeout(function () {
    //         if ($('#spinner').length > 0) {
    //             $('#spinner').removeClass('show');
    //         }
    //     }, 1);
    // };
    // spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})
(jQuery);

//  back to top
