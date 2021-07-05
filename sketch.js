var ship1, ship2, ship3, ship4
var sea
var ship1


function preload(){
seaImage = loadImage ("sea.png");
shipImg = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png" )
}

function setup(){
  createCanvas(400,400);

  sea = createSprite (200,190,100,50);
  sea.addImage (seaImage);
  sea.scale = 0.3;

  ship1 = createSprite (200,170,100,50);
  ship1.addAnimation ("ship1Img", shipImg);
  ship1.scale = 0.2;

 
}

function draw() {
  background("blank");
  sea.velocityX = -3;
 if (sea.x < 0){
  sea.x = sea.width/5;
}

 drawSprites();
}