function moonPhases(skyX, skyY, phase, moonDia, radiusMult, rings){

  let size = 100*radiusMult;
  let steps = size /rings;
  let grayvalues = 255/rings;

  if(phase==15){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);

  }
  if(phase==14){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  if(phase==13){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  if(phase==12){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  
  if(phase==11){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  
  if(phase==10){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI+PI,HALF_PI);
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI+PI,HALF_PI);
// }
  }
  
  if(phase==9){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI+PI,HALF_PI);
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI+PI,HALF_PI);
// }
  }
  
  if(phase==8){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI+PI,HALF_PI); 
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI+PI,HALF_PI);
// }

  }
  
  //phase=8=fullmoon, do nothing
  if(phase==7){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
  }
  
  if(phase==6){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI,HALF_PI+PI); 
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI,HALF_PI+PI);
// }
  }
  
  if(phase==5){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
    //    for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
// } 
  }
  
  if(phase==4){//First Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI,HALF_PI+PI); 
    //        for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
  }
  if(phase==3){//Last Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
  }
  if(phase==2){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }
  if(phase==1){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    // drawTarget(skyX/2, skyY/2, 2, 200);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }
  if(phase==0){//NEW MOON
    drawTarget(skyX/2, skyY/2, 2, 200);   
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);

    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }
}




///////functionMoon adding 30 test


function moonPhases(skyX, skyY, phase, moonDia, radiusMult, rings){

  let size = 100*radiusMult;
  let steps = size /rings;
  let grayvalues = 255/rings;

  if(phase==23){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia+20, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);

  }

    if(phase==22){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);

  }


  if(phase==21){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4+20, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }

    if(phase==20){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }

  if(phase==19){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }

  if(phase==18){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI,HALF_PI+PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  
  if(phase==17){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI+PI,HALF_PI);
  }
  
  if(phase==16){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI+PI,HALF_PI);
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI+PI,HALF_PI);
// }
  }
  
  if(phase==15){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI+PI,HALF_PI);
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI+PI,HALF_PI);
// }
  }
  
  if(phase==14){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI+PI,HALF_PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI+PI,HALF_PI); 
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI+PI,HALF_PI);
// }

  }
  
  //phase=8=fullmoon, do nothing
  if(phase==13){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
  }
  
  if(phase==12){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI,HALF_PI+PI); 
    //     for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*3/4, moonDia, HALF_PI,HALF_PI+PI);
// }
  }
  
  if(phase==11){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia+20, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
    //    for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
// } 
  }

  if(phase==10){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
    //    for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
// } 
  }
  
  
  if(phase==9){//First Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia+20, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI,HALF_PI+PI); 
    //        for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
  }


  if(phase==8){//First Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
    fill(255, 247, 220);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia, HALF_PI,HALF_PI+PI); 
    //        for (i = 0; i < rings; i++) {
    // fill(i*grayvalues);
    // // ellipse(x, y, size - i*steps, size - i * steps);
    // arc(skyX/2, skyY/2,moonDia*2/4, moonDia, HALF_PI,HALF_PI+PI);
  }

  if(phase==7){//Last Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
  }

  if(phase==6){//Last Quarter
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia, moonDia,HALF_PI,HALF_PI+PI);
  }


  if(phase==5){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*1/4+20, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }


  if(phase==4){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*1/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }


  if(phase==3){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    // drawTarget(skyX/2, skyY/2, 2, 200);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*2/4+20, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }

  if(phase==2){
    drawTarget(skyX/2, skyY/2, 2, 200); 
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);
    // drawTarget(skyX/2, skyY/2, 2, 200);
    fill(10);
    arc(skyX/2, skyY/2,moonDia*2/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }

  if(phase==1){
    drawTarget(skyX/2, skyY/2, 2, 200);   
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);

    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4+20, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }


  if(phase==0){//NEW MOON
    drawTarget(skyX/2, skyY/2, 2, 200);   
    ellipseMode(CENTER);
    fill(255, 247, 220);
    ellipse(skyX / 2, skyY / 2, moonDia-0.5, moonDia-0.5);

    fill(10);
    arc(skyX/2, skyY/2,moonDia*3/4, moonDia,HALF_PI+PI,HALF_PI);
    arc(skyX/2, skyY/2,moonDia, moonDia, HALF_PI,HALF_PI+PI);
  }
}