const Bodies = Matter.Bodies;

var maxDrops = 100;
var thunder,thunderImg;
var thunderGroup;

function preload()
{
    thunderImg = loadAnimation("Img/1.png,2.png,3.png,4.png");
}

function setup()
{
   createCanvas(500,730);   
   umberalla = new Umberalla(100,100,50,60);

   thunder = createSprite(0,50,10,10);
   thunder.addAnimation("sound",thunderImg);
   thunder.scale = 0.1;


   thunderGroup = new Group();

   thunderGroup.add(thunder);
}

function draw()
{
    background("black");

    for(var i = 0; i< maxDrops; i++)
    {
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

    if(frameCount % 20 == 0)
    {    
      thunderGroup.destroyEach()
    } 

    umberalla.display();

    drawSprites();
}   