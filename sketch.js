var m,f
function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 100, 50);
  f = createSprite(400, 200, 50, 100);
}

function draw() {
  background(0,0,0); 
  m.x=World.mouseX;
  m.y=World.mouseY; 
  if ((m.x-f.x<m.width/2+f.width/2)&&(f.x-m.x<m.width/2+f.width/2)&&(m.y-f.y<m.height/2+f.height/2)&&(f.y-m.y<m.height/2+f.height/2)){
    m.shapeColor="red";
    f.shapeColor="red";
  }
  else {
    m.shapeColor="white";
    f.shapeColor="white";
  }
  drawSprites();
}