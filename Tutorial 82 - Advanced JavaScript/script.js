async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c
}

(async function main() {
    console.log(abc)
    console.log(f)

    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let x, y = [1, 2]
    // console.log(x, y)   // x is assigned with undefined and y is assigned with [1, 2] as their respective values

    let [x, y] = [1, 2]
    console.log(x, y)   // x is assigned with 1 and y with 2 

    let [x1, y1] = [1, 2, 3]
    console.log(x1, y1)   // x1 is assigned with 1, y1 with 2 and 3 is not assigned to any variable or such

    let [x2, y2, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(x2, y2, rest)   // x2 is assigned with 1, y2 with 2 and rest with [3, 4, 5, 6, 7, 8, 9]


    const obj = { 
        a : 1, b : 2, c : 3 
    }

    let {a, b} = obj
    console.log(a, b)


    let arr = [1, 5, 7, 8, 9, 10]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))

    let obj1 = {...arr}
    console.log(obj1)

    var abc = 10

    // In case, the var is changed to let or const then we can see an error
    var f = () => (
        console.log("I too am hoisted")
    )
})()