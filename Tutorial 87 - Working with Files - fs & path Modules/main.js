const fs = require("fs")
// console.log(fs)

console.log("Start")
fs.writeFileSync("example.txt", "This is an example of writeFileSync")

fs.writeFile("example2.txt", "This is an example of writeFile", () => {
    console.log("Code is executed")
})

console.log("End")

// fs.writeFileSync("example.txt", "I was rewritten")

// fs.writeFile("example2.txt", "I was also rewritten just like example.txt", () => {
    //     console.log("Completed")
    // })

fs.readFile("example2.txt", (error, data) => {
    console.log(error, data.toString())
})
    
console.log(fs.readFileSync("example.txt").toString()) 


fs.appendFileSync("example.txt", ". I was appended using the appendFileSync method")
console.log(fs.readFileSync("example.txt").toString()) 


fs.appendFile("example2.txt", ". I was appended using the appendFile method", () => {
    console.log("Finished")
})

fs.readFile("example2.txt", (error, data) => {
    console.log(error, data.toString())
})