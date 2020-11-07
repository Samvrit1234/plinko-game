 Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var gameState = "play";
var turn = 0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

        noStroke();
        textSize(35)
        fill("white")
        text("500",10,510);

        noStroke();
        textSize(35)
        fill("white")
        text("500",90,510)

        noStroke();
        textSize(35)
        fill("white")
        text("500",170,510)

        noStroke();
        textSize(35)
        fill("white")
        text("500",250,510)

        noStroke();
        textSize(35)
        fill("white")
        text("100",330,510)

        noStroke();
        textSize(35)
        fill("white")
        text("100",410,510)

        noStroke();
        textSize(35)
        fill("white")
        text("100",490,510)

        noStroke();
        textSize(35)
        fill("white")
        text("200",570,510)

        noStroke();
        textSize(35)
        fill("white")
        text("200",650,510)

        noStroke();
        textSize(35)
        fill("white")
        text("200",730,510)

    mousePressed();

 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%150===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   particle.display();
     if(particle != null){
          particle.display();
          if(particle.body.position.y > 760){
                if(particle.body.position.y > 760){
              score = score+500;
              particle = null;
              if(turn>=5){
                gameState = "end";
              }
            }
          }
     }   




}
function mousePressed(){
  if(gameState === "end"){
    score++;

    particle = new Particle(mouseX,10,10,10);
  }
}
/*function keyPressed(){
  if(keyCode === 32 && gameState === "play"){ 
     // if(birds.length >= 0){
         // Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
         // slingshot.attach(birds[birds.length - 1].body);
       // gameState = "onSling";
    //  }     
    
    }
    
   }*/