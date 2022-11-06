function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "The tech teams worst nightmare.";
say[1] = "Hello!";
say[2] = "HEY! is this thing on";
say[3] = "Don't get caught";
say[4] = "There is definitely no games here";
say[5] = "ONG";
say[6] = "🤨";
say[7] = "This project was made possible due to extensive use of narcotics";
say[8] = "Last chance to look at me Hector";
say[9] = "👋hello👋 and welcome to the Los Pollos hermanos 👪family👪👪 my name📛 is Gustavo but you can 📲call 📲 me Gus";


// pick a random greeting
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