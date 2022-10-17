
  const gamewrap = document.querySelector(".game-wrap");
  const game = document.querySelector("#game");
  const gameindex = gamesArr.findIndex((element) => element.link == pageurl);
  
  const gamename = game.dataset.gamename;
  const core = game.dataset.core;
  const gn = gamename.substring(0, gamename.lastIndexOf('.')) || gamename;
  
  const ejsscript = document.createElement("script");
  ejsscript.text = `
  EJS_color = '#800080';
        EJS_player = "#game";
        EJS_gameName = "${gn}";
        EJS_biosUrl = "";
        EJS_gameUrl = "gdata/${gamename}";
        EJS_core = "${core}";
        EJS_pathtodata = "data/";
        EJS_oldEJSNetplayServer = true;
        EJS_gameID = "${gameindex}";`;
  gamewrap.appendChild(ejsscript);
  const script = document.createElement("script");
  script.src = "data/loader.js";
  gamewrap.appendChild(script);
  