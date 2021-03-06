/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/
var numStars = 200; //How many stars do you want? 
var stars = [numStars]; //array that holds our stars.
var minStarSize = 1;
var maxStarSize = 3;
var x3;
var y3;
var r3;


let angle = 0;
let angle2 = 0;
let xRadius = 100;
let yRadius = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  noStroke();
  noCursor();
  // noLoop();

  for (let i3 = 0; i3 < numStars; i3++) {
     x3 = random(width);
     y3 = random(height);
     r3 = floor(random(minStarSize,maxStarSize)); 

    stars.push(new Star(x3,y3,r3));

}
}

function draw() {
   background(0);


// elliptical();
  

  // drawTarget(10, 20, 30, 2);
  // drawTarget(40, 60, 80, 4);
  // drawTarget(width*0.25,height/4, 1, 10, 5);
  // drawTarget(width*0.35,height/2, 4, 20, 50);
  // drawTarget(mouseX*.25,mouseY*.75, 1, 100);
  // glowSphere(windowWidth/2, windowHeight/2, 3, 200);
  // drawTarget(mouseX*.65,mouseY*.75, 1, 100);
  // drawTarget(mouseX*.85,mouseY*.75, 1, 100);

  let x1 = mouseX;
  let y1 = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y



// middle circle thing


 strokeWeight(0);
  fill(255, 150);
  ellipse(x1, height/2, width/4, width/4);
  glowSphere(mouseX, height/2, 3, 200);
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





// push();    
// for (let i = stars.length - 1; i >= 0; i--) {

//     //calling it in the if statement runs it. 
//     //If it returns false, the star is no longer on the screen.
//     if(stars[i].render() === false){

//       //star is off screen, remove it from the array
//       stars.splice(i, 1);
      
//       //replace with new one
//       x3 = random(width);
//       y3 = random(height);
//       r3 = floor(random(minStarSize,maxStarSize));
//       stars.push(new Star(x3,y3,r3));
//     }



//   }

//   //every 250 frames, pick a star and shoot it!
//   if(frameCount % 250 == 0 ){
//     star = random(stars); 
//     star.shoot();
//   }
// pop();




}

function elliptical(){
  translate(0, height/4);
  fill(255);
  angle = angle+0.1;
  angle2 = angle*0.4;
  x = xRadius * sin(angle);
  y = yRadius/2 * cos(angle);
  ellipse(x,y,100,100);
}


function Star(x3,y3,r3){
  this.x3 = x3;
  this.y3 = y3;
  this.r3 = r3;

  this.alpha = 255;
  this.xoff = 0;
  this.yoff = 0;
  this.shooting = false;


  this.render = function(){

    //shoot the star. A little alpha to fade it out.
    if(this.shooting){
      this.x3 += this.xoff;
      this.y3 += this.yoff;
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
    ellipse(this.x3,this.y3,this.r3);

    //check if off screen
    if(this.x3 > width || this.x3 < -width || y3 > height || y3 < -height){
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

}


function glowSphere(x, y, radiusMult, rings) {
  //this code draws one target with 8 rings
  let size = (width / 10)*radiusMult;

  let steps = size /rings;

  let grayvalues = 255/rings;
  // let x6 = windowWidth/2;
  // let y6 = windowHeight/2;



    for (let i5 = 0; i5 < rings; i5++) {
    fill(i5*grayvalues);
    ellipse(x, y, size - i5*steps, size - i5 * steps);
    //ellipse(xLoc, yLoc);
}
}