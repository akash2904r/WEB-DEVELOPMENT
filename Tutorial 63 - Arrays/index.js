let arr = [10, 20, 30, 40, 50]

console.log(arr)
// console.log("Size of the array is", arr.length)
// console.log("Type of an array is", typeof arr)

// // arr[0] = 32
// // console.log(arr[0])
// // console.log(arr[2])
// // console.log(arr[4])


console.log(arr.toString())
console.log(arr.join(" -> "))

// arr.pop()
console.log(arr.pop())
console.log(arr)

// arr.push("Chandu")
console.log(arr.push("Chandu"))
console.log(arr)

// arr.shift()
console.log(arr.shift())
console.log(arr)

// arr.unshift("Amrit")
console.log(arr.unshift("Amrit"))
console.log(arr)

let a = [1, 2, 3, 4, 5, 6]

// delete a[5]
console.log(delete a[6])
console.log(a)


let a1 = [1, 3, 5], a2 = [2, 4, 6], a3 = [12, 13, 14]
// a1.concat(a2)
console.log(a1.concat(a2, a3))


let a4 = [1, 2, 3, 12, 13, 22, 34]
// a4.sort()
console.log(a4.sort())



let b = [1, 2, 3, 4, 5]
// b.splice(1, 3)
// console.log(b.splice(1, 3))
// console.log(b)
console.log(b.splice(1, 3, 23, 34, "Dilip"))
console.log(b)


let c = [1, 2, 3, 4, 5]
// c.slice(1, 3)
console.log(c.slice(1, 3))
console.log(c)


// c.reverse()
console.log(c.reverse())
console.log(c)
