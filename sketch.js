var car, wall;
var weight,speed;
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 20, 20);
  car.shapeColor = "green"

  wall = createSprite(750,200,60,height/2)
  wall.shapeColor = "white"


  weight = random (400,15000)
  speed = random (2,5)
  
}

function draw() {
  background("black");  

 if (keyDown("space")){

  car.velocityX = speed ;
}
 if(is_Touching(car,wall)){
 car.velocityX = 0
 car.shapeColor = "blue"

 }

 
  drawSprites();
}



