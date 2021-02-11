class Rope{
    constructor(bodyA,bodyB,offsetx,offsety){
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            
        }
        this.body = Constraint.create(option);
        World.add(world,this.body);
        this.offsetx = offsetx;
        this.offsety = offsety;
    }
    display(){
        var pos1x = this.body.bodyA.position.x+this.offsetx;
        var pos2 = this.body.bodyB.position;
        var pos1y = this.body.bodyA.position.y+this.offsety;
        stroke(3);
        line(pos1x,pos1y,pos2.x,pos2.y)
    }
}