function Figure(color, size, position) {
    this.color = color;
    this.size = size;
    this.position = position;
    this.draw = () => {};
    this.calculateArea = () => {};
}

function Circle() {
this.draw = () => {console.log(`circle color ${this.color}`)};
}

Circle.prototype = Figure();

let circle = new Circle ("blue");
circle.draw();