import { Howl, Howler } from 'howler';
import music from "./muslist.json";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var player= new Howl({
 src: music
});

function playMus() {
    howl.stop();
    var indx=howl.play(getRandomInt(music.length()));
}

function stopMus() {
    howl.stop();
}
function nextTrk() {
    howl.stop();
    var indx2=howl.play(indx+1)
}