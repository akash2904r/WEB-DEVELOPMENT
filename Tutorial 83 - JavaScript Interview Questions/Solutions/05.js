// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(nums) {
    let res = 0

    for (const num of nums) {
        if(num < 0) 
            break
        res += num
    }

    console.log(res)
}

let num = [1, 2, 3, 4, 5, -4, 5, 4, 3, 2, 1]
sum(num)