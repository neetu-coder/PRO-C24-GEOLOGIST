const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//variables are created
var engine, world;
var hammer;
var stone1
var rubber1
var iron1

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
// a new plane hammer ,stone,iron,rubber
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(290,400,50,50)
    rubber1 = new Rubber (400,460)
    iron1 = new Iron (400,50)

    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display()
    iron1.display(); 
}