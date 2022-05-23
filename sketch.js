var pathimg,runnerimg;
var path,runner;
var parede1,parede2;
var edge;

function preload(){
  //imagens pré-carregadas
  pathimg = loadImage("path.png");
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(width/2,height/2);
  path.addImage(pathimg);
  path.velocityY = 2
  path.scale = 1.33
  
  runner = createSprite(width/2,300);
  runner.addAnimation("correndo",runnerimg);
  runner.scale = 0.08;

  parede1 = createSprite(0,200,50,400);
  parede1.visible = false;

  parede2 = createSprite(400,200,50,400);
  parede2.visible = false;
  
  




}

function draw() {
  background(0);

  if(path.position.y>400){
    path.position.y = height/2;
  }
  
  runner.x = World.mouseX;

  runner.collide(parede1);
  runner.collide(parede2);
  edge = createEdgeSprites();
  runner.collide(edge);

  drawSprites();
}
