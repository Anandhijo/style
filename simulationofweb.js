function paint(){
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillStyle="rgba(255,255,255,0.1)";
  ctx.clearRect(0,0,window.innerWidth,headerHeight);
  for (i=0;i<500;i+=5){
    ballSpecs[i]+=ballSpecs[i+2];
    ballSpecs[i+1]+=ballSpecs[i+3];
    if (ballSpecs[i]<-50){
      ballSpecs[i]=window.innerWidth+50;
    }
    if (ballSpecs[i]-50>window.innerWidth){
      ballSpecs[i]=-ballSpecs[i+4];
    }
    if (ballSpecs[i+1]<-50){
      ballSpecs[i+1]=headerHeight+50;
    }
    if (ballSpecs[i+1]-50>headerHeight){
      ballSpecs[i+1]=-ballSpecs[i+4];
    }
    ctx.beginPath();
    ctx.arc(ballSpecs[i],ballSpecs[i+1],ballSpecs[i+4],0,2*Math.PI);
    ctx.fill();
  }
}
setInterval(paint,75);