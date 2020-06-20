var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";


	packageBody = Bodies.circle(400 , 100, 10, {restitution:0.3, isStatic:false});
	
	World.add(world, packageBody);
	rect1 = createSprite(300,610,20,100);
rect1.shapeColor = "red";
rect1.isStatic = true;

rect2 = createSprite(500,610,20,100);
rect2.shapeColor = "red";
rect2.isStatic = true;


rect3 = createSprite(400,655,180,10);
rect3.shapeColor = "red";
rect3.isStatic = true;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
//ball1 = new ball (100,610,20,20);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);

 // ball1.display();
  ellipse(this.packageBody.position.x,this.packageBody.position.y,20)
  packageBody.shapeColor = "blue";
  
  drawSprites();


 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(this.packageBody,{x:85,y:-85})
	}
}


