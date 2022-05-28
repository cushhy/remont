$(document).ready(function () {
    $('.reviews__sliders').slick();

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('#nav_toggle').removeClass('active');
        $('nav').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 90)
    })
});