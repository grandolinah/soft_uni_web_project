let segment;
let color;
let snake;
let snakeController;
function setup() {
    createCanvas(600, 600);
    //segment = new Segment(width/2, height/2,20)
    //color = createVector(random(255), random(255),random(255));
    snakeController = new Controller();
    snake = new Snake(snakeController,width/2, height/2)
}
function draw() {
    background(0);
    //segment.calculateEnd()
    //segment.display(color);
    snake.display();
}