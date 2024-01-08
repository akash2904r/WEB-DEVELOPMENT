import path from "path"

let myPath = "D:\\Akash\\WEB DEVELOPMENT\\Tutorial 87 - Working with Files - fs & path Modules\\example.txt"

console.log(path.extname(myPath))   // Extension name
console.log(path.dirname(myPath))    // Directory name
console.log(path.basename(myPath))    // File or directory name that path is specifying
console.log(path.join("d:/", "programs\\example.txt"))    // Used to join paths