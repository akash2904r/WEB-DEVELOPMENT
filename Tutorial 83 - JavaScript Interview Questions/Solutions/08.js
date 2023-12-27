// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function arrMap(element) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(element * 2)
        }, 500);
    })
}

async function main() {
    let arr = [10, 20, 30, 40, 50]

    for (let i = 0; i < arr.length; i++) {
        let element = await arrMap(arr[i])
        console.log(element)
    }
}

main()