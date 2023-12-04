let arr = [1, 2, 3, 4, 5], newArr = []

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }

// console.log(newArr)


newArr = arr.map((e)=> {
    return e**2
})

console.log(newArr)


// Returns true if the element is greater than 10
const great10 = (e)=> {
    if(e > 10)
        return true

    return false
}

console.log(newArr.filter(great10))



let arr2 = [1, 2, 3, 4, 5]

const add = (a, b)=> {
    return a + b
}

console.log(arr2.reduce(add))



console.log(Array.from("Chandu"))