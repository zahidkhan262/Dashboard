// $(document).ready(function () {
//     var listing = $(".navigation li").click(function () {
//         listing.forEach(element => {
//             element.removeClass('active')
//         });
//         $(this).addClass('active')
//     })
// })
$(document).ready(function () {
    $('.navigation li').click(function () {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    })
    $('#bars-btn').on('click', function () {
        $('.main-part').toggleClass('full-main');
        $('.navs').toggleClass('full-header');
    })


    // profile

    $('#profile').on('click', function () {
        $('.pro-card').toggle()
    })
})
$('.single-slick').slick();
// slick slider department

$('.cards-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});




