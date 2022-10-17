const app = document.querySelector("#appiframe");
var plink = localStorage.getItem("plink")
var sitesrc = 'https://' + plink

if (plink == "r.emulatoros.ga") {
  console.log('start ' + sitesrc + ' change');
  var site = sitesrc + "/" + app.dataset.applink;
  app.setAttribute('id', 'riframe');
  app.setAttribute('allowfullscreen', 'true')
  app.setAttribute('scrolling', 'yes')
  app.src = site;
  console.log('finish ' + sitesrc + ' change link');
} else if (plink == "r2.emulatoros.ga") {
  console.log('start ' + sitesrc + ' change');
  var site = sitesrc + "/" + app.dataset.applink;
  app.setAttribute('id', 'r2iframe');
  app.setAttribute('allowfullscreen', 'true')
  app.setAttribute('scrolling', 'yes')
  app.src = site;
  console.log('finish ' + sitesrc + ' change link');
} else if (plink == "r3.emulatoros.ga") {
  console.log('start ' + sitesrc + ' change');
  var site = sitesrc + "/" + app.dataset.applink;
  app.setAttribute('id', 'r3iframe');
  app.setAttribute('allowfullscreen', 'true')
  app.setAttribute('scrolling', 'yes')
  app.src = site;
  console.log('finish ' + sitesrc + ' change link');
}
console.log(app.dataset.applink);
