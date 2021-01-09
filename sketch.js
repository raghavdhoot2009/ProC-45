const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var target1,target2,target3;

var tree1,tree2,tree3;

var fire,shoot;
var Gun,gun;
var edges;

function preload(){
targetimg=loadImage("target.png");
fire=loadImage("Fire.png");
Gun=loadImage("download.png");
}


function setup() {
  createCanvas(2500,1350);
  engine=Engine.create();
  world=engine.world;

  tree1=new tree(200,400,10,10); 
  target1=new target(225,550,20,20)
  
  tree2=new tree(600,400,10,10);
  target2=new target(625,550,20,20)

  tree3=new tree(1000,400,10,10);
  target3=new target(1025,550,20,20)

  shoot=createSprite(2425,1300,20,10);
  shoot.addImage(fire);
  shoot.scale=0.15;
  
  gun=createSprite(1255,1095,40,40);
  gun.addImage(Gun);
}

function draw() {
Engine.update(engine);
gun.velocityY=0;
gun.velocityX=0;

background(0);
tree1.display();
tree2.display();
tree3.display();

target1.display();
target2.display();
target3.display();

if(keyDown("DOWN_ARROW")){
  gun.velocityY=2;
  gun.velocityX=0;  
  } 
  if(keyDown("UP_ARROW")){
    gun.velocityY=-2;
    gun.velocityX=0;  
    }
    if(keyDown("LEFT_ARROW")){
      gun.velocityX=-2;
      gun.velocityY=0;  
      } 
      if(keyDown("RIGHT_ARROW")){
        gun.velocityX=2;
        gun.velocityY=0;  
        }
        edges=createEdgeSprites();
        gun.bounceOff(edges);

drawSprites();
}