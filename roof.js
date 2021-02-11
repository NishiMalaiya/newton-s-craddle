class Roof{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,400,20,option);
      this.width = 400;
      this.height = 20;
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}