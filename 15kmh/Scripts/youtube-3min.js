
//MyScript for video size ------------------------------

$(document).ready(funcResize);
$(window).resize(funcResize);

function funcResize() {
    var winW = $(window).width();
    var winH = $(window).height();
    var videoH = winW / 16 * 9;
    var coverH = winW / 16 * 8;
    $("#title-pic").height($(window).height());
    
    $("#player").width('100%');
    if (winH > winW) {
        $("#player, .embed-responsive").height(winH - 48 - 48);
        $(".embed-responsive.embed-responsive-16by9").css({ 'padding-bottom': 0 });
    }     
}

//section-nav -----------------------------------------------

$(".section-nav a").click(function () {
    var toID = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(toID).offset().top 
    }, 500);
    return false;
});
$(".section-nav a.video").click(function () {    
    $('html, body').animate({
        scrollTop: $("#player").offset().top - 48
    }, 500);
    return false;
});

//scroll-down-tip -----------------------------------------------

$(".scroll-down-tip").click(function () {
    var toID = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(toID).offset().top
    }, 1000);
    return false;
});

//facility -----------------------------------------------

$(".facility1").text("自行車維修打氣").attr("title", "自行車維修打氣");
$(".facility2").text("自行車停車站").attr("title","自行車停車站");
$(".facility3").text("租賃站").attr("title", "租賃站");
$(".facility4").text("餐飲").attr("title", "餐飲");
$(".facility5").text("廁所").attr("title", "廁所");
$(".facility6").text("飲水").attr("title", "飲水");
$(".facility7").text("淋浴設施").attr("title", "淋浴設施");
$(".facility8").text("涼亭").attr("title", "涼亭");
$(".facility9").text("資訊站").attr("title", "資訊站");
$(".facility10").text("旅館住宿").attr("title", "旅館住宿");
$(".facility11").text("醫療站").attr("title", "醫療站");

