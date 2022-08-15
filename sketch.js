var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var restart, restartImage;
var gamestate = "play";
var obsBottom1, obsBottom2, obsBottom3, obsTop1, obsTop2;
var bottomGroup, topGroup;


function preload(){
  bgImg = loadImage("assets/bg.png")
  restartImage = loadImage ("assets/restart.png");
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
  obsBottom1 = loadImage ("obsBottom1.png");
  obsBottom2 = loadImage ("obsBottom2.png");
  obsBottom3 = loadImage ("obsBottom3.png");
  obsTop1 = loadImage ("obsTop1.png");
  obsTop2 = loadImage ("obsTop2.png");
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
  
  //background image
  bg = createSprite(width/2,height/2,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.6
  
  //creating top and bottom grounds
  bottomGround = createSprite(200,height-12,4700,20);
  bottomGround.visible = true;
  
  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
  
  //creating balloon
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.4;
  
  //creates restart button
  restart = createSprite(width/2,height/2);
  restart.addImage(restartImage);
  restart.scale = 2.5
  
  bottomGroup = new Group();
  topGroup = new Group();
  
}

function draw() {
  
  background("black");
  
  if(gamestate === "play"){
    //making the hot air balloon jump
    if(keyDown("space")) {
      balloon.velocityY = -17 ;  
    }
    
    //adding gravity
    balloon.velocityY = balloon.velocityY + 2;
    restart.visible = false;
  }

  spawnTop();
  spawnBottom();
  

  //creating gamestates
  drawSprites();
}

function spawnTop(){
  if(frameCount%60 ===0){
    cloud = createSprite(600,30);
    cloud.velocityX = -4;
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.y = Math.round(random (10,90));

    trex.depth = cloud.depth;
    trex.depth +=1;

    cloud.lifetime=170;

    cloudsGroup.add(cloud);
  }
}

function spawnBottom(){

}