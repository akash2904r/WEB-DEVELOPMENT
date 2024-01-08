import fs from "fs/promises"
// const fs = require("fs/promises")   // This is also valid

let a = await fs.readFile("example.txt")
let b = await fs.appendFile("example.txt", "\n\n\n\nI and the new lines were appended using the promise module")

console.log(a.toString(), b)