
// if number divisible by 3 - Fizz 
// if number divisible by 5 - buzz
// if number divisible by 3 && 5 - FizzBuzz
// if not divisible by 3 or 5 => input 

function fizzBuzz (input) {
    if (typeof input !== 'number') {
        return 'Not a number';
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }
    return input
}

const output = fizzBuzz(7);
console.log(output);