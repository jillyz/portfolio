

// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//MyScript for video size ------------------------------

$(document).ready(funcResize);
$(window).resize(funcResize);

function funcResize() {
    var winW = $(window).width();
    var winH = $(window).height();
    var videoH = winW / 16 * 9;
    var coverH = winW / 16 * 8;
    $("#title-pic").height( $(window).height() );
    $("#cover_wrapper").height(coverH);
    $("#cover").height(coverH);
    $("#player").width(winW).css({ 'margin-top': '-' + winW / 16 * 1 + 'px' });

    if (winH > winW) {
        $("#cover_wrapper, #cover, #player").height(winH - (48*3));
        //$("<a id='scroll-down-tip'><span class='glyphicon glyphicon-chevron-down' aria-hidden='true'></span></a>").insertAfter("#cover_wrapper");
        $("#scroll-down-tip").html("<a id='scroll-down-tip'><span class='glyphicon glyphicon-chevron-down' aria-hidden='true'></span></a>");
    } else {
        $("#cover_wrapper, #cover, #player").height(videoH);
        $("#scroll-down-tip").html("");
    }

}


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        //height: videoH,
        //width: winW,
        videoId: '-7THaWHVLVA',
        //videoId: 'RguEm8j-UZ0',
        playerVars: {
            rel: 0,
            start: 0,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onFinish': onPlayerStateChange[0]
        }
    });
}


// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
    $(".spinner").fadeOut(500);
    //$("#cover").delay(1500).fadeOut(3000);
    event.target.playVideo(); // <------------ Play Video
    //player.playVideo();
    player.unMute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var done = false;
function onPlayerStateChange(event) {

    // When Video Start
    if (event.data == YT.PlayerState.PLAYING && !done) {
        $(".spinner").fadeOut(500);
        $("#cover").fadeOut(3000);
        $("#simple_control").show();
        goToVideo();

        //$("#cover").css({ 'background-color': 'rgba(105,153,102, .2)' });
        done = true;
    }

    // When Video End
    if (event.data == 0) {
        event.target.playVideo();

        //$("#cover").fadeIn(300);
        //$("#cover").css({ 'background-color': 'rgba(105,153,102, 1)', '-webkit-transition': '0', '-o-transition': '0', 'transition': '0' });
        //$(".go-micro-film").text("進入");

    }
}
function stopVideo() {
    player.stopVideo();
}

function goToVideo (){
    var winW = $(window).width();
    var winH = $(window).height();
    //if (winH > winW) {
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $("#cover_wrapper").offset().top - 48
            }, 500);
        }, 1000);
    //} 
}


$("#title-pic").click(function () {
    goToVideo();
})

$('.bxslider').bxSlider({
    auto: true,
    autoStart: true,
    speed: 300,
    mode: 'fade',
    autoHover: true,    
    //controls: false,
    captions: true
});
