console.log("This tutorial is on functions")

// console.log("Maths is an subject")
// console.log("Maths is tough")
// console.log("If not prepared well, we could fail Maths exams")

function subject(name) {
    console.log(name + " is an subject")
    console.log(name + " is tough")
    console.log("If not prepared well, we could fail " + name + " exams")
}

subject("Maths")
subject("Science")


function sum(a, b, c = 0) {
    // console.log(a + b)
    return a + b + c
}

a = sum(60, 9)
console.log(a)

b = sum(12, 23, 34)
console.log(b)

c = sum(34)
console.log(c)


// const func = (x)=> {
//     console.log("This is an arrow function... The value sent by you is", x)
// }

let func = (x)=> {
    console.log("This is an arrow function... The value sent by you is", x)
}

func(23)
func("Dilip")