
// Constructor Function
// Pascal Notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}

const circle = new Circle(1);
console.log(circle.radius, circle.draw)