var sky
var ground
var gi
var ci
var flint
 var rb
var fuego
var bb8
var fogareo
var nuvemm
var go='jogar'
var precioso
var bitcoin
var ss
var points
var pontos=0
var replay

function preload(){ // função que carregar todas as imagens e animações
  sky= loadImage('assets/bg.png')
  gi= loadImage('assets/ground.png')
  ci= loadImage('assets/nuvem.png')
  rb= loadAnimation('assets/flint1.png ','assets/flint2.png','assets/flint3.png')
  fuego= loadAnimation('assets/fire1.png ','assets/fire2.png')
  bb8= loadImage('assets/obstaculo.png')
  precioso= loadImage('assets/moeda.png')
  bitcoin= loadImage('assets/moeda2-1.png')
  points= loadImage('assets/text.png')
  replay= loadImage('assets/restart.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,600);
  ground= createSprite(300,300,2000,20)
  ground.addImage('GROUND', gi)
  ground.scale=6
  flint= createSprite(100,370,10,10)
 flint.addAnimation('FLINT',rb)
  flint.scale=6
  flint.setCollider('rectangle',0,0,5,35)
  ground.setCollider('rectangle',0,40,600,20,)
  fogareo= new Group()
  ss= new Group()
}
function draw(){
  background(sky);
  drawSprites(); 
 image(points, 460, 10, 100, 100)
  textSize(25)
  text(pontos, 570, 60)
  
  if(keyDown('space')&&flint.y>220     ){
 flint.velocityY=-9
  }
  flint.velocityY+=0.3
  flint.collide(ground)
  if(flint.isTouching(fogareo)){
  go='fim'
  }
  if(go==='fim'){
  fogareo.setVelocityXEach(0)
  
  }
  if(go==='jogar'){
    claudia()
    fogao()
    ouro()
    flint.overlap(ss,function(colletor, coletado){
    pontos= pontos +1
    coletado.remove()


    })
  }
 


}
function claudia(){
if(frameCount%100===0){
var cladio= createSprite(700,300,150,50)
cladio.addImage('claudinho',ci)
cladio.scale=4.5
cladio.velocityX=-random(2,7)
cladio.depth= flint.depth -1
}

}

function fogao(){
if(frameCount%150===0){
var rengoku= createSprite(700,415,10,10)
rengoku.addImage('CHAMAS',bb8)
rengoku.scale=5
rengoku.velocityX=-7
rengoku.debug=true
fogareo.add(rengoku)
rengoku.setCollider('rectangle',0,0,10,20)
}
}

function ouro(){
  var aux=Math.round(random(50,200))

  if(frameCount%aux===0){
  var ferrari= createSprite(775,random(300,415),10,10)
  ferrari.scale=5
  ferrari.velocityX=-7
  ferrari.debug=true
  ss.add(ferrari)
  ferrari.setCollider('rectangle',0,0,10,20)
  var key= Math.round(random(1,2))
  switch (key) {
    case 1:ferrari.addImage('money',precioso)
      
      break;
    
    case 2: ferrari.addImage('coin',bitcoin)
    default:
      break;
  }
  }
  }
  





