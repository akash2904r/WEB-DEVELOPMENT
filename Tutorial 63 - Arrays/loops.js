let a = [1, 23, 2, 45, 98]

// For Loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }




// For-Each Loop
// a.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// })




// let obj = {
//     a : 1, b : 2, c : 3
// }

// For-in Loop -> Mainly used for objects
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }




// For-of Loop -> Mainly used for arrays
for (const i of a) {
    console.log(i)
}