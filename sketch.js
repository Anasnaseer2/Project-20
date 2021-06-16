var bg,sleep,eat,gym,bath,brush,move,astronaut;
var edges;
function preload(){
  bg=loadImage("iss.png")
  sleep=loadAnimation("sleep.png")
  eat=loadAnimation("eat1.png","eat2.png")
  brush=loadAnimation("bath1.png","bath2.png")
  move=loadAnimation("move.png","move1.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
}
function setup() {
  createCanvas(600,500);
  astronaut=createSprite(300,200)
  astronaut.addAnimation("sleepy",sleep)
  astronaut.scale=0.1;
}

function draw() {
  background(bg);
  drawSprites();
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.velocityY=0
    astronaut.velocityX=0
    astronaut.y=350
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.velocityY=0
    astronaut.velocityX=0
    astronaut.y=350
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.velocityY=0
    astronaut.velocityX=0
    astronaut.y=350
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityY=1
    astronaut.velocityX=1
  }
}
