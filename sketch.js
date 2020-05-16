const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var a,b,c,d,e;

var rain_drop = []

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    for(i = 0;i < 400;i = i+15){
        a = new Raindrop(random(0,400),i,15);
        b = new Raindrop(random(0,400),i,10);
        c = new Raindrop(random(0,400),i,25);
        d = new Raindrop(random(0,400),i,30);
        e = new Raindrop(random(0,400),i,20);
    }

    rain_drop = [a,b,c,d,e]

    ground = new Ground(200,390,400,20);
}

function draw(){
    background("white");
    Engine.update(engine);


        rain_drop[0].display()
        rain_drop[1].display()
        rain_drop[2].display()
        rain_drop[3].display()
        rain_drop[4].display()

    ground.display();
}