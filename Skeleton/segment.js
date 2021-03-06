class Segment {
    constructor(x, y, thickness) {
        this.start = createVector(x, y);
        this.end = this.start.copy();
        this.thickenss = thickness;
        this.angle = 0;
        this.len = 5;
    }

    display(color) {
        stroke(color.x, color.y, color.z);
        strokeWeight(this.thickenss);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        stroke(255);
        strokeWeight(8);
        //point(this.start.x,this.start.y)
        //
        // +point(this.end.x,this.end.y)
    }

    calculateEnd() {
        let dx = cos(this.angle) * this.len;
        let dy = sin(this.angle) * this.len;
        this.end.set(this.start.x + dx, this.start.y + dy);
    }

    follow(targetX, targetY) {
        let target = createVector(targetX, targetY);
        let dir = p5.Vector.sub(target, this.start);
        this.angle = dir.heading();
        dir.setMag(this.len);
        dir.mult(-1);
        let newPos = p5.Vector.add(target,dir);
        this.start = newPos;
        this.calculateEnd();
    }
}