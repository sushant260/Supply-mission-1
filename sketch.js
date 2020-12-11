
var helicopterIMG, helicopterSprite,packageIMG;
var package,ground, packageB;
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
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    };

    ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
     World.add(world, ground);
     
     var package_options ={
        restitution: 0.7
    };

	packageB = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageB);
	
    
	//Create a Ground
  
}


function draw() {
  background(0);
  
  rectMode(CENTER);
  package.x=packageB.position.x;
  package.y=packageB.position.y;
  drawSprites();
  DownKey();
}
function DownKey(){
	if (keyCode===DOWN_ARROW){
		Engine.update(engine);
	}
}


