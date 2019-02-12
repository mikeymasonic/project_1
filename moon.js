//moon stuff

var phase = 0;

function setup(){
	createCanvas(500, 500);
	frameRate(10);
}

function draw(){
	if(phase <= 30){
		phase++;
	}else{
		phase = 0;
}

function arcMoon(LocX, LocY, sizeX, sizeY, moonPhase){
	mappedPhase = radians(map(moonPhase, 0, 30, 0, 360));
	revPhase = radians(map(moonPhase, 0, 30, 360, 0));
	arc(locX, locY, sizeX, sizeY, revPhase, mappedPhase, CHORD);

}
}
