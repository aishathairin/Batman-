class Umbrella
{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadAnimation("Img/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png,")
    }
    
    display()
    {
        fill("blue");
        imageMode(CENTER);
        image(0,0,this.image,options);
    }
   
}