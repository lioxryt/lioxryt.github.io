document.body.style.backgroundColor = 'black';

// Check if the browser supports the getUserMedia function
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // If supported, get a stream from the user's webcam
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    // Create a video element and set its source to the stream
    video = document.createElement('video');
      video.setAttribute('autoplay', '');
      video.setAttribute('muted', '');
      video.srcObject = stream;
      
      // When the video has loaded, play it and start rendering ASCII
      video.addEventListener('loadedmetadata', function() {
        video.play();
        renderASCII();
      });
      
      // Start rendering ASCII continuously
      setInterval(renderASCII, 30); // Update the ASCII text every 30 milliseconds

      // Append the video element to the page
      document.getElementById('webcam').appendChild(video);
    });
  } else {
    // If getUserMedia is not supported, display an error message
    document.getElementById('webcam').innerHTML = 'Sorry, your browser does not support getUserMedia';
  }
  
// Create a div to hold the text and buttons
var webcamControls = document.createElement('div');
webcamControls.style.display = 'flex';
webcamControls.style.alignItems = 'center';

// Add the text to the div
webcamControls.innerHTML = 'Your webcam feed will appear here: ';

// Set up the video element
var video = document.createElement('video');
video.autoplay = true;

// Set up the pause button
var pauseButton = document.createElement('button');
pauseButton.innerText = 'Pause';
pauseButton.addEventListener('click', function() {
  video.pause();
});

// Set up the resume button
var resumeButton = document.createElement('button');
resumeButton.innerText = 'Resume';
resumeButton.addEventListener('click', function() {
  video.play();
});

// Add the buttons to the div
webcamControls.appendChild(pauseButton);
webcamControls.appendChild(resumeButton);

// Add the div to the page
document.body.appendChild(webcamControls);

  
  // This function converts the video frame to ASCII and displays it
// This function converts the video frame to ASCII and displays it
function renderASCII() {
  // Get the canvas element and its context
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  
  // Set the canvas size to the same as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  // Draw the current video frame on the canvas
  ctx.drawImage(video, 0, 0);
  
  // Get the image data from the canvas
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // Convert the image data to ASCII and display it
  document.getElementById('webcam').innerHTML = '';
  document.getElementById('webcam').appendChild(convertToASCII(imageData));
  
  // Add the video element to the page
  video.style.display = 'none';
  document.getElementById('webcam').appendChild(video);
}
 
  
  // This function converts the given image data to ASCII
function convertToASCII(imageData, fontColor) {
    // Create an ASCII string that will contain the image
    var asciiString = '';
    
    // Set the width of the ASCII image (in characters)
    var asciiWidth = video.videoWidth;
    
    // Loop through each pixel in the image data
    for (var i = 0; i < imageData.data.length; i += 4) {
      // Get the red, green, and blue values of the pixel
      var r = imageData.data[i];
      var g = imageData.data[i + 1];
      var b = imageData.data[i + 2];
      
    // Make the pixels darker by decreasing their values
    r = Math.max(0, r - 50); // Decrease the red value by 50
    g = Math.max(0, g - 50); // Decrease the green value by 50
    b = Math.max(0, b - 50); // Decrease the blue value by 50

      // Calculate the brightness of the pixel (a value from 0 to 255)
      var brightness = (r + g + b) / 3;
      
      // Choose a character to represent the pixel based on its brightness
      var asciiChar = '#';
      if (brightness < 50) asciiChar = '@';
      if (brightness < 25) asciiChar = '8';
      if (brightness < 10) asciiChar = '*';
      
      // Add the chosen character to the ASCII string
      asciiString += asciiChar;
      
      // If we've reached the end of a line, add a line break
      if ((i / 4 + 1) % asciiWidth == 0) asciiString += '\n';
    }
    
    // Create a text element to hold the ASCII image
    var asciiElement = document.createElement('pre');
    asciiElement.style.fontSize = '4px';
    asciiElement.style.lineHeight = '2px';
    asciiElement.style.color = fontColor || 'white';
    asciiElement.innerText = asciiString;
    
    // Return the text element
    return asciiElement;
  }
  