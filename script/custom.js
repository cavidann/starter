$(window).on("load", function () {

    $("#loading").fadeOut(1000)
})
$(document).ready(function () {
    //owl carousel starts
    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoWidth: true,
    })
    $('.three-slide').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.clients-slide').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.owl-prev span').html('<i class="fa fa-long-arrow-left" aria-hidden="true"></i>');
    $('.owl-next span').html('<i class="fa fa-long-arrow-right" aria-hidden="true"></i>')
    //owl carousel ends

    // menu navigation starrts
    $(".menu ul li").click(function () {
        var scroll_number = $(this).attr("scroll");
        var scroll_position = $("section[scroll=" + scroll_number + "]").offset().top;

        $('html, body').animate({ scrollTop: scroll_position }, "slow")
        return false;
    })
    // menu navigation ends

    // change menu item color when scroll starts
    var menu_legth = $(".menu ul li").length;

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        for (var i=0;i<menu_legth;i++){
            var scroll_position = $("section[scroll="+i+"]").offset().top;
            if (scroll >= scroll_position-10) {
                $("li[scroll="+i+"]").css({ "color": "#00acec" });
                $("li[scroll="+i+"]").siblings().css({ "color": "grey" });
            }
        }
    });
    // change menu item color when scroll ends
    $(".fa-bars").click(function(){
        $(".menu ul").toggle("slow");
    })
});

