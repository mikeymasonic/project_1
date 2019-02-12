let fingers;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/moon.mp4']);
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
    fingers.loop(); 
}

function draw() {
  noCursor();
  background(10);
  image(fingers, 1, 1); // draw the video frame to canvas
  // filter('GRAY');
  // image(fingers, 150, 150); // draw a second copy to canvas


}

