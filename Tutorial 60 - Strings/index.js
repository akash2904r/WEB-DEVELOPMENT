console.log("This is a tutorial on strings")

let a = "string"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let me = "Akash"
let frnd = "Hrudayesh"

console.log("My name is " + me + " and my friend's name is " + frnd)

// Example of string interpolation
console.log(`My name is ${me} and my friend's name is ${frnd}`)

// Example of \r i.e., carriage return escape character
console.log("string\rt")
console.log("apple\rorange")
console.log("cocktail\rmo")


let b = "Chandu"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

console.log("89".toLowerCase())

let c = "Chocolate Cake"
console.log(c.slice(0, 9))
console.log(c.slice(10))

console.log(c.replace("Cake", "Truffle"))
console.log("Chocolate Cakey Cake".replace("Cake", "Truffle"))


let str1 = "Drag", str2 = "on"
console.log(str1.concat(str2))

console.log(c.trim())

console.log("Amrit Shankar".indexOf("a"))
console.log("Amrit Shankar".indexOf("z"))
console.log("Amrit Shankar".charAt(3))
console.log("Amrit Shankar".charAt(34))