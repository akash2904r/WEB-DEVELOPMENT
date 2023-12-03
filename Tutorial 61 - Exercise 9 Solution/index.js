/* 
    Create a faulty calculator using JavaScript

    This calculator does the following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
        
        + ---> -
        * ---> +
        - ---> /
        / ---> **

    The probability of it performing wrong operations is 10%
*/

let random = Math.random()

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
let c = prompt("Enter operation: ")

let obj = {
    '+' : '-',
    '*' : '+',
    '-' : '/', 
    '/' : '**'
}

if(random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


// eval() is an function that is used to evaluate an given expression 