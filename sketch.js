const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)

    bird1 = new Bird(200,100)
    pig1 = new Pig(50,50)
    log1 = new Log(100,150,30,120)
    log2 = new Log(120,120,30,170)
    log3 = new Log(140,180,50,180)
    log4 = new Log(180,200,30,180)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}