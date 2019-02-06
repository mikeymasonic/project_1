/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/

var stars = []; //array that holds our stars.
var numStars = 200; //How many stars do you want? 
var minStarSize = 1;
var maxStarSize = 6;


function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  noCursor();
  // noLoop();

  for (var i = 0; i < numStars; i++) {
    x = random(width);
    y = random(height);
    r = floor(random(minStarSize,maxStarSize)); 

    stars.push(new Star(x,y,r));

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

for (var i = stars.length - 1; i >= 0; i--) {

    //calling it in the if statement runs it. 
    //If it returns false, the star is no longer on the screen.
    if(stars[i].render() === false){

      //star is off screen, remove it from the array
      stars.splice(i, 1);
      
      //replace with new one
      x = random(width);
      y = random(height);
      r = floor(random(minStarSize,maxStarSize));
      stars.push(new Star(x,y,r));
    };

  }

  //every 250 frames, pick a star and shoot it!
  if(frameCount % 250 == 0 ){
    star = random(stars); 
    star.shoot();
  }

}
}

function Star(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;

  this.alpha = 255;
  this.xoff = 0;
  this.yoff = 0;
  this.shooting = false;


  this.render = function(){

    //shoot the star. A little alpha to fade it out.
    if(this.shooting){
      this.x += this.xoff;
      this.y += this.yoff;
      this.alpha -= 5;
    }


    //shimmer
    if (random(1) < 0.005 ) {
      red   = floor(random(0,127));
      green   = floor(random(0,127));
      blue  = floor(random(0,127));
    }else{
      //default color
      red   = 175; //stars arent harsh white, tone it down a bit.
      green   = 175;
      blue  = 175;
    }

    noStroke();
    fill(red,green,blue,this.alpha);

    //draw the star
    ellipse(this.x,this.y,this.r);

    //check if off screen
    if(this.x > width || this.x < -width || y > height || y < -height){
      //if its off screen, we need to tell the main draw loop, so that it can be removed
      //from the array of stars.
      return false;
    }
  }

  this.shoot = function(){
    this.shooting = true;
    this.xoff = random(-20,20);
    this.yoff = random(-20,20);
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
}