let a = prompt("Enter a number: ")
let b = prompt("Enter another number: ")

if(isNaN(a) || isNaN(b))
    throw SyntaxError("The given input is not an integer")

let sum = parseInt(a) + parseInt(b)

console.log("The sum is", sum)


function main() {
    // let x = 5

    try {
        console.log("The sum is", sum * x)
        return true
    } 
    catch (error) {
        console.log("Vandhutan... Vandhutan... Vandhutan... Error Vandhutan...")
        return false
    }
    finally {
        console.log("Files are being closed")
    }
}

main()