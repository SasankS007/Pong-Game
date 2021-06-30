var posX = 200;
var posY = 200;
function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  background("red")
  text(mouseX+","+mouseY,mouseX,mouseY)
  fill("blue")
  rect(5,mouseY,10,100);
  fill("green")
  rect(385,mouseY,10,100)
  fill("black")
  //rect(mouseX,200,10,10)
  posX = posX + 2
  posY = posY - 2
  rect(posX,posY,10,10)
  fill("white")
  text("Sasank",25,390)
  text("Aarti",350,390)
  text("My First Pong Game",150,15)
  
  
}