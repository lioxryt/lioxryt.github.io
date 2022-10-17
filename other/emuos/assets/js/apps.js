
  
  function openapp(app) {
  var appframe = document.getElementById("appframe");
  var controls = document.getElementById("controls");
  var header = document.getElementById("header");
  header.style.display = "none";
  controls.style.display = "flex";
  appframe.style.display = "initial";
  appframe.setAttribute("src", 'https://' + plink + app);
  }
      
  function closeapp() {
  var appframe = document.getElementById("appframe");
  var controls = document.getElementById("controls");
  var header = document.getElementById("header");
  header.style.display = "block";
  controls.style.display = "none";
  appframe.style.display = "none";
  appframe.setAttribute("src", "");
  }
  function reloadapp() {
    document.getElementById('appframe').src = document.getElementById('appframe').src
}
  function fullapp() {
    var appframe = document.getElementById("appframe")
    appframe.requestFullscreen()
  }
  function opentab() {
    var url = document.getElementById("appframe").src;
  
    var tabOrWindow = window.open(url, '_blank');
    closeapp();
    console.log('open in new tab')
    
     tabOrWindow.focus();
  }
  var plink = localStorage.getItem("plink")
  async function fetchapps() {
  let response = await fetch("/sites/apps.json")
  let json = await response.json()
  
  for (app in json) {
  var title = json[app].title
  var image = json[app].image
  var location = json[app].location
  var appelm = document.createElement("button")
  
  appelm.className = "app"
  appelm.setAttribute("onclick", 'openapp(' + '"'  + location + '"' + ')')
  document.getElementsByClassName("apps")[0].appendChild(appelm)
  
  var app = document.getElementsByClassName("app")[app]
  
  var imageelm = document.createElement("img")
  imageelm.className = "appimg"
  imageelm.src = image
  app.appendChild(imageelm)
  
  var titleelm = document.createElement("div")
  titleelm.innerText = title
  titleelm.className = "appinfo"
  app.appendChild(titleelm)
  }
  
  }
  
  fetchapps()
 
  
  