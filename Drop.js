class Drop
{
    constructor(x,y,r)
    {
        var options = 
        {
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.r = 6;
        this.body = Bodies.circle(x,y,r,options);
    }
    
    display()
    {
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,options);
    }
}