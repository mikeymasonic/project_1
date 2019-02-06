let angle = 0;
let angle2 = 0;
let xRadius = 300;
let yRadius = 200;
let framesEllapsed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noCursor();
}



function draw(){
	framesEllapsed++;
  if(framesEllapsed % 5 == 0){
	// background(0);

	moon();
	elliptical();
}
}



function elliptical(){
	fill(0);
	noStroke();
  translate(windowWidth/15, windowHeight/15);
  angle = angle+0.1;
  angle2 = angle*0.4;
  x = xRadius * sin(angle);
  y = yRadius/2 * cos(angle);
  ellipse(x,y,200,200);
}

function moon(){
	fill(255);
	noStroke();
	translate(windowWidth/2, windowHeight/2);
  ellipse(0,0,200,200);
}