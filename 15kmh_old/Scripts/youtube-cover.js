// Youtube Video --------------------------------------------------------------------

// 2. This code loads the IFrame Player API code asynchronously.    

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//MyScript for video size

$(document).ready(funcResize);
$(window).resize(funcResize);
function funcResize() {
    var winW = $(window).width();
    var videoH = winW / 16 * 9;
    var coverH = winW / 16 * 7;
    $("#cover_wrapper").height(coverH);
    $("#cover").height(coverH);
    $("#player").width(winW).height(videoH).css({ 'margin-top': '-' + winW / 16 * 1 + 'px' });
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
            showinfo: 0,
            controls: 0,
            start: 349,
            //end: 352
            end: 470
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
    event.target.playVideo();
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
        $("#simple_control").show();
        $("#cover").css({ 'background-color': 'rgba(105,153,102, .2)' });
        setTimeout(function () {
            $("#pause").trigger("click");
            setTimeout(function () {
                $("#pause").trigger("click");
            }, 1000);
            alert("123");
        }, 1500);

        done = true;
    }
    // When Video End
    if (event.data === 0) {
        //event.target.playVideo();
        //$("#cover").fadeIn(300);

        $("#cover").css({ 'background-color': 'rgba(105,153,102, 1)', '-webkit-transition': '0', '-o-transition': '0', 'transition': '0' });
        $(".go-micro-film").text("自動前往中...");
        setTimeout(function () {
            location.href = "Video.html";
        }, 1500);

    }
}
function stopVideo() {
    player.stopVideo();
}