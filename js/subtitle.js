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
say[17] = "";
say[18] = "";

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
