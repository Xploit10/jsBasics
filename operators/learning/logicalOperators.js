// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true)

let highIncome = true;
let goodCreditScore = true;

let eligibileForLoan = highIncome && goodCreditScore;

console.log(eligibileForLoan)

// Logical OR (||)
// Returns TRUE if one of the operands are TRUE
console.log(true || true)

highIncome = false;
goodCreditScore = false;

eligibileForLoan = highIncome || goodCreditScore;

console.log(eligibileForLoan)

// Logical NOT (!)
let applicationRefused = !eligibileForLoan;
console.log('Application Refused: ' + applicationRefused);

// Falsy 
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);