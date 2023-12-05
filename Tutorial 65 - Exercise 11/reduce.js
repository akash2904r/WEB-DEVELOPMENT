let num = prompt("Enter an number: ")

if(num != 0) {
    let arr = []

    for (let i = 2; i <= num; i++) {
        arr.push(i)
    }

    let multiply = (a, b)=> {
        return a * b
    }

    console.log(`The factorial of ${num} is ${arr.reduce(multiply)}`)
}
else {
    console.log(`The factorial of 0 is 1`)
}