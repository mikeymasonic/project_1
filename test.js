let angle = 0;
let angle2 = 0;
let xRadius = 100;
let yRadius = 100;

function setup(){
  createCanvas(800, 800);
  frameRate(60);
}

function draw(){
  figureEight();
  elliptical();

}

function figureEight(){
  translate(width/2, height/2);
  angle = angle+0.1;
  angle2 = angle*0.5;
  x = xRadius * sin(angle);
  y = yRadius * cos(angle2);
  ellipse(x,y,50,50);
}

function elliptical(){
  translate(0, height/4);
  x = xRadius * sin(angle);
  y = yRadius/2 * cos(angle);
  ellipse(x,y,50,50);
}