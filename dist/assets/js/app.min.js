$(window).scroll(function () {
    var scrollLifex = $(window).scrollTop();
    if (scrollLifex >= 10) {
        $(".header-wrapper").addClass("active");
    } else {
        $(".header-wrapper").removeClass("active");
    }
});