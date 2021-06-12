const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions1,diivions2,divisions3,divisions4,divisions5divisions6;
var plinko1,plinko2,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14;
var plinko19,plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30,plinko31,pinko32;
var plinko39,plinko40,plinko41,plinko42,plinko43,plinko44,plinko45,plinko46,plinko47,plinko48,plinko49,plinko50,plinko51,plinko52;
var plinko57,plinko58,plinko59,plinko60,plinko61,plinko62,plinko63,plinko64,plinko65,plinko66,plinko67,plinko68,plinko69,pinko70,plinko77;
var particles=[];
var score=0;
var count=0;
var gameState="start"


function setup() {
  createCanvas(500,800);
  engine = Engine.create();
	world = engine.world;  
  ground=new Ground(240,780,700,20) 
  divisions1=new Divisions(5,620,20,300)
  divisions2=new Divisions(80,620,20,300)
  divisions3=new Divisions(160,620,20,300)
  divisions4=new Divisions(240,620,20,300)
  divisions5=new Divisions(320,620,20,300)
  divisions6=new Divisions(400,620,20,300)
  divisions7=new Divisions(473,620,20,300)

  plinko1=new Plinko(25,130,10);
  plinko2=new Plinko(65,130,10);
  plinko3=new Plinko(110,130,10);
  plinko4=new Plinko(145,130,10);
  plinko5=new Plinko(185,130,10);
  plinko6=new Plinko(220,130,10);
  plinko7=new Plinko(255,130,10);
  plinko8=new Plinko(290,130,10);
  plinko9=new Plinko(325,130,10);
  plinko10=new Plinko(360,130,10);
  plinko11=new Plinko(395,130,10);
  plinko12=new Plinko(430,130,10);
  plinko13=new Plinko(465,130,10);
  plinko14=new Plinko(500,130,10);
  plinko19=new Plinko(30,180,10);
  plinko20=new Plinko(65,180,10);
  plinko21=new Plinko(100,180,10);
  plinko22=new Plinko(135,180,10);
  plinko23=new Plinko(170,180,10);
  plinko24=new Plinko(205,180,10);
  plinko25=new Plinko(240,180,10);
  plinko26=new Plinko(275,180,10);
  plinko27=new Plinko(310,180,10);
  plinko28=new Plinko(355,180,10);
  plinko29=new Plinko(380,180,10);
  plinko30=new Plinko(415,180,10);
  plinko31=new Plinko(450,180,10);
  plinko32=new Plinko(485,180,10);
  plinko39=new Plinko(45,230,10);
  plinko40=new Plinko(75,230,10);
  plinko41=new Plinko(110,230,10);
  plinko42=new Plinko(145,230,10);
  plinko43=new Plinko(165,230,10);
  plinko44=new Plinko(215,230,10);
  plinko45=new Plinko(250,230,10);
  plinko46=new Plinko(285,230,10);
  plinko47=new Plinko(320,230,10);
  plinko48=new Plinko(355,230,10);
  plinko49=new Plinko(390,230,10);
  plinko50=new Plinko(425,230,10);
  plinko51=new Plinko(460,230,10);
  plinko52=new Plinko(495,230,10);
  plinko57=new Plinko(30,280,10);
  plinko58=new Plinko(65,280,10);
  plinko59=new Plinko(100,280,10);
  plinko60=new Plinko(135,280,10);
  plinko61=new Plinko(170,280,10);
  plinko62=new Plinko(205,280,10);
  plinko63=new Plinko(240,280,10);
  plinko64=new Plinko(275,280,10);
  plinko65=new Plinko(310,280,10);
  plinko66=new Plinko(345,280,10);
  plinko67=new Plinko(380,280,10);
  plinko68=new Plinko(415,280,10);
  plinko69=new Plinko(450,280,10);
  plinko70=new Plinko(485,280,10);


//plinko71=new Plinko(265,230,10)
  







  
}

function draw() {
  
  background("black");
  
  Engine.run(engine);
  Engine.update(engine);

  textSize(35);
  fill("yellow");
  text("Score: "+score,20,70);

  textSize(15);
  fill("yellow")
  text("500",30,500)

  textSize(15);
  fill("yellow")
  text("500",105,500)

  textSize(15);
  fill("yellow")
  text("100",185,500)

  textSize(15);
  fill("yellow")
  text("100",265,500)


  textSize(15);
  fill("yellow")
  text("200",350,500)

  textSize(15);
  fill("yellow")
  text("200",425,500)


  ground.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();
  divisions7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
 
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();
  plinko61.display();
  plinko62.display();
  plinko63.display();
  plinko64.display();
  plinko65.display();
  plinko66.display();
  plinko67.display();
  plinko68.display();
  plinko69.display();
  plinko70.display();

  //plinko77.display();
  for(var j=0;j<particles.length;j++){
   
      particles[j].display();
      if(particles[j].body.position.x>8 && particles[j].body.position.x<80){
        score=score+500
        particles.pop();

      }
      if(particles[j].body.position.x>160 && particles[j].body.position.x<240){
        score=score+100
        particles.pop();
      }
      if(particles[j].body.position.x>320 && particles[j].body.position.x<400){
        score=score+200
        particles.pop();
      }
      
    
  }
  
  console.log(particles);

  

if(count>5){
  gameState="end"
  textSize(30);
  fill(255);
  text("Game Over",250,400)
}


}
function keyPressed(){
  if(keyCode===32){
    if(gameState!=="end"){
      count++
      particles.push(new Particles(mouseX,10,5))
      }
}
 
}
