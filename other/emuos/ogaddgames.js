const buildfilterdiv = (games) => {
    const $divwrap = document.createElement("div");
    $divwrap.classList.add("filter-item");
    for (var i = 0; i < games.filter.length; i++){
        $divwrap.classList.add(games.filter[i]);
    }

    const $imgcontainer = buildimgcontainer(games);
    const $gridcardtext = buildgridcardtext(games);

    const $filtermask = document.createElement("div");
    $filtermask.classList.add("hover-div");

    const $back = document.createElement("div");
    $back.classList.add("back");

    $divwrap.appendChild($back);
    $divwrap.appendChild($imgcontainer);
    $divwrap.appendChild($gridcardtext);
    $divwrap.appendChild($filtermask);
    
    return $divwrap;
  };

  const buildimgcontainer = (games) => {
    const $imgcontainer = document.createElement("div"); //create div imagecontainer
    $imgcontainer.classList.add("img-container");

    const $anchor = document.createElement("a"); //create anchor tag inside that
    $anchor.href = "/" + games.link + ".html";

    const $imgtag = document.createElement("img"); //create the img tag
    $imgtag.setAttribute("decoding", "true")
    $imgtag.classList.add("hover-center");
    
    $imgtag.src = "/assets/img/games/" + games.imgsrc;
    $imgtag.alt = games.name; //alt is the same as the game's name

    $anchor.appendChild($imgtag);
    $imgcontainer.appendChild($anchor);

    return $imgcontainer;
  };

  const buildgridcardtext = (games) => {
    const $gridcardtext = document.createElement("div"); //create div gridcardtext
    $gridcardtext.classList.add("grid-card-text");

    const $p = document.createElement("p"); //create the p tag
    $p.classList.add("game-name");
    $p.innerText = games.name; //set the title

    const $h1 = document.createElement("h1"); //create h1 tag inside that
    $h1.classList.add("text-lg text-white md:text-xl 2xl:text-2xl font-extrabold tracking-tight");
    $h1.innerText = "by " + games.developer;

    $gridcardtext.appendChild($p);
    $gridcardtext.appendChild($h1);

    return $gridcardtext;
  };

  const filterwrap = document.querySelector(".filter-wrap");

  for (let i = 0; i < gamesArr.length; i++) {
    let $item = buildfilterdiv(gamesArr[i]);
    filterwrap.appendChild($item);
  }

//Create element for no filter matched
const $noitem = document.createElement("div");
$noitem.classList.add("filter-no-item");
$noitem.innerText = "Sorry, no games match your filter selections";
document.querySelector(".filter-wrap").appendChild($noitem);

//Random game
const randGame = () => {
  for (let i = 0; i < gamesArr.length; i++){
    let randInd = Math.floor(Math.random() * gamesArr.length);
    window.location = "/" + gamesArr[randInd].link + ".html";
  }
}