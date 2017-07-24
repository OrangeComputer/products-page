// scroll nav fade
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {

        $('.navbar').fadeOut();


    } else {

        $('.navbar').fadeIn();
    }
});
