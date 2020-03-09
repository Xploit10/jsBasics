

function maxNumber (numA, numB) {
    if (numA > numB) {
        return numA;
    }
    else if (numA < numB) {
        return numB;
    }
    else {
        return 'Equal'
    }
    
}

let number = maxNumber(3, 4);
console.log(number);

function max (a, b) {
    return (a > b) ? a : b;
}

number = max(3, 6);
console.log(number);