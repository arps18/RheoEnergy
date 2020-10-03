// NavBar on Scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
        $('.fixed-top').addClass('solid-nav').css('background', 'transparent');
    } else {
        $('.fixed-top').css('background', 'white', 'dark');
    }
});

// Navbar opaque