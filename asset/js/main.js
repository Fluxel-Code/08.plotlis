// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     dots: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         769: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// })

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    // autoplaySpeed: 5000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})