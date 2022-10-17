//Autofocus without scroll
document.querySelector("#userinput").focus({
    preventScroll: true
});

const image_preview = document.getElementById("image-preview");
const console_output = document.getElementById("console-output");

//Change tabTitle
const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("title");
        window.document.title = "Settings"
        document.getElementById("console-output").style.color = "red"; //error = red
        console_output.innerText = "No title entered. Default applied" //return output successful
    } else {
        window.localStorage.setItem("title", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
        document.getElementById("console-output").style.color = null; //reset output's color to green
        console_output.innerText = "Title change successful" //return output successful
    }
    newtitle.value = ""; //clear input
};
function TabTitle(newtitle)  {
    if (newtitle == ""){ //check if the input is blank when they submit
        console.log(newtitle + ' empty')
        window.localStorage.removeItem("title");
        window.document.title = "Settings"
        document.getElementById("console-output").style.color = "red"; //error = red
        console_output.innerText = "No title entered. Default applied" //return output successful
    } else {
        console.log(newtitle)
        window.localStorage.setItem("title", newtitle);
        window.document.title = newtitle; //Set window's title to userinput
        document.getElementById("console-output").style.color = null; //reset output's color to green
        console_output.innerText = "Title change successful" //return output successful
    }
};

//Change the tabIcon
const changeTabIcon = () => {
    const newfavicon = document.getElementById("userinput");
    if (validURL(newfavicon.value)){
        document.head.querySelector("link[rel=icon]").href = newfavicon.value;
        window.localStorage.setItem("icon", newfavicon.value);
        loadPreview();
        document.getElementById("console-output").style.color = null;
        console_output.innerText = "Icon change successful"
    } else {
        document.getElementById("console-output").style.color = "red";
        console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
    }
    newfavicon.value = ""; //clear input
};
function TabIcon(newfavicon) {
   
    if (validURL(newfavicon)){
        document.head.querySelector("link[rel=icon]").href = newfavicon;
        window.localStorage.setItem("icon", newfavicon);
        loadPreview();
        document.getElementById("console-output").style.color = null;
        console_output.innerText = "Icon change successful"
    } else {
        document.getElementById("console-output").style.color = "red";
        console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
    }
};

//Load preview of image
const loadPreview = () => {
    image_preview.setAttribute("src", localStorage.getItem("icon"));
};

//Clears Tab Icon and Title
const resetTabSettings = () => {
    let items = ["icon", "title"];
    items.forEach(item =>
    window.localStorage.removeItem(item));
    window.location.reload();
};

//URL Validation Regex
const validURL = (str) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    return !!regex.test(str);
}
var appearance = localStorage.getItem("appearance")

if (localStorage.getItem("appearance") !== null) {
    console.log(appearance)
document.getElementsByTagName("body")[0].setAttribute("appearance", appearance)
document.querySelectorAll(".tabtheme").forEach(e => e.classList.remove("tabbuttonactive"));
document.querySelector(".tabtheme[theme='" + appearance + "']").classList.add("tabbuttonactive")
} else {
    console.log('null')
localStorage.setItem("appearance", "default")
document.getElementsByTagName("body")[0].setAttribute("appearance", "default")
}

function setapp(theme) {
  localStorage.setItem("appearance", theme)
  console.log(theme + ' theme')
  document.querySelectorAll(".tabtheme").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabtheme[theme='" + theme + "']").classList.add("tabbuttonactive")
  document.getElementsByTagName("body")[0].setAttribute("appearance", theme)
if (!localStorage.getItem("favicon")) {
setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
}
}

var background = localStorage.getItem("background") || "none"
document.querySelector(".tabbg[bg='" + background + "']").classList.add("tabbuttonactive")

function setbg(bg) {
    document.querySelectorAll(".tabbg").forEach(e =>  e.classList.remove("tabbuttonactive"));
    localStorage.setItem("background", bg)
    console.log('set ' + bg)
    document.querySelector(".tabbg[bg='" + bg + "']").classList.add("tabbuttonactive")
    if (bg == "default") {
    loadParticles()
    } else if (bg == "stars") {
    loadStars()
    } else if (bg == "none") {
    destroySquares()
    destroyParticles()
    } else if (bg == "squares") {
        
    loadSquares()
    }
    }

    var sel = localStorage.getItem("plink") || "none"
    document.querySelector(".tabp[p='" + sel + "']").classList.add("tabbuttonactive")

    function pselection(link) {
        localStorage.setItem("plink", link);
        console.log(link);
        document.querySelectorAll(".tabp").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabp[p='" + link + "']").classList.add("tabbuttonactive")
      }
      function setgoogle() {
        TabTitle("Google")
        TabIcon("https://www.google.com/favicon.ico")
      }
      
      function setgoogled() {
        TabTitle("Google Drive")
        TabIcon("https://www.drive.google.com/favicon.ico")
      }
      
      function setedpuzzle() {
        TabTitle("Edpuzzle")
        TabIcon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
      }
      
      function setzoom() {
        TabTitle("Zoom")
        TabIcon("https://st1.zoom.us/zoom.ico")
      }
      function setcanvas() {
        TabTitle("Canvas")
        TabIcon("https://du11hjcvx0uqb.cloudfront.net/favicon.ico")
      }
      
      function setreset() {
        localStorage.removeItem("title")
        localStorage.removeItem("icon")
        document.title = "Settings"
        document.getElementById("userinput").value = ""
      }