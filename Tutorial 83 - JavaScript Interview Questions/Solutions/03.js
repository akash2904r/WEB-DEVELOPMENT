// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function Mirror(str) {
    let mirrored = ""

    for (let i = str.length - 1; i >= 0; i--) 
        mirrored += str[i]

    return mirrored
}

let str = "Mirror Mirror"

let mirrored = Mirror(str)
console.log(str, mirrored)