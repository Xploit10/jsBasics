
// Returns a number and whether it is odd or even.
function showNumbers (limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i, 'Even');
        }
        else console.log(i, 'Odd')
    }
}

showNumbers(10);

function showOddEven (limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}

showOddEven(15);