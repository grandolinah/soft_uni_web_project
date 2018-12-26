class Snake {
    constructor(controller, x, y) {
        this.controller = controller;
        this.thickness = random(10, 20);
        this.len = 10;
        this.head = new Segment(x, y, this.thickness);
        this.body = [];
        this.color = createVector(random(255), random(255), random(255));
        this.buildSnake();
    }

    buildSnake() {
        let prev = this.head;
        for (let i = 0; i < this.len; i++) {
            let current = new Segment(prev.end.x, prev.end.y, this.thickness);
            current.calculateEnd();
            this.body.push(current);
            prev = current;
        }

    }

    display() {
        this.head.display(this.color);
        for (let part of this.body) {
            part.display(this.color)
        }

    }
    update(){
        this.controller.update();
        this.head.follow(this.controller.pos.x, this.controller.pos.y);
        let prev = this.head;
        for (let part of this.body){
            part.follow(prev.start.x,prev.start.y);
            prev = part;
        }

    }


}