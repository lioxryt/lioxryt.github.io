document.addEventListener('DOMContentLoaded', function () {
    var shellpull = $('span#cookie-pull');
    shellpull.on('click', function (e) {
        $('.cookie-menu-header-mobile').css('width', '100%');
    });
    $('#back_to_top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {//Trả về vị trí thanh cuộn dọc
            $('#back_to_top').fadeIn();//mờ dần phần tử 
        } else {
            $('#back_to_top').fadeOut();
        }
    });
    $("#back_to_top").click(function () {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);
    });
    $("#expand").on('click', function () {
        $("#iframe_game_play").addClass("force_full_screen");
        requestFullScreen(document.body);

    });
    $("#_exit_full_screen").on('click', cancelFullScreen);
    function requestFullScreen(element) {
        $("body").css({"overflow-y": "hidden"});
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    function cancelFullScreen() {
        $('body').css({"overflow-y": "scroll"});
        $("#iframe_game_play").removeClass("force_full_screen");
        var requestMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullScreenBtn;
        if (requestMethod) {
            requestMethod.call(document);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    if (document.addEventListener) {
        document.addEventListener('webkitfullscreenchange', exitHandler, false);
        document.addEventListener('mozfullscreenchange', exitHandler, false);
        document.addEventListener('fullscreenchange', exitHandler, false);
        document.addEventListener('MSFullscreenChange', exitHandler, false);
    }

    function exitHandler() {
        if (document.webkitIsFullScreen === false
                || document.mozFullScreen === false
                || document.msFullscreenElement === false) {
            cancelFullScreen();
        }
    }
    
    
});
function cookieunset() {
    $('.cookie-menu-header-mobile').css('width', '0px');
}