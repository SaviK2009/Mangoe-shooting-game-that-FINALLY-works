
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock;

function preload() 
{
    boyimg=loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    background("white")
    world = engine.world;
    


    ground = new Box(600,height,1200,20);
    

    mango1 = new Mango(380,260,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810, 350);
    mango4 = new Mango(810,260,300);

    mango5 = new Box(700,240,70,70);
    tree = new Tree(400,240,200,200);
    rock = new Rock(400,200);
    sling= new Sling(rock.body, {x:400, y:200});
    
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();

    mango5.display();
    
    
    
    tree.display();
   
    sling.display();
    rock.display();    
}

function mouseDragged()
{
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY} )    
}

function mouseReleased()
{
    sling.fly();
}
