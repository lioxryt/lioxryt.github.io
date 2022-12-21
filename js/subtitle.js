function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "The tech teams worst nightmare.";
say[1] = "Better than coolmathgames";
say[2] = "HEY! is this thing on";
say[3] = "Don't get caught";
say[4] = "There is definitely no games here";
say[5] = "ONG";
say[6] = "🤨";
say[7] = "This project was made possible due to extensive use of narcotics";
say[8] = "Last chance to look at me Hector";
say[9] = "👋hello👋 and welcome to the Los Pollos hermanos 👪family👪👪 my name📛 is Gustavo but you can 📲call 📲 me Gus";
say[10] = "According to all known laws of aviation,  : there is no way a bee should be able to fly.";
say[11] = "amojngus ahdahahahayah i scab cab  cab can spell correctky ahahahha your bad and im gododd";
say[12] = "no school, no need to block this";
say[13] = "I made it mom! I'm on a randomized subtitle!";
say[14] = "Playing games in my class, ay?";
say[15] = "A moment of silence for adobe flash player";
say[16] = "Whats my name? You're Heisenberg. You're God Damn Right";
say[17] = "Anyone remember when the background was white? No? Just me?";
say[18] = "If you are over 25 and own a computer, you wont last 5 seconds playing these games";
say[19] = "only in ohio 💀";
say[20] = "The Rizzard of Oz";
say[21] = "We have a Discord Now";
say[22] = "the god made this site";
say[23] = "good soup 🍲";
say[24] = "You wouldn't download a car?";
say[25] = "L for Coolmath. This site is better still.";
say[26] = "Jessie you were supposed to get a plastic container";
say[27] = "N Gon go hard on this site";
say[28] = "This is just schoology ok? idk or what i think this is a glitch";
say[29] = "oooohhhh mario's tunnel of doom very scary";
say[30] = "goofy ahh no admins";
say[31] = "(Hello this is the principal of Elmer High, please stop playing games and take down this site.)-Some Bum Loser Probably";
say[32] = "We should re-name the website to yourmom.com";
say[33] = "Ur moms favorite ";
say[34] = "I'm Gustavo But you can call me Gus";
say[35] = "Walter Black";
say[36] = "Does a set of all sets contain itself?";
say[37] = " i died on my 12 year hardcore minecraft world  :(";
say[38] = "Ngl CFISD Goofy ASF";
say[39] = "the fitnessgram pacer test is a multistage aerobic capacity test";
say[40] = "i know for a fact that you have a 60 in math and science and you playin games you bozo";
say[41] = "Do your balls itch?";
say[42] = "These aren't the games you're looking for";
say[43] = "Nefarious Darius";
say[44] = "numnut";
say[45] = "👹I like to creep around my home and act like a goblin👹";
say[46] = "Among Us VR?";

var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
