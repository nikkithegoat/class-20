const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world, ball, ground;

function setup(){
createCanvas(800,400);
engine= Engine.create();
world= engine.world;
var ball_options={
  restitution: 1
}
ball= Bodies.circle(400,20,25,ball_options);
World.add(world, ball);
var options= {
  isStatic: true

}
ground= Bodies.rectangle(40,400,800,10,options);
World.add(world, ground);
}

function draw(){
background("lavender");
Engine.update(engine);
ellipse(ball.position.x, ball.position.y, 50);
rect(ground.position.x, ground.position.y, 800, 10);

}