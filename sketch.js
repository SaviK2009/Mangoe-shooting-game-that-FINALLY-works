
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    boyimg=loadImage("boy.png");

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    background("white")
    world = engine.world;


    ground = new Box(600,height,1200,20);
    

    mango1 = new Box(700,320,70,70);
    mango2 = new Box(920,320,70,70);
    mango3 = new Box(810, 350);
    mango4 = new Box(810,260,300, PI/2);

    mango5 = new Box(700,240,70,70);
    tree = new Tree(700,240,70,70);
    rock = new Rock(400,400,20,20);
    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();

    mango5.display();
    
    
    

   
    
    rock.display();    
}

function mouseDragged()
{
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY} )    
}

function mouseReleased()
{
    rock.fly();
}
}