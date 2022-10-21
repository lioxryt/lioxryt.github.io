!function() {
  function buildRedirectOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('redirect-overlay');
    overlay.setAttribute('id', 'redirect-overlay');
    return overlay;
  }

  function buildRedirectText() {
    const textNode = document.createTextNode('Play ' + pathToGameName(currentPath) + ' on the following link: ');
    const textSpan = document.createElement('span');
    const a = document.createElement('a');
    a.href = redirectToUrl;
    a.text = redirectToUrl;
    a.target = '_blank';
    textSpan.classList.add('redirect-text');
    textSpan.appendChild(textNode);
    textSpan.appendChild(a);
    return textSpan;
  }

  function parseHost(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return parser.host;
  }

  function pathToGameName(path) {
    return path.split('/').reverse()[1].replace(/_/g, ' ');
  }

  const whitelist = [
    'y8.lvh.me:3000',
    'static.y8.lvh.me:3000',
    'www.y8.com',
    'ru.y8.com',
    'fr.y8.com',
    'de.y8.com',
    'it.y8.com',
    'el.y8.com',
    'he.y8.com',
    'hi.y8.com',
    'ro.y8.com',
    'es.y8.com',
    'tl.y8.com',
    'th.y8.com',
    'zh.y8.com',
    'nl.y8.com',
    'vi.y8.com',
    'tr.y8.com',
    'pt.y8.com',
    'pl.y8.com',
    'ko.y8.com',
    'ja.y8.com',
    'id.y8.com',
    'ar.y8.com',
    'www.pog.com',
    'ru.pog.com',
    'fr.pog.com',
    'de.pog.com',
    'it.pog.com',
    'el.pog.com',
    'he.pog.com',
    'hi.pog.com',
    'ro.pog.com',
    'es.pog.com',
    'tl.pog.com',
    'th.pog.com',
    'zh.pog.com',
    'nl.pog.com',
    'vi.pog.com',
    'tr.pog.com',
    'pt.pog.com',
    'pl.pog.com',
    'ko.pog.com',
    'ja.pog.com',
    'id.pog.com',
    'ar.pog.com',
    'www.gamepost.com',
    'ru.gamepost.com',
    'fr.gamepost.com',
    'de.gamepost.com',
    'it.gamepost.com',
    'el.gamepost.com',
    'he.gamepost.com',
    'hi.gamepost.com',
    'ro.gamepost.com',
    'es.gamepost.com',
    'tl.gamepost.com',
    'th.gamepost.com',
    'zh.gamepost.com',
    'nl.gamepost.com',
    'vi.gamepost.com',
    'tr.gamepost.com',
    'pt.gamepost.com',
    'pl.gamepost.com',
    'ko.gamepost.com',
    'ja.gamepost.com',
    'id.gamepost.com',
    'ar.gamepost.com',
    'www.dollmania.com',
    'ru.dollmania.com',
    'fr.dollmania.com',
    'de.dollmania.com',
    'it.dollmania.com',
    'el.dollmania.com',
    'he.dollmania.com',
    'hi.dollmania.com',
    'ro.dollmania.com',
    'es.dollmania.com',
    'tl.dollmania.com',
    'th.dollmania.com',
    'zh.dollmania.com',
    'nl.dollmania.com',
    'vi.dollmania.com',
    'tr.dollmania.com',
    'pt.dollmania.com',
    'pl.dollmania.com',
    'ko.dollmania.com',
    'ja.dollmania.com',
    'id.dollmania.com',
    'ar.dollmania.com',
    'www.a10.com',
    'www.agame.com',
    'www.flashgames.ru',
    'www.games.co.id',
    'www.games.co.uk',
    'www.gamesgames.com',
    'www.giochi.it',
    'www.gioco.it',
    'www.girlsgogames.co.id',
    'www.girlsgogames.co.uk',
    'www.girlsgogames.com',
    'www.girlsgogames.de',
    'www.girlsgogames.fr',
    'www.girlsgogames.it',
    'www.girlsgogames.pl',
    'www.girlsgogames.ru',
    'www.gry.pl',
    'www.jetzspielen.de',
    'www.jeu.fr',
    'www.jeux.fr',
    'www.juegos.com',
    'www.juegosdechicas.com',
    'www.mousebreaker.com',
    'www.ojogos.com.br',
    'www.ourgames.ru',
    'www.oyunoyna.com',
    'www.oyunskor.com',
    'www.permainan.co.id',
    'www.spel.nl',
    'www.spela.se',
    'www.spelletjes.nl',
    'www.spielen.com',
    'www.freefalltournament.com',
  ];

  const currentPath = window.location.pathname;
  const referrer = document.referrer;
  const redirectToUrl = y8Urls[currentPath];
  const host = parseHost(referrer);

  if (redirectToUrl && whitelist.indexOf(host) === -1) {
    const redirectOverlay = buildRedirectOverlay();
    redirectOverlay.appendChild(buildRedirectText());

    document.addEventListener('DOMContentLoaded', function() {
      var root = document.getElementsByClassName('webgl-content')[0];

      if (!root) {
        root = document.getElementsByClassName('template-wrap')[0];
      }

      root.appendChild(redirectOverlay);
    });
  }
}();
