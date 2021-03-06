class Particle{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.1,
            friction: 0
        }
        this.r = 20
        this.body = Bodies.circle(x,y,this.r/2,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}