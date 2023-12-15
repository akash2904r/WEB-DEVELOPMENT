console.log("Chandu uses Java")
console.log("Amrit also uses Java")


setTimeout(() => {
    console.log("I am inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside setTimeout 2")
}, 0);

console.log("The End")


const callback = (arg)=> {
    console.log(arg)
}

const loadScript = (src, callback)=> {
    let script = document.createElement("script")
    script.src = src;
    script.onload = callback("Akash")
    document.head.append(script)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



// Callback Hell (or) Pyramid of Dooom

// let example = (callback1)=> {
//     console.log("Inside example")

//     callback1(()=> {
//         console.log("Inside callback 1")

//         callback2(()=> {
//             console.log("Inside callback 2")

//             callback3(()=> {
//                 console.log("Inside callback 3")

//                 callbackN(()=> {
                    
//                 })
//             })
//         })
//     })
// }