let num = prompt("Enter an number: "), result = 1

for (let i = 2; i <= num; i++) {
    result *= i
}

console.log(`The factorial of ${num} is ${result}`)