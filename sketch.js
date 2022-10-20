var sky
var ground
var gi
var ci
//var flint
//var rb
//var fuego
var bb8
function preload(){ // função que carregar todas as imagens e animações
  sky= loadImage('assets/bg.png')
  gi= loadImage('assets/ground.png')
  ci= loadImage('assets/nuvem.png')
  //rb= loadAnimation('assets/flint1.png ','assets/flint2.png','assets/flint3.png')
  //fuego= loadAnimation('assets/fire1.png ','assets/fire2.png','assets/fire3.png','assets/fire2.png','assets/fire1.png','assets/fire4.png','assets/fire5.png','assets/fire4.png')
  //bb8= loadImage('assets/bot.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,600);
  ground= createSprite(300,300,2000,20)
  ground.addImage('GROUND', gi)
  ground.scale=6
  flint= createSprite(100,370,10,10)
 //flint.addAnimation('FLINT',rb)
  //flint.scale=6
  //flint.setCollider('rectangle',0,0,5,35)
  //ground.setCollider('rectangle',0,40,600,20,)

function draw(){
  background(sky);
  drawSprites(); 

  claudia()
 
  //if(keyDown('space')){
 //flint.velocityY=-12
  }
  flint.velocityY+=0.3
  flint.collide(ground)
}
function claudia(){
if(frameCount%100===0){
var cladio= createSprite(700,300,150,50)
cladio.addImage('claudinho',ci)
cladio.scale=4.5
cladio.velocityX=-random(2,7)
}

}

