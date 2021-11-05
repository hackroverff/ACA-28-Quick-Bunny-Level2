var player, carrot, obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, edges, snake, snakeGroup;


function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites();
  player = createSprite(40,550,30,30);
  obs1 = createSprite(80,250,100,20);
  obs2 = createSprite(230,250,100,20);
  obs3 = createSprite(380,250,100,20);
  obs4 = createSprite(530,250,100,20);
  obs5 = createSprite(30,300,100,20);
  obs6 = createSprite(180,300,100,20);
  obs7 = createSprite(330,300,100,20);
  obs8 = createSprite(480,300,100,20);
  obs9 = createSprite(630,300,100,20);
  carrot = createSprite(550,40,30,30);    
  
  // obs1.velocityX=5;
  // obs2.velocityX=-5;
  // obs3.velocityX=5;
  // obs4.velocityX=-5;
  // obs5.velocityX=5;
  // obs6.velocityX=-5;
  // obs7.velocityX=5;
  // obs8.velocityX=-5;
  // obs9.velocityX=5;
  
  player.scale=0.5;

  snakeGroup = new Group()
}

function draw() {
  background("green");    
  player.bounceOff(edges[0]);  
  player.bounceOff(edges[1]);  
  player.bounceOff(edges[2]);  
  player.bounceOff(edges[3]);  
  obs1.bounceOff(edges[1]);
  obs1.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);
  obs6.bounceOff(edges[0]);
  obs7.bounceOff(edges[1]);
  obs7.bounceOff(edges[0]);
  obs8.bounceOff(edges[1]);
  obs8.bounceOff(edges[0]);
  obs9.bounceOff(edges[1]);
  obs9.bounceOff(edges[0]);

  carrot.shapeColor = "pink"; 
  obs1.shapeColor = "red"; 
  obs2.shapeColor = "red"; 
  obs3.shapeColor = "red"; 
  obs4.shapeColor = "red"; 
  obs5.shapeColor = "red"; 
  obs6.shapeColor = "red"; 
  obs7.shapeColor = "red"; 
  obs8.shapeColor = "red"; 
  obs9.shapeColor = "red"; 
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
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs2)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs3)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs4)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs5)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs6)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs7)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs8)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs9)){
    // obs1.velocityX=0;
    // text("YOU LOSE",200,200);
    player.x = 40;
    player.y = 550;
  }
  generateSnakes();

  for(var i = 0 ; i< (snakeGroup).length ;i++){
    var temp = (snakeGroup).get(i) ;
    if (player.isTouching(temp)) {
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
  }
}