var player, triangle, circle, hexagon, finalBoss,treasure,wall1,wall2,wall3,wall4,wall5,powerup1, powerup2, powerup3, powerup4,obstacle1,
button,button2,treasure2,powerup1;
var reset;
var gameState=1;
var gameState
var wall7,wall8,wall9,wall10,obstacle2,obstacle3,wall11;

function setup() {
   player = createSprite(10,60,10,10);
   wall1 = createSprite(300,60,130,300);
   wall2 = createSprite(100,50,100,50);
   wall3 = createSprite(100,200,100,200);
   wall4 = createSprite(5,100,60,40);
   wall5 = createSprite(0,400,100,300);
   wall6 = createSprite(200,300,170,80);
   wall7 = createSprite(200,300,100,190);
   wall8 = createSprite(100,60,200,170);
   wall9 = createSprite(200,200,150,120);
   wall10 = createSprite(150,150,170,300);
   wall11 = createSprite(40,350,40,40);
   powerup1 = createSprite(200,200,10,10);
   obstacle1 = createSprite(200,200,10,10);
   obstacle2 = createSprite(100,320,10,10);
   obstacle3 = createSprite(100,330,10,10)
   treasure = createSprite(80,350,15,15);
   treasure2 = createSprite(50,260,15,15);
   button = createSprite(350,350,15,15);
   obstacle1.velocityX=5;
   obstacle2.velocityX=10;
   obstacle3.velocityX=10;
   wall7.visible=false;
  wall8.visible=false;
  wall9.visible=false;
  wall10.visible=false;
  obstacle2.visible=false;
  obstacle3.visible=false;
  treasure2.visible=false;
}
function draw() {
  
 
if(player.isTouching(treasure2)){
  fill("green");
  text("CONGRATS! YOU WON",200,200);
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  
}  
  
  button.visible=false;
  powerup1.visible=false;
  if(player.isTouching(treasure)){
    treasure2.visible=true;
    wall7.visible=true;
    wall8.visible=true;
    wall9.visible=true;
    wall10.visible=true;
    obstacle2.visible=true;
    obstacle3.visible=true;

    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    
    
    
    obstacle1.destroy();
    powerup1.destroy();
    treasure.destroy();
    
    text("LEVEL TWO",180,380);
    textSize(10);
    fill("GREEN");
    text("LEVEL ONE COMPLETE!",200,200);
    
    
  }
 
  
  
 
  obstacle1.bounceOff(wall1);
  obstacle1.bounceOff(wall3);
  obstacle2.bounceOff(wall11);
  obstacle3.bounceOff(wall11);
  obstacle2.bounceOff(wall7);
  obstacle3.bounceOff(wall7);
  obstacle2.bounceOff(wall8);
  obstacle3.bounceOff(wall8);
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  
  
    background("black");
    wall1.shapeColor=("blue");
    wall2.shapeColor=("blue");
    wall3.shapeColor=("blue");
    wall4.shapeColor=("blue");
    wall5.shapeColor=("blue");
    wall6.shapeColor=("blue");
    wall7.shapeColor=("blue");
    wall8.shapeColor=("blue");
    wall9.shapeColor=("blue");
    wall10.shapeColor=("blue");
    wall11.shapeColor=("blue");
    treasure.shapeColor=("yellow");
    powerup1.shapeColor=("purple");
    obstacle1.shapeColor=("red");
    obstacle2.shapeColor=("red");
    obstacle3.shapeColor=("red");
    treasure2.shapeColor=("yellow");
    fill("red");
    text("Collect The Treasure!",120,20);
    
    
    

   
  if(keyDown(UP_ARROW)){
    player.y=player.y-3;
    
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+3;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+3;
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-3;
  }

  if(player.isTouching(obstacle1)){
    player.x = 10;
    player.y = 60;
  }
 
  
  
      
    
      drawSprites();

}


  function preLoad() {

}

