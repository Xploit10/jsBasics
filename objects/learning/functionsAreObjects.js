
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
         console.log('draw');
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
     console.log('draw');
}
`);

const circle1 = new Circle1(1);

console.log(circle1.radius)