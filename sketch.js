var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var cyclebell,pinkCG,yellowCG,redCG

var pinkCGImg,yellowCGImg,redCGImg

var pinkCGImg2,yellowCGImg2,redCGImg2

var pinkplayer1,yellowplayer1,redplayer1


function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  pinkCGImg=loadAnimation("images/opponent1.png","images/opponent2.png")
  
  pinkCGImg2=loadImage("images/opponent3.png")
  
 yellowCGImg=loadAnimation("images/opponent4.png","images/opponent5.png")
  
  yellowCGImg2=loadImage("images/opponent6.png")
  
  redCGImg=loadAnimation("images/opponent7.png","images/opponent8.png")
  
  redCGImg2=loadImage("images/opponent9.png")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.addAnimation("falling",mainRacerImg2)
mainCyclist.scale=0.07;
  
pinkCG= new Group()
yellowCG=new Group()
  redCG=new Group()
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
    if(pinkCG.isTouching(mainCyclist)||yellowCG.isTouching(mainCyclist)||redCG.isTouching(mainCyclist)){
      gameState=END;
    }
    
    var select_oppPlayer= Math.round(random(1,3))
    
    if(World.frameCount%60===0){
      if(select_oppPlayer===1){
        pinkcyclist()
      }else if(select_oppPlayer===2){
        yellowcyclist()
      }else if(select_oppPlayer===3){
        redcyclist()
      }
      }
    //console.log(select_oppPlayer)
    
    distance=distance +Math.round(getFrameRate()/60)
    
if(gameState===END){
  path.velocityX=0
  mainCyclist.changeAnimation("falling",mainRacerImg2)
}
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
    
  }
    
 }
}

function pinkcyclist(){
pinkplayer1=createSprite(Math.round(random(100,400)),Math.round(random(50,250)),10,10)
pinkplayer1.addAnimation("pinkcg",pinkCGImg)
 pinkCG.add(pinkplayer1)
  pinkplayer1.scale=0.05
pinkplayer1.lifetime=170

  
                         
  
}


function yellowcyclist(){
  yellowplayer1=createSprite(Math.round(random(100,400)),Math.round(random(50,250)),10,10)
  yellowplayer1.addAnimation("yellowcg",yellowCGImg)
  yellowCG.add(yellowplayer1)
  yellowplayer1.scale=0.05
  yellowplayer1.lifetime=170
  
  
}
  
  
  function redcyclist(){
  redplayer1=createSprite(Math.round(random(100,400)),Math.round(random(50,250)),10,10)
  redplayer1.addAnimation("redcg",redCGImg)
  redCG.add(redplayer1)
  redplayer1.scale=0.05
  redplayer1.lifetime=170
  }