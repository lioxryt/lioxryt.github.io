from jsmin import jsmin

eagswebrtc_file = open("./eagswebrtc.js", "r")
eagswebrtc = eagswebrtc_file.read()
eagswebrtc_file.close()

classes_js_file = open("./classes.js", "r")
classes_js = classes_js_file.read()
classes_js_file.close()

classes_js_server_file = open("./classes_server.js", "r")
classes_js_server = classes_js_server_file.read()
classes_js_server_file.close()

classes_js_server_map_file = open("./classes_server.js.map", "r")
classes_js_server_map = classes_js_server_map_file.read()
classes_js_server_map_file.close()

classes_js_map_file = open("./classes.js.map", "r")
classes_js_map = classes_js_map_file.read()
classes_js_map_file.close()

assets_file = open("./assets.txt", "r")
assets = assets_file.read()
assets_file.close()

data = """
<!DOCTYPE html>
<html>
<head>
<title>My Drive - Google Drive</title>
<script type="text/javascript">
function createWorkerURI(el) {
	var eee = document.getElementById(el);
	var str = eee.innerHTML;
	eee.remove();
	str = `onmessage = function(o) { eaglercraftServerOpts = o.data; main(); };
    ` + str;
	return URL.createObjectURL(new Blob([str], {type:"text/javascript"}));
}
</script>
<script type="text/javascript">
window.addEventListener("load", function() {
                            const relayId = Math.floor(Math.random() * 3);
                            window.eaglercraftOpts = {
                                    container: "game_frame", assetsURI: getAssetsURI(),
                                    serverWorkerURI: createWorkerURI("sp_worker"),
                                    worldsFolder: "TEST", mainMenu: { splashes: [
                                    "Darviglet!", "eaglerenophile!", "You Eagler!", "Yeeeeeee!", "yeee",
                                    "EEEEEEEEE!", "You Darvig!", "You Vigg!", ":>", "|>", "You Yumpster!"
                                    ]}, worldsFolder: "OFFLINE", serverListTitle: "Ayonull hosts a list of servers:",
                                    serverListLink: "https://eagler.nully.tech/servers", relays: [
                                    { addr: "wss://relay.deev.is/", name: "lax1dude relay #1", primary: relayId == 0 },
                            { addr: "wss://relay.lax1dude.net/", name: "lax1dude relay #2", primary: relayId == 1 },
                            { addr: "wss://relay.shhnowisnottheti.me/", name: "ayunami relay #1", primary: relayId == 2 } ]
                            };
                            main();

});
</script>
"""+assets+"""

<link type="image/png" rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGAUlEQVRYw7VXa0xTZxj+oKjJNjWZ10EtZqIQjBdsT2utlZYiMsfiZltUtpiYOZ0zceOmcZfsGLmoQ25hS1jmNJpBL1xEuWwZGduPjW0xcVniLn/YfmlrK6wDRulpz7v3O+1BCgUs4pc8+U5Ov6/P877v837nHEKiGzHEZpYQVhcXEfQ3uuaJjOCfP9pSG5E8GXIzmS+r0Rtk1bqcxCrti+NB76XVaA3EzM6fUxHmELmm7bXkjVde6pPV6WD1x/owyBDrEaTOAD9fTeqDLpJM98CciIBgTRVW0211Rx4k1WWOSiu0flnlDgGrEBsQpELnZz9hRuErAqNNMb8IW+Ex/SCvPzJPILebjm69eQAYm8m7+doeWHVRC0guIBGxDkEupsPfDSsBmokXumLB10TeFETUk3mPFbmq89VFCovJxdhNIG80BhirCVLqd4G0Yjtg9LC5UgvkIx1c/XQTJQevXRLgWwj47MSFJVg860yMRW81VW1tPwCKRqNPYTECxZaGV2B1VTqswUw8jZFrq7ZDv/UZ8Ddh+u0xCOKDL1FEM6maVRZE46ls5lSFNUiK4IW50Qg0C6mXdsPmCg2QCj10f54iRD9il1Bymn6ezhwVZCOpURtSFIDkHaob+yk5J0YvQoMg1YbA0RpVwGsnAvEEcNAhiOiISoCuB080HEqLKUfVti8iOcU2qylArr0MfzTIaPQoQjJJBGZCEOG3kxxBRA+Jm/moDQ2M/jdlSy4l808kZ1DUdswMseW2IHkLdCI5kkXIgh/aaFuS3x96expDisaTW4wFE403DtQLvBa7gjS/nogCEgMt4bWfAMGQWIqC6Q3JsrF0SrOZl2HbebDnHxpvPFAUFYciq8WtSFxNSShZBAG8v1kQ50EfLBNEsCQ2QvTyYNtZjPVC9JaI0QfoeYDlcctt5sVjaf2aLEYCd6j/AxGz0IVeaCb1dP2tiVkQXS+37NvC2M1ItJePZDwqiopjbMZjwsYeNk40Fgo4RkmmyIKQCWgl1LBbJnUFC8H0Y2TfTON8v7IVTYnPhImGFY2FIm7DjaD5JgmgHdEuZKgndDrGhrUdYzXmBnt+LzdF9ChgH2AJDMI+VjfWUlhT4ZprJQa4OYUA8WzoFMTkhrVlUm3tAoUlr49pysPzfn9A0YhCwoGpP4gi8q7T9S/Udi4w20CiY3viKAhed+I9+pvXvu46dD0HPhuWwhYLExCAVpztsX1Qm7RgrASMfdMhdZcWa7vNh4BwqHllkwYUNqUnpZssmfEZ9hNZgrX2+NsWga+V8AgIQwsashsNeZ0cGtuUVP49m1x9B9aW9/qSynshqfyHEHrpPf758z+C4vyduzvLfA0ZZcOthnJvU0bZf83jocd7e8oGW8k5+OJbtuHuaAGBB/lKfiA/FQby10NwToV/8tf74PRG8BSlsmMClr41ol9ZNAorTvT7V7zdDyJWIpaf6AfZOwO8vsQPu6oAsi5OjWyEAdfknBmCv3Yc5N1pa8HBaMCpUD0Eo/IPKdXgStDoxR4U2iGh2HFD+t4wxBfd4xKK7tEZpIhlhXdBxfZDZvkQry8d4jJKh6fF7pJ/uacucPxnhb3g2UHAma2D+1kKBAOuLIbz7t4Krl3MTeG9kdD2DwmIP+lKji908vGFDkDwCTgvL7gH6065wFA6BBlRIAuxoWwEfs1lYYCKyNSCy8Dw9w0MULiz5CnBd13xTfvILeFkii92VkjfH0UBTh8VsKLAAZozHjCUDUclILtkENaUj8KZ03/Cg3QJ3M/UUGIfl62mQiqE01AuH3caAggHydKTroXxRU6ntNgNSwscgQ3vuiETyfVRZoACSwGScxx8d+gSeDQk4M7SU3KnS6NZGPmpGMqCtNh1OOEDPyQUOUbSzw5yBqG2Q1FjZ8kgx5SNcG986OAcmeoRyE4D107t4cnRhzVxMBPPFjra1RfQ1ZUhh1fODntwL6kB6D51C4bUpH3G9wFRAF7E6EqHj2Ptr2A0l9HdswKa97IW/2P/Wc9xkRhm/HYcEzH3Ax79wxUzwELcXIFFwBP7an7M8T8H1bLLDGWzFAAAAABJRU5ErkJggg==" />
<script type="text/javascript">"""+classes_js+classes_js_map+"""
</script>
<script type="text/javascript">"""+eagswebrtc+"""
</script>
<script type="text/eaglerworker" id="sp_worker">"""+classes_js_server+classes_js_server_map+"""
</script>
</head>
<body style="margin:0px;width:100vw;height:100vh;font-family:sans-serif;" id="game_frame">
</body>
</html>
"""

output = open("output.html", "w")
output.write(data)
output.close()