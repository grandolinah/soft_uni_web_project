class Controller{
    constructor(){
        this.pos = createVector(width/2,height/2);//position
        this.vel = createVector(0,0);//velocity
        this.dir = createVector(random(width) , random(height));// direction
    }
    update(){
        let dir = createVector(mouseX - width/2, mouseY-height/2);
        dir.setMag(0.5);
        this.vel.lerp(dir,0.2);
        this.pos.add(this.vel)
    }
   // display(){
        //stroke(255,0,0);
       // strokeWeight(8);
       // point(this.pos.x,this.pos.y)
   // }
}