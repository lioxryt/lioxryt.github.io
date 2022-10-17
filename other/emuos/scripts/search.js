
function searchurl(url) {
    pxyopen("https://www.google.com/search?q=" + url);
 
}

function getproxy(url) {
    var currentproxy = localStorage.getItem("plink");
  var plink = "https://" + currentproxy
  return plink + "/apps/apps.html#" + url
  
}

function pxyopen(url) {
  
    console.log("!==");
    var surf = document.getElementById("surf");
    var controls = document.getElementById("controls");
    var header = document.getElementById("header");
    var particles = document.getElementById("particles-js");
    header.style.display = "none";
    particles.style.display = "none";
    controls.style.display = "flex";
    surf.style.display = "initial";
    surf.setAttribute("src", getproxy(url));
    document.getElementById("search").value = "";
  }


function go(url) {
    pxyopen(url);
}

window.onload = function () {
  search = document.getElementById("search");
  search.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      go(search.value);
    }
  });
};

function closesurf() {
  var surf = document.getElementById("surf");
  
  var controls = document.getElementById("controls");
  var navtitle = document.getElementById("nav-title");
  var header = document.getElementById("header");
  var particles = document.getElementById("particles-js");
  header.style.display = "block";
  particles.style.display = "block";
  controls.style.display = "none";
  surf.style.display = "none";
  surf.setAttribute("src", "");
  navtitle.innerText = "Loading...";
  document.title = 'EmulatorOS';
  document.querySelector("link[rel=icon]").href = 'assets/icon.png';
}

function reloadsurf() {
    document.getElementById('surf').src = document.getElementById('surf').src
}

function fullscreensurf() {
  var surf = document.getElementById("surf");
  surf.contentWindow.location.reload();
}

function opensurf() {
  var blank = localStorage.getItem("aboutBlankCloaking");
  if (blank == 'true') {
    console.log('blank')
    var url = document.getElementById("surf").src;
    win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            console.log(iframe.src)
            win.document.body.appendChild(iframe)
            closesurf();
  }

  else {
    console.log('else')
  var url = document.getElementById("surf").src;
  
  var tabOrWindow = window.open(url, '_blank');
  closesurf();
  console.log('open in new tab')
  
   tabOrWindow.focus();
  }
}
var currentproxy = localStorage.getItem("proxy");
var rhodium = document.getElementById("rhodium");
var corrosion = document.getElementById("corrosion");
var ultraviolet = document.getElementById("ultraviolet");
var stomp = document.getElementById("stomp");

if (localStorage.getItem("proxy") !== null) {
  var currentproxy2 = currentproxy.toLowerCase();
  document.getElementById(currentproxy2).classList.add("proxysel");
}

function setproxy(proxy) {
  localStorage.setItem("proxy", proxy);
  if (proxy == "Rhodium") {
    rhodium.classList.add("proxysel");
    corrosion.classList.remove("proxysel");
    ultraviolet.classList.remove("proxysel");
  } else if (proxy == "Corrosion") {
    rhodium.classList.remove("proxysel");
    ultraviolet.classList.remove("proxysel");
    corrosion.classList.add("proxysel");
  } else if (proxy == "Ultraviolet") {
    rhodium.classList.remove("proxysel");
    corrosion.classList.remove("proxysel");
    ultraviolet.classList.add("proxysel");
  }
}

function hidesugg() {
  document.getElementById("omnibox").style.borderRadius = "5px";
  document.getElementById("suggestions").style.display = "none";
}

function showsugg() {
  document.getElementById("omnibox").style.borderRadius = "5px 5px 0 0";
  document.getElementById("suggestions").style.display = "inherit";
}

function sugggo(suggtext) {
  if (localStorage.getItem("proxy") !== null) {
    console.log("!== 2");
    go(suggtext);
    document.getElementById("search").value = "";
    hidesugg();
  }
}

window.addEventListener("load", function () {
  var search = document.getElementById("search");
  search.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode == 13)
      if (this.value !== "") {
        go(this.value);
        this.value = "";
      }
  });

  

  
});

function hidesuggclick() {
  if (
    window.event.srcElement.id !== "search" &&
    window.event.srcElement.id !== "suggestions" &&
    window.event.srcElement.className !== "sugg"
  ) {
    hidesugg();
  }
}

document.onclick = hidesuggclick;

function fullscreensurf() {
  var surf = document.getElementById("surf");
  surf.requestFullscreen();
}

function setTabTitle(title) {
  if (title) {
    var navtitle = document.getElementById("nav-title");
    navtitle.innerText = title;
    document.title = title;
  } else {
    var navtitle = document.getElementById("nav-title");
    var surf = document.getElementById("surf");
    navtitle.innerText = surf.contentWindow.location.host;
  }
}

function setTabIcon(favicon) {
  if (favicon) {
    var navicon = document.getElementById("nav-icon");
    navicon.src = favicon;
  } else {
    var navicon = document.getElementById("nav-icon");
    navicon.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyek00IDEyaDQuNGMzLjQwNy4wMjIgNC45MjIgMS43MyA0LjU0MyA1LjEyN0g5LjQ4OHYyLjQ3YTguMDA0IDguMDA0IDAgMDAxMC40OTgtOC4wODNDMTkuMzI3IDEyLjUwNCAxOC4zMzIgMTMgMTcgMTNjLTIuMTM3IDAtMy4yMDYtLjkxNi0zLjIwNi0yLjc1aC0zLjc0OGMtLjI3NC0yLjcyOC42ODMtNC4wOTIgMi44Ny00LjA5MiAwLS45NzUuMzI3LTEuNTk3LjgxMS0xLjk3QTguMDA0IDguMDA0IDAgMDA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg==";
  }
}

surf.addEventListener("load", function () {
  var navtitle = document.getElementById("nav-title");
  var navicon = document.getElementById("nav-icon");

  if (surf.contentWindow.location.toString() == "about:blank") {
    return {
      name: (navtitle.innerText = "Loading..."),
      favicon: (navicon.src = ""),
    };
  }

  var initTitle = surf.contentWindow.document.title;
  setTabTitle(initTitle);
  console.log(initTitle);

  var initFavicon = null;
  var icon =
    surf.contentWindow.document.querySelector("link[rel='icon']") || null;
  var shortcuticon =
    surf.contentWindow.document.querySelector("link[rel='shortcut icon']") ||
    null;
  if (icon) {
    initFavicon = new URL(surf.contentWindow.document.querySelector("link[rel='icon']").getAttribute("href"), surf.contentWindow.document.baseURI).toString();
    document.querySelector("link[rel=icon]").href = initFavicon;
    console.log('icon is ' + initFavicon)
  } else if (shortcuticon) {
    initFavicon = new URL(surf.contentWindow.document.querySelector("link[rel='shortcut icon']").getAttribute("href"), surf.contentWindow.document.baseURI).toString();
    document.querySelector("link[rel=shortcut icon]").href = initFavicon;
  }
  if (initFavicon == surf.contentWindow.document.baseURI) {
    initFavicon = null;
    console.log('favicon is null')
  }
  setTabIcon(initFavicon);
});

var gosurf = localStorage.getItem("go") || "default";
document.body.setAttribute("go", gosurf);
