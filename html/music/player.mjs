import {Howl, Howler} from './howler.js';
import music from'./muslist.json' assert { type: 'json' };
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var player= new Howl({
 src: music
});
console.log(music);
function playMus() {
    player.stop();
    var indx=player.play(getRandomInt(music.length()));
    console.log("Go")
}

function stopMus() {
    player.stop();
    console.log('Stop')
}
function nextTrk() {
    player.stop();
    var indx2=player.play(indx+1)
    console.log("Next")
}
