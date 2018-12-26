class Controller{
    constructor(){
        this.pos = createVector(width/2,height/2);//position
        this.vel = createVector(0,0);//velocity
        this.dir = createVector(random(width) , random(height));// direction
    }
    update(){
        let dir = createVector(mouseX - width/2, mouserY-height/2);
        dir.setMap(0,8);
        this.vel.lerp(dir,0.2);
        this.pos.add(this.vel)
    }
}