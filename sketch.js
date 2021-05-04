var START=2;
var PLAY=1;
var END= 0;
var gameState = START;
var jungle,jungleImg;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var g_1;
var bg,bg1,monkey2,monkey3,m1,m2;
var restart,reset

function preload(){
  
  jungleImg = loadImage("jungle.jpg")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  bg1 = loadImage("Screenshot (350).png")
  m1 = loadImage("monkey2.png")
  m2 = loadImage("monkey3.png")
  
  restartImg = loadImage("restart.png");
}



function setup() {
createCanvas(800,600);   
  
bg=createSprite(400,250,250,20)
bg.addImage(bg1)
bg.scale=1.6  
 
monkey2=createSprite(100,100,50,50)
monkey2.addImage(m1)
monkey2.scale=1.5
  
monkey3 = createSprite(700,500,50,50);
monkey3.addImage(m2);
monkey3.scale = 1.7
  
jungle=createSprite(400,250,250,20)
jungle.addImage(jungleImg)
jungle.scale=1.6
  
monkey = createSprite (90,250,20,20)
monkey.addAnimation("Running",monkey_running);
monkey.scale = 0.2;
monkey.visible = true;

g_1 = createSprite (300,550,600,5);
g_1.visible = false;  
  
restart = createSprite(400,400,50,50);
restart.addImage(restartImg);
restart.scale = 0.5
restart.visible = false; 
  
FoodGroup = new Group();
obstacleGroup = new Group();
  
score = 0;
}


function draw() {
 background("skyblue"); 
  
  
if(gameState===START){
  
  stroke("red");
  fill("red");
  textSize(40);
  text("Welcome To Monkey Go Happy Game🙉",210,120);
  
  stroke("black");
  fill("purple");
  textSize(30);
  text("Press 'H' to START the🎮 GAME",270,230);
  
  stroke("red");
  fill("red");
  textSize(40);
  text("How to PLAY",20,400)
  
  stroke("black");
  fill("purple");
  textSize(30);
  text("1.Press SPACE key to jump",40,440);
  text("2.Collect the🍌 Bananas",40,480)
  text("3.Beware of Obstacles",40,520)
  
  monkey.visible = false;
  jungle.visible = false;
  bg.visible = false;
  
  if(keyDown("H"))  {
  gameState = PLAY
}
}  
  

  
if(gameState=== PLAY){
  monkey.visible = true;
  jungle.visible = true;
  restart.visible = false; 
  bg.visible = false;
  monkey2.visible = false;
  monkey3.visible = false;
  
 jungle.velocityX = -2;
  
if(jungle.x<0){
  jungle.x=jungle.width/2;
           }  
  
if(keyDown("space")&& monkey.y >= 350 ) {
      monkey.velocityY = -12;
     }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(g_1);
  
  
if(FoodGroup.isTouching(monkey)){
  FoodGroup.destroyEach();
  score = score+1;
  monkey.scale = 0.2;
  }
  
  obstacles ()
  bananas ()
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
     monkey.scale=monkey.scale-0.1
  }
   
if(monkey.scale === 0){
  gameState= END
  }
}
  
else if(gameState=== END){
   background("black"); 
  
  stroke("white");
  fill("white");
  textSize(90);
  text("YOU LOSE👎🏻",250,300)
  
  jungle.velocityY = 0;
  
  jungle.visible = false;
  monkey.visible = false;
  
  
  }
  

  
  drawSprites();
  
  stroke("white");
  fill("white");
  textSize(30);
  text("Score:"+ score,700,50)
  
}

function obstacles (){
 if(frameCount % 250 === 0) {
    var  obstacle = createSprite(800,200,40,10);
    obstacle.y = Math.round(random(530,531));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -9
   
    obstacle.lifetime = 200; 
  //add each obstacle to the group
   obstacleGroup.add(obstacle);
   
 }
}

function bananas () {
 if(frameCount % 190 === 0) {
   var banana = createSprite(800,250,40,10);
   banana.y = Math.round(random(241,240));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -10;
   
   banana.lifetime = 200;
   //add each banana to the group
   FoodGroup.add(banana);
 }
  }





