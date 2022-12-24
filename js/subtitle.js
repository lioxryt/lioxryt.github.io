// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerHTML = say[num];
}

var say = [
  "The tech teams worst nightmare.",
  "Better than coolmathgames",
  "HEY! is this thing on",
  "Don't get caught",
  "There is definitely no games here",
  "ONG",
  "🤨",
  "This project was made possible due to extensive use of narcotics",
  "Last chance to look at me Hector",
  "👋hello👋 and welcome to the Los Pollos hermanos 👪family👪👪 my name📛 is Gustavo but you can 📲call 📲 me Gus",
  "According to all known laws of aviation,  : there is no way a bee should be able to fly.",
  "amojngus ahdahahahayah i scab cab  cab can spell correctky ahahahha your bad and im gododd",
  "no school, no need to block this",
  "I made it mom! I'm on a randomized subtitle!",
  "Playing games in my class, ay?",
  "A moment of silence for adobe flash player",
  "Whats my name? You're Heisenberg. You're God Damn Right",
  "Anyone remember when the background was white? No? Just me?",
  "If you are over 25 and own a computer, you wont last 5 seconds playing these games",
  "only in ohio 💀",
  "The Rizzard of Oz",
  "We have a <a href='https://discord.com/invite/Qf5wmbGzk9'>Discord</a> Now",
  "the god made this site",
  "good soup 🍲",
  "You wouldn't download a car?",
  "L for Coolmath. This site is better still.",
  "Jessie you were supposed to get a plastic container",
  "N Gon go hard on this site",
  "This is just schoology ok? idk or what i think this is a glitch",
  "oooohhhh mario's tunnel of doom very scary",
  "goofy ahh no admins",
  "(Hello this is the principal of Elmer High, please stop playing games and take down this site.)-Some Bum Loser Probably",
  "We should re-name the website to yourmom.com",
  "Ur moms favorite ",
  "I'm Gustavo But you can call me Gus",
  "Walter Black",
  "Does a set of all sets contain itself?",
  " i died on my 12 year hardcore minecraft world  :(",
  "Ngl CFISD Goofy ASF",
  "the fitnessgram pacer test is a multistage aerobic capacity test",
  "i know for a fact that you have a 60 in math and science and you playin games you bozo",
  "Do your balls itch?",
  "These aren't the games you're looking for",
  "Nefarious Darius",
  "numnut",
  "👹I like to creep around my home and act like a goblin👹",
  "Among Us VR?",
  "If you ain’t in the <a href='https://discord.com/invite/Qf5wmbGzk9'>discord server</a> then where the hell you atttt", 
  "<img src='/img/bingchilling.jpg'/>  ", 
];
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerHTML = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerHTML = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}