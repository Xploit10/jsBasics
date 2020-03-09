

// let x = { value: 20 }
// let y = x;

// x.value = 20;

let number = 10; 

// Primitives is coppied by their values.
function increase(number) {
    number++;
}

increase(number);
console.log(number);

// Object is passed by reference, changes will be visible.
let obj = { value: 10 };

function increaseObj(obj) {
    obj.value++;
}

increaseObj(obj);
console.log(obj);