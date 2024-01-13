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



import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "D:\\Akash\\WEB DEVELOPMENT\\Tutorial 93 - Exercise 15 Solution"
let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("Running for", item)

    let ext = item.split(".")[item.split(".").length - 1]

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}