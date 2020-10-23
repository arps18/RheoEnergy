// NavBar on Scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
        $('.fixed-top').addClass('solid-nav').css('background', 'transparent');
    } else {
        $('.fixed-top').css('background', 'white', 'light');
    }
});

// Back to top

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//PreLoader