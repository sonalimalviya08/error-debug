var dog,dog1,backgroundimg,hallway
function preload(){
dog1=loadImage("Images/Labrador10.png")
backgroundimg=loadImage("Images/Hallway.jpg")
}
function setup() {
  createCanvas(2000,1000);
  //hallway=createSprite(300,200)
//hallway.addImage(backgroundimg)
//hallway.scale=3
  dog=createSprite(1000,700)
  dog.addImage(dog1)
  dog.scale=2
  console.log(hallway)
}

function draw() {
  background(backgroundimg);  
  drawSprites();
}