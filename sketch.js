var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redZonesprite1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
//middle sprites	 
	redZonesprite1=createSprite(400,650,200,20)
	redZonesprite1.shapeColor="red"; 

	redZonesprite1=Bodies.rectangle(400,650,200,20, {isStatic:true} );
	World.add(world,redZonesprite1);
// left side 
	redZonesprite2=createSprite(290,610,20,100)
	redZonesprite2.shapeColor="red"; 

	redZonesprite2=Bodies.rectangle(290,610,20,100, {isStatic:true} );
	World.add(world,redZonesprite2);
// right side
	redZonesprite3=createSprite(510,610,20,100)
	redZonesprite3.shapeColor="red"; 

	redZonesprite3=Bodies.rectangle(510,610,20,100, {isStatic:true} );
	World.add(world,redZonesprite3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}



