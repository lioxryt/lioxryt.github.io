import { Howl, Howler } from 'howler';
import music from "./muslist.json";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var player= new Howl({
 src: music
});

function playMus() {
    player.stop();
    var indx=player.play(getRandomInt(music.length()));
}

function stopMus() {
    player.stop();
}
function nextTrk() {
    player.stop();
    var indx2=player.play(indx+1)
}
