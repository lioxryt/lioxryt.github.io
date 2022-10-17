const buildfilterdiv = (games) => {
    const $divwrap = document.createElement("div");
    $divwrap.classList.add("relative", "w-full", "h-48", "shadow-lg", "shadow-gray-600", "dark:shadow-gray-900", "rounded-xl", "overflow-hidden", "hover:translate-y-[-0.125rem]", "transition", "ease-linear", "cursor-pointer", "filter-item");
    for (var i = 0; i < games.filter.length; i++){
        $divwrap.classList.add(games.filter[i]);
    }
    const $imgcontainer = buildimgcontainer(games);
    const $gridcardtext = buildgridcardtext(games);

    const $filtermask = document.createElement("div");
    $filtermask.classList.add("filter-mask", "absolute", "inset-0", "w-full", "h-full", "border-transparent", "border-5", "hover:border-primary", "rounded-xl", "ease-linear", "transition");
    $($filtermask).click(function(event) {
      window.location.href = "/games/" + games.link
  });
    const $back = document.createElement("div");
    $back.classList.add("w-full", "h-full", "bg-gray-400", "rounded-2xl", "animate-pulse");

    $divwrap.appendChild($back);
    $divwrap.appendChild($imgcontainer);
    $divwrap.appendChild($gridcardtext);
    $divwrap.appendChild($filtermask)
    return $divwrap;
  };

  const buildimgcontainer = (games) => {
    const $imgcontainer = document.createElement("span"); //create div imagecontainer
    $imgcontainer.setAttribute("style", "box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;");
    

    const $imgtag = document.createElement("img"); //create the img tag
    $imgtag.setAttribute("decoding", "async");
    $imgtag.setAttribute("sizes","100vw")
    $imgtag.setAttribute("style","position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;");
    $imgtag.src = "/img/" + games.imgsrc + '.webp?&amp;w=3840&amp;q=75';
    $imgtag.alt = games.name; //alt is the same as the game's name

    const $imgback = document.createElement("img");
    $imgback.setAttribute("decoding", "async");
    $imgback.setAttribute("style","position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;");
    $imgback.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    $imgback.alt = games.name; //alt is the same as the game's name
   
    const $nsrcipt = document.createElement("noscript");

    $imgcontainer.appendChild($imgtag, $nsrcipt);
    $nsrcipt.appendChild($imgback);

    return $imgcontainer;
  };

  const buildgridcardtext = (games) => {
    const $gridcardtext = document.createElement("div"); //create div gridcardtext
    $gridcardtext.classList.add("bg-gradient-to-b", "from-transparent", "to-gray-900", "absolute", "inset-0");

    const $gridcardtextdiv = document.createElement("div"); //create div gridcardtext
    $gridcardtextdiv.classList.add("absolute","bottom-0", "p-4");

    const $p = document.createElement("h1"); //create the p tag
    $p.classList.add("text-lg", "text-white", "md:text-xl", "2xl:text-2xl", "font-extrabold", "tracking-tight");
    $p.innerText = games.name; //set the title


    $gridcardtext.appendChild($gridcardtextdiv);
    $gridcardtextdiv.appendChild($p)

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
let parent = document.querySelector('.adcontainer').parentElement;

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}
