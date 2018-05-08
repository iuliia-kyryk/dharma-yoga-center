$(document).ready(function () {
    scrollWindow();
});

$(window).scroll(function () {
    scrollWindow();
});


function scrollWindow() {
    var navbarHeight = $('.navbar').height();

    if ($(window).scrollTop() >= navbarHeight) {
        $('.navbar').addClass('drop-menu');
    } else {
        $('.navbar').removeClass('drop-menu');
    }
};