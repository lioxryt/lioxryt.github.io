var songlist = [{
  title: 'Love Sosa',
  file: 'ls',
  howl: null
},
{
  title: 'Rip',
  file: 'rip',
  howl: null
},
{
  title: 'Crazy Frog',
  file: 'cf',
  howl: null
},
];

// Get the playlist button and popup
var playlistButton = document.getElementById('playlistButton');
var popup = document.getElementById('popup');
var songList = document.getElementById('songList');

// Get the play button element
var playButton = document.getElementById('playButton');

// Variable to track the current playback state (playing or paused)
var playing = false;

// Variable to hold the currently playing Howl object
var currentSound;

// Add an event listener to the play button
playButton.addEventListener('click', function() {
if (playing) {
  // Pause the currently playing song
  currentSound.pause();

  // Update the play button text and state
  playButton.innerHTML = 'Play';
  playing = false;
} else {
  // Resume the currently playing song
  currentSound.play();

  // Update the play button text and state
  playButton.innerHTML = 'Pause';
  playing = true;
}
});

// Update the song title element
songTitle.innerHTML = songlist[0].title;

// Flag to track whether the song list has been created
var songListCreated = false;

// Variable to hold the currently playing Howl object
var currentSound;

// Add an event listener to the playlist button
playlistButton.addEventListener('click', function() {
// Toggle the visibility of the popup
if (popup.style.display === 'block') {
  popup.style.display = 'none';
} else {
  if (!songListCreated) {
      // Loop through each song in the songlist array
      for (var i = 0; i < songlist.length; i++) {
          // Get the current song
          var song = songlist[i];

          // Create a list item for the song
          var songItem = document.createElement('li');
          songItem.innerHTML = song.title;

          // Add an event listener to the song title
          songItem.addEventListener('click', function() {
              // Stop the currently playing song
              if (currentSound) {
                  currentSound.stop();
              }

              // Find the song in the songlist array
              for (var j = 0; j < songlist.length; j++) {
                  if (songlist[j].title === this.innerHTML) {
                      // Update the song title element
                      songTitle.innerHTML = songlist[j].title;
                      // Update the play button text and state
                      playButton.innerHTML = 'Pause';
                      playing = true;
                      // Get the song duration element
                      var songDuration = document.getElementById('songDuration');

                      // Create a new Howl object for the song
                      currentSound = new Howl({
                          src: ['./audio/' + songlist[j].file + '.webm', './audio/' + songlist[j].file + '.mp3'],
                          html5: true
                      });

                      // Update the song duration element with the total duration of the song
                      // after the audio file has finished loading
                      currentSound.on('load', function() {
                          // Convert the duration from seconds to minutes:seconds
                          var minutes = Math.floor(currentSound.duration() / 60);
                          var seconds = Math.floor(currentSound.duration() % 60);
                          if (seconds < 10) {
                              seconds = '0' + seconds;
                          }
                          songDuration.innerHTML = minutes + ':' + seconds;
                      });

                      // Play the song
                      currentSound.play();
                  }
              }

              // Hide the popup
              popup.style.display = 'none';
          });

          // Add the song to the song list
          songList.appendChild(songItem);
      }

      // Set the songListCreated flag to true
      songListCreated = true;
  }

  // Show the popup
  popup.style.display = 'block';
}
});


// Get the song duration element
var songDuration = document.getElementById('songDuration');

// Create a new Howl object for the song
currentSound = new Howl({
src: ['./audio/' + songlist[0].file + '.webm', './audio/' + songlist[0].file + '.mp3'],
html5: true
});

// Update the song duration element with the total duration of the song
// after the audio file has finished loading
currentSound.on('load', function() {
// Convert the duration from seconds to minutes:seconds
var minutes = Math.floor(currentSound.duration() / 60);
var seconds = Math.floor(currentSound.duration() % 60);
if (seconds < 10) {
  seconds = '0' + seconds;
}
songDuration.innerHTML = minutes + ':' + seconds;
});