// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// For example, these files become :

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. dilip.zip
// 5. amrit.zip
// 6. cat.jpg
// 7. dilip.pdf

// This :
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/dilip.pdf
// zip/dilip.zip, zip/amrit.zip



// If you run the following code, then the files inside this particular folder will be rearranged into different folders under their extension names

const fs = require("fs")
const path = require("path")

const contents = fs.readdirSync(__dirname)

contents.forEach(e => {
    let extension = path.extname(e).slice(1)
    let newPath

    fs.mkdir(extension, { recursive: true }, (err) => {
        if (err) {
            console.log(`${extension} Folder already exists...`)
        } 
    })
    newPath = path.join(extension, e)

    fs.rename(e, newPath, (err) => {
        if (err) {
            console.error('Error moving file:', err.message);
        }
    })
})