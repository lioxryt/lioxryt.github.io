const gamesArr = [
    /*{
      filter: [`shoot`, `mp`],
      link: `sample`,
      imgsrc: `rooftop.jpg`,
      name: `Sample Game`,
      developer: `Sample Game Creator`,
      desc: `Sample Description`,
      controls: [`←/→ Arrow Keys: Move horizontally`]
    },*/
    {
      filter: [`misc`, `puzzle`],
      link: `2048`,
      imgsrc: `2048.png`,
      name: `2048`,
      developer: `Gabriele Cirulli`,
      desc: `2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
      controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
    },
    {
      filter: [`emu`],
      link: `emulatorjs`,
      imgsrc: `ejs.png`,
      name: `EmulatorJS`,
      developer: `ethanobrien`,
      desc: `The original decompilation of emulatorjs. Retroarch in your browser! Upload your own ROMS to play!
      
      - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".
  
      - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right
  
      - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
      controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
    },
    {
      filter: [`shoot`, `mp`, `fight`, `flash`],
      link: `gun-mayhem`,
      imgsrc: `gunmayhem.jpg`,
      name: `Gun Mayhem`,
      developer: `Kevin Gu`,
      desc: `Gun Mayhem is an extremely interesting flash format shooting game developed by Kevin Gu. The game is designed with 10 maps starting from prehistoric context to modern times. The player's task in this game is to destroy all enemies by shooting them down! Very simple, isn't it! Let's start the adventure now!`,
      controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
    },
    {
      filter: [`shoot`, `mp`, `fight`, `flash`],
      link: `gun-mayhem-2`,
      imgsrc: `gunmayhem2.jpg`,
      name: `Gun Mayhem 2`,
      developer: `Kevin Gu`,
      desc: `More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once! 
      Gun Mayhem returns with brand new maps, and much more:
      - New campaign with 16 progressively challenging missions
      - Challenge levels to test your skills
      - 7 custom game modes
      - New guns, perks, and customization options`,
      controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
    },
    {
      filter: [`shoot`, `mp`, `fight`, `flash`],
      link: `gun-mayhem-redux`,
      imgsrc: `gunmayhemredux.jpg`,
      name: `Gun Mayhem Redux`,
      developer: `Kevin Gu`,
      desc: `Gun Mayhem Redux which is the brand new chapter of Gun Mayhem, is now available. This chapter is little bit different compared to other chapters. For instance, game characters and war maps is minimized little bit to have a better view and game play but this doesn't cause the loose of excitement of the this superb game. 
      In this chapter, tens of brand new weapons will be awaiting you. Even, you will have a chance to war by using primitive weapons. The war resumes in the arena with the superior war maps and weapons and entertaining chapters!`,
      controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
    },
    {
      filter: [`plat`],
      link: `run-3`,
      imgsrc: `run3.jpg`,
      name: `Run 3`,
      developer: `Player03`,
      desc: `There’s a whole new galaxy waiting to be explored! You can play Run 3 in the Explore Mode and the Infinite Mode. To add more levels to your Galaxy Map, choose the Explore Mode. The Runner will encounter lots of new tunnels and areas, and may bump into some friends along the way!
      If the game is stuck on the loading screen and not loading, try disabling your adblocker.`,
      controls: [`WASD/Arrow Keys: Control movement`, `R: Reset`, `P: Pause`]
    },
    {
      filter: [`puzzle`, `misc`],
      link: `wordle-unlimited`,
      imgsrc: `wordle.png`,
      name: `Wordle Unlimited`,
      developer: `Josh Wardle`,
      desc: `Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!`,
      controls: [`Type to interact`]
    },
    {
      filter: [`puzzle`],
      link: `tetris`,
      imgsrc: `tetris.jpg`,
      name: `Tetris`,
      developer: `Kyle Shanks`,
      desc: `Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the rights in the late 1980s.`,
      controls: [`←/→ Arrow Keys: Move horizontally`, `↑: Rotate piece`, `↓: Soft Drop`, `P: Pause`, `Shift: Switch blocks`, `Space: Hard drop`, `R: Reset`]
    },
    {
      filter: [`sport`],
      link: `retro-bowl`,
      imgsrc: `retrobowl.jpg`,
      name: `Retro Bowl`,
      developer: `New Star Games`,
      desc: `Retro Bowl is an American style football game created by New Star Games. Are you ready to manage your dream team into victory? Be the boss of your NFL franchise, expand your roster, take care of your press duties to keep your team and fans happy.`,
      controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Drag to throw`]
    },
    {
      filter: [`shoot`, `flash`],
      link: `zombocalypse`,
      imgsrc: `zombocalypse.jpg`,
      name: `Zombocalypse`,
      developer: `John Funtanilla`,
      desc: `Only you, and a whole lot of hungry hungry zombies. Fortunately, you get constant airdrops to deliver fresh weapons and med kits. Now, if you can only live long enough to earn some achievements and unlock some bigger guns. When things get really hairy, call in an airstrike!`,
      controls: [`AD/← →: Control movement`, `S/↓: Pick up items`, `W/↑: Call airstrike`, `Space: Attack`, `Shift: Pause game`]
    },
    {
      filter: [`plat`],
      link: `super-mario-64`,
      imgsrc: `sm64.jpeg`,
      name: `Super Mario 64`,
      developer: `Nintendo, ported by sm64js`,
      desc: `Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first Super Mario game to feature 3D gameplay. It was developed by Nintendo EAD and published by Nintendo, now ported over to the web thanks to the folks over at sm64js!
      
      Note: The first key is the one you press, the second key is what it does in game (Ex: in game, it will say to press A. You would press "X" to achieve that.`,
      controls: [`Arrow Keys: Control movement`, `Enter: Start`, `X: A`, `C: B`, `Q: L`, `Space: Z`, `C-Stick: WASD`]
    },
    {
      filter: [`misc`],
      link: `adofai`,
      imgsrc: `adofai.png`,
      name: `A Dance of Fire and Ice`,
      developer: `7th Beat Games`,
      desc: `A Dance of Fire and Ice is a strict rhythm game.
    
      Keep your focus as you guide two orbiting planets along a winding path without breaking their perfect equilibrium.
      
      Press on every beat of the music to move in a line.
      
      Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.
  
      Check out the full game on Steam https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/`,
      controls: [`Use any keys to play`]
    },
    {
      filter: [`drive`],
      link: `madalin-stunt-cars-2`,
      imgsrc: `msc2.jpg`,
      name: `Madalin Stunt Cars 2`,
      developer: `Madalin Games`,
      desc: `Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps.
  
      Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2.
      
      Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.`,
      controls: [`WASD/Arrow Keys: Control movement`, `Shift: Nitrous`, `R: Respawn`, `T: Open map`, `C: Change camera`]
    },
    {
      filter: [`shoot`],
      link: `superhot`,
      imgsrc: `superhot.jpg`,
      name: `SUPERHOT`,
      developer: `SUPERHOT Team`,
      desc: `No regenerating health bars. No conveniently placed ammo drops. 
      It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.`,
      controls: [`WASD/Arrow Keys: Control movement`, `Space: Jump`, `Left Click: Shoot`]
    },
    {
      filter: [`plat`, `shoot`, `flash`],
      link: `my-friend-pedro`,
      imgsrc: `mfp.jpg`,
      name: `My Friend Pedro`,
      developer: `Dead Toast Entertainment`,
      desc: `An action packed slow motion face-blasting-simulator about friendship and imagination.`,
      controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Shoot`, `Shift/Space: Slow down time`]
    },
    {
      filter: [`shoot`, `mp`, `fight`],
      link: `rooftop-snipers`,
      imgsrc: `rooftop.jpg`,
      name: `Rooftop Snipers`,
      developer: `Pat Eichler`,
      desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
      controls: [`W/I: Jump`, `E/O: Shoot`]
    },
    {
      filter: [`mp`],
      link: `tube-jumpers`,
      imgsrc: `tj.jpg`,
      name: `Tube Jumpers`,
      developer: `Pat Eichler`,
      desc: `Tube Jumpers is local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
      controls: [`W/I: Jump`]
    },
    {
      filter: [`plat`],
      link: `slope`,
      imgsrc: `slope.jpg`,
      name: `Slope`,
      developer: `Rob Kay`,
      desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
      controls: [`AD/QE/Arrow Keys: Control movement`]
    },
    {
      filter: [`mp`, `shoot`, `fight`],
      link: `getaway-shootout`,
      imgsrc: `getaway-shootout.jpg`,
      name: `Getaway Shootout`,
      developer: `Pat Eichler`,
      desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
      controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
    },
    {
      filter: [`mp`],
      link: `eaglercraft`,
      imgsrc: `eaglercraft.png`,
      name: `Eaglercraft`,
      developer: `LAX1DUDE`,
      desc: `Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. You can join real Minecraft 1.5.2 servers with it through a custom proxy based on Bungeecord.
      
      If your keyboard inputs aren't registering, try refreshing the page.
  
      Want to join more servers? You can find supported servers here: https://g.eags.us/eaglercraft/servers`,
      controls: [`Controls can be modified ingame`]
    },
    {
      filter: [`emu`, `btn`],
      link: 'sm64',
      imgsrc: `mario64`,
      name: `Super Mario 64`
    },
    {
        filter: [`emu`],
      link: 'firered',
      imgsrc: `firered`,
      name: `Pokemon Fire Red`
    },
    {
        filter: [`ry`],
      link: 'tetris',
      imgsrc: `tetris`,
      name: `Tetris`
    },
    {
        filter: [`emu`],
      link: 'smash',
      imgsrc: `smashremix`,
      name: `Smash Remix`
    },
   
  ];
  const filters = [
    {
        filter: 'All',
        filterid: 'all',
        filterall: true,
        checked: true
    },
    {
        filter: 'Multiplayer',
        filterid: 'mp',
    },
    {
        filter: 'Emulator',
        filterid: 'emu',
    },
    {
        filter: 'Rhythm',
        filterid: 'ry',
    },
    {
        filter: 'Platformer',
        filterid: 'plat',
    },
    {
        filter: 'Horror',
        filterid: 'hor',
    },
    {
        filter: 'Sports',
        filterid: 'sp',
    },
    {
        filter: 'Shooters',
        filterid: 'shoot',
    },
    {
        filter: 'Other',
        filterid: 'ot',
    },
]

  //Fetch game count
  const gamescounter = document.getElementById("games-count");
  
  if (gamescounter != null) {
    gamescounter.innerText = gamesArr.length;
  }
  const buildFilters = function(filters) {
    const $span = document.createElement(`span`);
    $span.classList.add("relative", "flex", "shadow-lg", "shadow-gray-600", "dark:shadow-gray-900", "rounded-xl", "overflow-hidden", "hover:translate-y-[-0.125rem]", "transition", "ease-linear", "cursor-pointer");
    const $input = buildFiltersInput(filters);
    const $label = buildFiltersLabel(filters);

    
    $span.appendChild($input);
    $span.appendChild($label);
    return $span;
  };

  const buildFiltersInput = (filters) => {
    const $input = document.createElement(`input`);
    $input.setAttribute('type', 'checkbox');
    if (filters.filterall){
        $input.classList.add(`filter-all`);
    }
    $input.classList.add(`filter-input`);
    $input.setAttribute('name', 'filter');
    $input.id = filters.filterid;
    if (filters.checked){
        $input.setAttribute('checked', '');
    }
    return $input;
  }

  const buildFiltersLabel = function(filters) {
    const $label = document.createElement(`label`);
    $label.setAttribute('for', filters.filterid);
    $label.classList.add("filter-label", "font-bold", "tracking-tight");
    $label.setAttribute('autocomplete', 'off');
    if (filters.checked) {
        $label.setAttribute('checked', '');
    }
    $label.innerText = filters.filter;
    return $label;
  };

  const filtercategories = document.querySelector(".filter-categories");

  for (let i = 0; i < filters.length; i++) {
    let $f = buildFilters(filters[i]);
    filtercategories.appendChild($f);
  }

  