var car,wall;
var speed,weight;


function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,50,400);
  wall.shapeColor="orange";
  car.velocityX=speed;
  
}




function draw() {
  background("blue");  
if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509
if(deformation>180)
{
  car.shapeColor = color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapecolor = color(0);
}

if(deformation<100){
  car.shapecolor = color(0,255,0);
}

}
  drawSprites();
 
}