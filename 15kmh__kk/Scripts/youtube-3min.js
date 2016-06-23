
//MyScript for video size ------------------------------

$(document).ready(funcResize);
$(window).resize(funcResize);

function funcResize() {
    var winW = $(window).width();
    var winH = $(window).height();
    var videoH = winW / 16 * 9;
    var coverH = winW / 16 * 8;
    $("#title-pic").height( $(window).height() );
    $("#player").width('100%');
    if (winH > winW) {
        $("#player, .embed-responsive").height(winH - 48 - 48);
        //$(".embed-responsive.embed-responsive-16by9").css({'padding-bottom': 0});
    } else {
        $("#player").height(winW / 16 * 9);
    }
    $(".embed-responsive.embed-responsive-16by9").css({'padding-bottom': 0});
}

$(".section-nav a").click(function () {
    var toID = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(toID).offset().top 
    }, 500);
});
$(".section-nav a.video").click(function () {
    $('html, body').animate({
        scrollTop: $("#player").offset().top - 48
    }, 500);
});

$('.bxslider').bxSlider({
    auto: true,
    autoStart: true,
    speed: 300,
    mode: 'fade',
    //autoHover: true,    
    //controls: false,
    captions: true
});
