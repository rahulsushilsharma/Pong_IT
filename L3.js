var c=0 ,t=0,n=0,n1=0;
var slides=[];
var ball,a=4,b=4,x=200,y=300;
var slide1,slde2,slide3,socket;
var pong,gameover;
function preload(){
  soundFormats('mp3', 'ogg');
  pong = loadSound('pong.mp3');
  gameover=loadSound('Gameover.mp3');
}
function setup(){
  startUp();
checkCookie('highScore');
checkCookie('recentTime');
  print(getCookie('recentTime'));

    print('high-'+getCookie('highScore'));
  createCanvas(100*w,100*h);
  ball =new Ball(50*w,50*h,20*w/h);
  slide1=new Bar(25*w,97*h,25*w,3*h);
  slide2=new Bar(25*w,0,25*w,3*h);
  slides.push(slide1);
  slides.push(slide2);
}

function draw(){
background(0);
showScore(t);
ball.create();
i=0;
slides.forEach(slide => {
  slide.create();
  if(!(checkPaddle(slide))){
    if(t%2==0)
    {
      slide.updateColor(0,0,0);
      slide.bl.updateColor(0,0,0);
      slide.br.updateColor(0,0,0);
    }
    else{
      slide.updateColor(random(255),random(255),random(255));
      slide.bl.updateColor(random(255),random(255),random(255));
      slide.br.updateColor(random(255),random(255),random(255));
    }


    if(collide(ball,slide))
    {
      slides.splice(i,1);
    }
    if(slide.x>100*w){
      slides.splice(i,1);
  }
    else{
  slide.move(slide.x,slide.y);
  slide.x+=2;}
}
  else{
    slide.move(getMX(),slide.y);
  }

i++;
});

x+=a;
y+=b;
if(checkBounceX(x,ball)){
  pong.play();
  a=-a;
}
if(checkBounceY(y,ball)){
  showGameOver();
  setCookie('recentTime',t,1);
  setHScore(t);
  c=1;
  t=0;
  gameover.play();
  noLoop();
}
ball.move(x,y);
slides.forEach(slide => {
if(collide(ball,slide)){
	  b=-b;
      if(b<=0){y=y-4*h}
      if(b>0){y=y+4*h}
      ball.updateColor(random(255),random(255),random(255));
      pong.play();
}
});
passLevel();
}

function mouseClicked(){
//window.location.href='hello.html';
 if(c==1){
  window.location.href='index.html';
    c=0;
  }
  if(c==2){
  window.location.href=getCookie('level')+'.html';

  }

}
function passLevel(){
  if(t>20){
    setCookie('level','L4',1);
    levelPassed(3,'Invincible Red');
    c=2;
    noLoop();
  }
  }
setInterval(function(){
  t++;

  if(t%5==0){
    resetSketch();
  }

  if(t%3==0)
  {
    slide1.updateColor(0,0,0);
    slide2.updateColor(0,0,0);
    slide1.bl.updateColor(0,0,0);
    slide1.br.updateColor(0,0,0);
    slide2.bl.updateColor(0,0,0);
    slide2.br.updateColor(0,0,0);
  }
  else{
    slide1.updateColor(255,255,0);
    slide2.updateColor(255,255,0);
    slide1.bl.updateColor(225,255,0);
    slide1.br.updateColor(225,255,0);
    slide2.bl.updateColor(225,255,0);
    slide2.br.updateColor(225,255,0);
  }

  if(t%3==0){
      //window.location.href='index.html';
  sliden1=new  Bar(random(-10,-5)*w,random(30,70)*h,random(10,25)*w,3*h);
  sliden1.updateColor(random(255),random(255),random(255));
  sliden1.bl.updateColor(random(255),random(255),random(255));
  sliden1.br.updateColor(random(255),random(255),random(255));
  slides.push(sliden1);
}
}

,1000);
  
function resetSketch(){
  //slide1=new Bar(slide1.x,slide1.y,100*w,3*h);
  //slide2=new Bar(slide2.x,slide2.y,slide2.l*2,3*h);
  if(n1<2){
    n1++;
  ball.r= ball.r*3/4;
  slide1.l=slide1.l/1.5;
  slide2.l=slide2.l/1.5;
}
  if(n==0){
    n=1;
  if(a<0)
  a=-5;
  else
    a=5;
    if(b<0)
    b=-5;
    else
      b=5;
    }
    else{
      n=0;
      if(a<0)
      a=-4;
      else
        a=4;
        if(b<0)
        b=-4;
        else
          b=4;
    }
//ball =new Ball(ball.x,ball.y,15*w/h);


}
