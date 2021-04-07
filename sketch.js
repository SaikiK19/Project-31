
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;
var k = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(500,690,1000,20);
	for (var k = 0; k<=width; k = k + 80){
		divisions.push(new Divisions(k,530,10,300))
	}
	for (var k = 50; k<=width; k = k + 80){
		plinkos.push(new Plinko(k,135))
	}
	for (var k = 75; k<=width; k = k + 80){
		plinkos.push(new Plinko(k,75))
	}
	for (var k = 75; k<=width; k = k + 80){
		plinkos.push(new Plinko(k,195))
	}
	for (var k = 50; k<=width; k = k + 80){
		plinkos.push(new Plinko(k,255))
	}

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  for (var k = 0; k<divisions.length; k++){
	divisions[k].display()
}
for (var k = 0; k<plinkos.length; k++){
	plinkos[k].display()
}
if(frameCount % 60 == 0){
	particles.push(new Particle(random(50,width-50),0))
}
for (var k = 0; k<particles.length; k++){
	particles[k].display()
}

  
  drawSprites();
 
}
