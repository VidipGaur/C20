var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = 'green';
  fixedRect.velocityY = 3;
movingRect.velocityY = -3;
}

function draw() {
  background(0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
    fixedRect.velocityY = -3;
    movingRect.velocityY = 3;
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
