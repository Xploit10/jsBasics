
// for-in
const person = {
    name: 'Barry',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'blue', 'green'];

for (let index in colors) {
    console.log(index, colors[index])
}