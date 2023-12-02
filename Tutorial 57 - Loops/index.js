console.log("This tutorial is on loops")

let a = 1
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let o = {
    name : "Elon Musk",
    "Company name" : "SpaceX"
}

// forin loop
for (const key in o) {
    console.log(key);
}

// forof loop
for (const c of "Chandu") {
    console.log(c)
}

// while loop
// let i = 0
// while (i <= 5) {
//     console.log(i++)
// }

// do-while loop
let i = 10
do {
    console.log(i++)
} while (i <= 5)