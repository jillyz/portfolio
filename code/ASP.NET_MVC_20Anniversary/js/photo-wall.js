$(document).ready(resizeWidth);
$(window).resize(resizeWidth);
var default_photo_load = 5;
var default_photo_more = 10;
function resizeWidth() {

    // 各解析度 - n為一行個數 
    var w = $(window).width();
    var h = $(window).height();
    if (w > 1680) {
        var n = 8;
    } else if (w <= 1680 && w > 1440) {
        var n = 7;
    } else if (w <= 1440 && w > 1280) {
        var n = 6;
    } else if (w <= 1280 && w > 960) {
        var n = 5;
    } else if (w <= 960 && w > 640) {
        var n = 4;
    } else if (w <= 640 && w > 480) {
        var n = 3;
    } else if (w <= 480 && w > 320) {
        var n = 2;
    } else if (w <= 320) {
        var n = 2;
    }

    default_photo_load = n * 8;

    if ( w <= 768 ) {
        default_photo_more = n * 5;
    } else {
        default_photo_more = n * 2;
    }
    

    // DIV - 寬高 & 每列排版
    var padding = 3; //~~~~~邊距設定
    $(".row li").width((w - ((n - 1) * padding)) / n).css({ 'margin': padding + 'px 0 0 ' + padding + 'px' });
    $(".row li").height(($(".row li").width() / 16) * 9);
    $(".row").css({ 'margin-bottom': padding + "px" });
    if (h > w) {
        var wh = h;
    } else  {
        var wh = w;
    }
    $("#home, #home .people-arranged-in-20, #home .mask").height(h+10);
    $("#home .radiation").width(wh).height(wh);


    /*fix IE */
    $("html#ie7 .row a span").each(function () {
        var hEm = $(this).height();
        $(this).css({ 'height': '100%', 'padding-top': ($(".row li").height() - hEm) / 2 });
    })

    // #banner , #boss  - 寬高 & 位置
    var wItem = $(".row li").width();
    var hItem = $(".row li").height();
    var lnBanner = Math.round((n / 2) - 1);
    var leftBanner = ((wItem * lnBanner) + ((lnBanner + 0) * padding));
    var topBanner = hItem + (padding * 2);
    var lnBoss = lnBanner - 1;
    var leftBoss = ((wItem * lnBoss) + ((lnBoss + 0) * padding));
    var topBoss = topBanner;
    $("#banner").css({
        'width': (wItem * 2) + padding,
        'height': (hItem * 2) + padding,
        'left': leftBanner + padding,
        'top': topBanner
    });
    $("#boss").css({
        'width': wItem,
        'height': (hItem * 2) + padding,
        'left': leftBoss + padding,
        'top': topBoss
    });

    // 小解析度之下的顯示方式
    if (w <= 640) {
        $("#banner, #boss").css({
            'top': padding
        });
    }
    if (w <= 480 && w > 320) {
        $("#boss").css({
            'left': padding,
            'top': (hItem * 2) + (padding * 3) /*+40*/
        });
    }
    if (w <= 320) {
        $("#banner, #banner iframe").css({
            'width': wItem,
            'height': hItem
        });

    } 

    //----ColorBox ----------
    var h = $(window).height();
    if (w > 910 && h >= 510) {
        $(".pic").colorbox({ rel: 'pic', iframe: true, width: '910px', height: '510px', className: 'pic-box' , fixed: true });
    } else if (w > 910 && h < 510) {
        $(".pic").colorbox({ rel: 'pic', iframe: true, width: '910px', height: '96%', className: 'pic-box', fixed: true });
    } else if (w >= 510 && w <= 910) {
        $(".pic").colorbox({ rel: 'pic', iframe: true, width: '510px', height: '96%', className: 'pic-box', fixed: true });
    } else if (w >= 480 && w <= 510) {
        $(".pic").colorbox({ rel: 'pic', iframe: true, width: '100%', height: '100%', className: 'pic-box', fixed: true });
    } else if (w < 480) {
        $(".pic").colorbox({ rel: 'pic', iframe: true, width: '100%', height: '100%', className: 'pic-box', fixed: true });
    }

    if (w > 910 && h >= 570) {
        $(".topic").colorbox({ rel: 'topic', iframe: true, width: '910px', height: '570px', className: 'pic-box topic-box', fixed: true });
    } else if (w > 910 && h < 570) {
        $(".topic").colorbox({ rel: 'topic', iframe: true, width: '910px', height: '96%', className: 'pic-box topic-box', fixed: true });
    } else if (w >= 570 && w <= 910) {
        $(".topic").colorbox({ rel: 'topic', iframe: true, width: '510px', height: '96%', className: 'pic-box topic-box', fixed: true });
    } else if (w >= 480 && w <= 570) {
        $(".topic").colorbox({ rel: 'topic', iframe: true, width: '100%', height: '100%', className: 'pic-box topic-box', fixed: true });
    } else if (w < 480) {
        $(".topic").colorbox({ rel: 'topic', iframe: true, width: '100%', height: '100%', className: 'pic-box topic-box', fixed: true });
    }


    var winH = $(window).height();
    $("#win").html(w + "," + winH);

    
  
} //resizeWidth end ------------------