const game = document.querySelector("#gameiframe");
var link = localStorage.getItem("plink")
var plink = 'https://' + link

if (link == "r.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'riframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (link == "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'r2iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (link == "r3.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/apps/apps.html#" + game.dataset.gamelink;
  game.setAttribute('id', 'r3iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
}
console.log(game.dataset.gamelink);
