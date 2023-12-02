console.log("This is the tutorial for the conditional statements in JavaScript")

let age = 45

if(age > 18)
    console.log("You can vote")
else
    console.log("You can't vote")

let a = 2, b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log(a++)
console.log(a--)


// let currentAge = 25

// if(currentAge >= 18) {
//     console.log("You are an adult")
// }


// let currentAge = 10

// if(currentAge >= 18) {
//     console.log("You are an adult")
// }
// else {
//     console.log("You are not an adult")
// }



let currentAge = 18

if(currentAge > 18) {
    console.log("You are an adult")
}
else if(currentAge == 18) {
    console.log("Congralutions!!! You are an adult from now on...")
}
else {
    console.log("You are not an adult")
}



// I am single line comment 

/* Whereas
I am the 
mighty
multi-line
comment */



let a1 = 10, b1 = 20, min
min = (a1 > b1) ? "b1" : "a1"

// The above ternary operator is equivalent to
// if(a1 > b1) {
//     min = "b1"
// }
// else {
//     min = "a1"
// }

console.log("The minimum of a1 and b1 is", min)