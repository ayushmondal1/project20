
var car,wall;
var speed,weidth;
function setup() {
  createCanvas(1500,400);

speed=random(55,90);
weidth=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000, 200, 60, width/2);

  car.shapeColor= ("white");
car.velocityX=speed;

}

function draw() {
  background(0);  
  
   car.x=World.mouseX;
   car.y=World.mouseY;

if (wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation = 0.5 * weidth * speed* speed/22509;
if (deformation>180)
{
car.shapeColor=color(225,0,0);
}
if (deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if (deformation<100)
{
car.shapeColor= color(0,225,0);
}
}
else{
  car.shapeColor= ("white");
}

drawSprites();
}