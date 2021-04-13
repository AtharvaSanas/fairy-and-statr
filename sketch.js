var starImg,bgImg,fairyImg;
var star, starBody;
var fairy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("fairyImage2.png"); 

function setup() {
	createCanvas(800, 750);

	

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite (100, 200)
    fairy = addImage(fairyImg)
	fairy = addSound()

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
	background(bgImg);
  
	star.x= starBody.position.x 
	star.y= starBody.position.y 
  
	console.log(star.y);
  
	//write code to stop star in the hand of fairy
  if(star.y > 470 &&starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

	drawSprites();
  
  }
  
  function keyPressed() {
  
	 
	if(keyCode === RIGHT_ARROW)[
         fairy.X = fairy.X + 20 

	]
	
	if(keyCode === LEFT_ARROW)[
		fairy.X = fairy.X + 20

   ]
	
	if (keyCode === DOWN_ARROW) {
		  Matter.Body.setStatic(starBody,false); 
	  }
  
	  //writw code to move fairy left and right
	  
  }
  