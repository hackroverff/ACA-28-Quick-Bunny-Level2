var player, carrot, obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, edges, snake, snakeGroup, bgImage, snakeImage, carrotImage, bunnyImage;


function preload() {
  carrotImage = loadImage("images/carrotImage.png");
  bunnyImage = loadImage("images/bunnyImage.png");
  snakeImage = loadImage("images/snakeImage.png");
  bgImage = loadImage("images/bgImage.png");

}


function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites();
  player = createSprite(40,550,30,30);
  player.addImage(bunnyImage);
  player.scale=0.15;
  obs1 = createSprite(80,250,100,20);
  obs2 = createSprite(230,250,100,20);
  obs3 = createSprite(380,250,100,20);
  obs4 = createSprite(530,250,100,20);
  obs5 = createSprite(10,320,100,20);
  obs6 = createSprite(170,320,100,20);
  obs7 = createSprite(320,320,100,20);
  obs8 = createSprite(490,320,100,20);
  carrot = createSprite(550,40,30,30); 
  carrot.addImage(carrotImage);
  carrot.scale = 0.2;   

  snakeGroup = new Group()
}

function draw() {
  background(bgImage);    
  player.bounceOff(edges[0]);  
  player.bounceOff(edges[1]);  
  player.bounceOff(edges[2]);  
  player.bounceOff(edges[3]);  

  carrot.shapeColor = "pink"; 
  obs1.shapeColor = "red"; 
  obs2.shapeColor = "red"; 
  obs3.shapeColor = "red"; 
  obs4.shapeColor = "red"; 
  obs5.shapeColor = "red"; 
  obs6.shapeColor = "red"; 
  obs7.shapeColor = "red"; 
  obs8.shapeColor = "red"; 
  player.shapeColor = "white";
  stroke("red");

  if (keyDown("up")) {
    player.y=player.y-3;
  }
  if (keyDown("down")) {
    player.y=player.y+3;
  }
  if (keyDown("left")) {
    player.x=player.x-3;
  }
  if (keyDown("right")) {
    player.x=player.x+3;
  }  
  if(player.isTouching(carrot)){
    text("YOU WIN",200,200)
  }
  if(player.isTouching(obs1)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs2)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs3)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs4)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs5)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs6)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs7)){
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs8)){
    player.x = 40;
    player.y = 550;
  }

  generateSnakes();

  for(var i = 0 ; i<snakeGroup.length; i++){
    var temp = snakeGroup.get(i) ;
    if(player.isTouching(temp)){
      player.x = 40;
      player.y = 550;
    }
  }

  drawSprites();
}
function generateSnakes(){
  if(frameCount % 30===0){
    var snake = createSprite(600,random(70,520),random(30,120),5)
    snake.velocityX = random(-4,-1);
    snake.shapeColor = "yellow";
    snake.addImage(snakeImage);
    snake.scale=random(0.1,0.4);
    snakeGroup.add(snake);

  }
}