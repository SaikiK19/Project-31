class Plinko{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution: 1,
            friction: 0
        }
        this.r = 20
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill("white")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}