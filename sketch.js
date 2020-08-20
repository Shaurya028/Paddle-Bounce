var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(40, 200, 20, 20);
  ball.addImage(ballimg);
  ball.velocityX=9;  
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle, explosion);
  
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
    drawSprites();
  
}


function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

function explosion(){
  ball.velocityY=random(-8,8);
}

