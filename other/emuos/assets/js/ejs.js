const gamewrap = document.querySelector(".game-wrap");
const game = document.querySelector("#game");
const gameindex = gamesArr.findIndex((element) => element.link == pageurl);

const gamename = game.dataset.gamename;
const core = game.dataset.core;
const gn = gamename.substring(0, gamename.lastIndexOf('.')) || gamename;

const ejsscript = document.createElement("script");
ejsscript.text = `
EJS_color = '#E77E7E';
      EJS_player = "#game";
      EJS_gameName = "${gn}";
      EJS_biosUrl = "";
      EJS_gameUrl = "games/emulatorjs/Pokemon_FireRed Version.zip";
      EJS_core = "${core}";
      EJS_pathtodata = "assets/js/ejs/";
      EJS_oldEJSNetplayServer = true;
      EJS_gameID = "${gameindex}";`;
gamewrap.appendChild(ejsscript);
const script = document.createElement("script");
script.src = "/assets/js/ejs/loader.js";
gamewrap.appendChild(script);
