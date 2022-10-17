document.body.style.fontFamily = "var(--font)";
document.body.style.backgroundColor = "var(--bg)";
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
} else {
  document.querySelector("link[rel=icon]").href = '/assets/icon.png';
}
if (localStorage.getItem("appearance") == "neon") {
  var cssElm = document.createElement("link");
  cssElm.setAttribute("href", "/neon.css");
  cssElm.setAttribute("rel", "stylesheet");
  cssElm.setAttribute("id", "neoncss");
  document.head.appendChild(cssElm);

  console.log("neon");
}
if (localStorage.getItem("background") == null) {
  localStorage.setItem("background", "default")
  }
if (localStorage.getItem("appearance") !== "neon") {
  if (document.getElementById('neoncss')) {
  const link = document.getElementById("neoncss");
  console.log(link);
  link.remove();

  console.log("remove neon");
  }
}

function setLogo(highlight) {
  document.querySelector("link[rel='icon']").href = "/assets/icon.png";
}
function getLogo(highlight = "#2493ff") {
  console.log("for later update setlogo()");
}
var appearance = localStorage.getItem("appearance");

if (localStorage.hasOwnProperty("appearance")) {
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", appearance);
  setLogo(
    getComputedStyle(document.body)
      .getPropertyValue("--highlight")
      .replaceAll(" ", "")
  );
} else {
  localStorage.setItem("appearance", "default");
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", "default");
}

$("#icon").hover(function(){
  enter('#icon');
  }, function(){
  leave('#icon');
});
$("#icon2").hover(function(){
  enter('#icon2');
  }, function(){
  leave('#icon2');
});
 
    $("#icon3").hover(function(){
      enter('#icon3');
      }, function(){
      leave('#icon3');
    });
    $("#icon4").hover(function(){
      enter('#icon4');
      }, function(){
      leave('#icon4');
    });


    var r = document.querySelector('body');
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    var ubg = rs.getPropertyValue('--ubg')
    var shadow = rs.getPropertyValue('--shadow')

    function enter(id) {
      console.log('enter ' + id)
      $(id).animate({ top: '-4px', color: ubg }, 100, function(){ 
      });
    }
    function leave(id) {
      console.log('leave ' + id)
      $(id).animate({ top: '0px',color: shadow }, 100, function(){ 
      });
    }
   