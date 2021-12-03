
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world,boyImg,stoneImg,treeImg,mangoImg;
var stone,launcher;
var tree,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	boyImg=loadImage("Images/boy.png")
	treeImg=loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,680,1200,10);
	stone=new Stone(235,500,30,30);
	mango1=new Mango(800,400,20);
	mango2=new Mango(800,300,20);
	mango3=new Mango(900,350,25);
	mango4=new Mango(950,400,20);
	mango5=new Mango(920,300,25);
	mango6=new Mango(860,400,20);
	mango7=new Mango(800,400,20);
	mango8=new Mango(740,400,20);
	mango9=new Mango(970,350,20);
	mango10=new Mango(990,450,20);
	tree=new Tree(850,470);
	launcher=new Launcher(stone.body,{x:235,y:580})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  
  image(boyImg,200,525,200,200);
  //image(treeImg,850,200,350,350);

	ground.display();
  stone.display();
  tree.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  

  
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function detectcollision(stone,mango){
 var mangoBodyPosition=mango.body.position
 var stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
} 




}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:500});
launcher.attach(stone.body);
	}

}

