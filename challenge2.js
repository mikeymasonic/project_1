/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/


function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  noCursor();
  // noLoop();

}

function draw() {
  background(0);
  // drawTarget(10, 20, 30, 2);
  // drawTarget(40, 60, 80, 4);
  // drawTarget(width*0.25,height/4, 1, 10, 5);
  // drawTarget(width*0.35,height/2, 4, 20, 50);
  // drawTarget(mouseX*.25,mouseY*.75, 1, 100);
  drawTarget(mouseX, width*.257, 3, 200);
  // drawTarget(mouseX*.65,mouseY*.75, 1, 100);
  // drawTarget(mouseX*.85,mouseY*.75, 1, 100);

  var x = mouseX;
  var y = mouseY;
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y

//middle circle thing

 strokeWeight(0);
  fill(255, 150);
  ellipse(x, height/2, width/4, width/4);
  fill(0);
  ellipse(ix, height/2, width*.25, width*.25);



// push();
// translate(mouseX, mouseY);
// stroke(0);
//   strokeWeight(5);
//   fill(255,0,150,0);

// beginShape();
// for(var i = 0; i < 100; i++) {


//   var radius = 75 + random(5);
//   var x = cos(radians(i * 3.6)) * radius;
//   var y = sin(radians(i * 3.6)) * radius;
//   vertex(x, y);
// }
// endShape(CLOSE);
// pop();

  }



function drawTarget(x, y, radiusMult, rings) {
  //this code draws one target with 8 rings
  let size = (width / 10)*radiusMult;

  let steps = size /rings;

  let grayvalues = 255/rings;


    for (i = 0; i < rings; i++) {
    fill(i*grayvalues);
    ellipse(x, y, size - i*steps, size - i * steps);
    //ellipse(xLoc, yLoc);
}

}