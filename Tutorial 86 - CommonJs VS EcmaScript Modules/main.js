// const http = require("node:http")


// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     //   res.setHeader('Content-Type', 'text/plain');
//     //   res.end('<h1>Hello World</h1>');
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });





// // Importing the named exports 
// import {a, b, c} from "./myModule.js"
// console.log(a, b, c)



// // Importing the default export
// import obj from "./myModule_ES.js"
// console.log(obj)

// import pointLocation from "./myModule_ES.js"
// console.log(pointLocation)




const a = require("./myModule_CJS")
console.log(a, __dirname, __filename)