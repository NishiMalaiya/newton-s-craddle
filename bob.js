class Bob{
    constructor(x,y){
        var option = {
           // isStatic: true,
            restitution: 1,
            friction: 1,
            density: 3
        }
        this.body = Bodies.circle(x,y,30,option);
        this.radius = 30;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        fill('pink');
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}