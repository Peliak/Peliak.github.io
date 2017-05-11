$('document').ready(function(){
    $('.menu-link-adaptive').on('click', function () {
        $('.menu-body-adaptive').slideToggle();
    });
    $('body,html').on('click', function (e) {
        if (!$(e.target).closest('.menu-adaptive').length){
            $('.menu-body-adaptive').slideUp();
        }
    });
    $('.slider').slick({
        centerMode: false,
        centerPadding: 0,
        slidesToShow: 2,
        slidesToScroll: 3,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});