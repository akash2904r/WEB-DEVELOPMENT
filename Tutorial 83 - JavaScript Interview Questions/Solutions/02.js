// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function double(arr) {
    let result = []
    result.push(arr[0] * arr[0])

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let previous = arr[i-1];
        
        if(element != previous) {
            let doubleUp = element * element
            result.push(doubleUp)
        }
        else
            result.push(element)
    }

    return result
}

let arr = [10, 9, 8, 8, 7, 6, 5, 5, 2, 3, 3, 1]

let result = double(arr)
console.log(result)