const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld;
var spaceShip, spaceShipImg;
var playerShip, playerShipImg;
var mySentry;

function preload()
{
  spaceShipImg = loadImage("./assets/spaceship.png");
  playerShipImg = loadImage("./assets/heroplane.png");
}
function setup() {
createCanvas(windowWidth, windowHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  spaceShip = createSprite(100,height-200)
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

  playerShip = createSprite(width-200,100);
  playerShip.addImage(playerShipImg);
  playerShip.scale = 0.25;

  mySentry = new Sentry(spaceShip.x + 150,spaceShip.y,30,30)

  
}

function draw() {
  background(112,112,112);  
  Engine.update(myEngine);
  
  drawSprites();

  mySentry.display();

  //fill("white");
  arc(mySentry.x, mySentry.y - 15, mySentry.w, mySentry.h + 15, 57 * Math.PI , 115 * Math.PI);
}
function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    playerShip.x -= 5
  }
  if(keyCode === RIGHT_ARROW)
  {
    playerShip.x += 5
  }
  if(keyCode === UP_ARROW)
  {
    playerShip.y -= 5
  }
  if(keyCode === DOWN_ARROW)
  {
    playerShip.y += 5
  }
}