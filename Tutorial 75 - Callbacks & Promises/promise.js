console.log("Let's go, Promises");

let prom1 = new Promise((resolve, reject)=> {
    let a = Math.random()

    if(a < 0.5)
        reject("Rejected !!!")
    else 
    {
        setTimeout(()=> {
            console.log("Time out complete !!!!!")
            resolve("Resolved")
        }, 5000)
    }
})

let prom2 = new Promise((resolve, reject)=> {
    let a = Math.random()

    if(a < 0.5)
        reject("Second Rejection !!!")
    else 
    {
        setTimeout(()=> {
            console.log("Second time out completion !!!!!")
            resolve("Resolved second time")
        }, 4000)
    }
})

let prom3 = new Promise((resolve, reject)=> {
    let a = Math.random()

    if(a < 0.5)
        reject("Third Rejection !!!")
    else 
    {
        setTimeout(()=> {
            console.log("Third time out completion !!!!!")
            resolve("Resolved third time")
        }, 3000)
    }
})

let prom4 = new Promise((resolve, reject)=> {
    let a = Math.random()

    if(a < 0.5)
        reject("Fourth Rejection !!!")
    else 
    {
        setTimeout(()=> {
            console.log("Fourth time out completion !!!!!")
            resolve("Resolved fourth time")
        }, 2000)
    }
})

let prom5 = new Promise((resolve, reject)=> {
    let a = Math.random()

    if(a < 0.5)
        reject("Fifth Rejection !!!")
    else 
    {
        setTimeout(()=> {
            console.log("Fifth time out completion !!!!!")
            resolve("Resolved fifth time")
        }, 1000)
    }
})

// prom1.then((a)=> {
//     console.log(a)
// }).catch((error)=> {
//     console.log(error)
// })


// let p3 = Promise.all([prom1, prom2, prom3, prom4, prom5]) 
// let p3 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5]) 
// let p3 = Promise.race([prom1, prom2, prom3, prom4, prom5]) 
let p3 = Promise.any([prom1, prom2, prom3, prom4, prom5]) 

p3.then((a)=> {
    console.log(a)
}).catch((error)=> {
    console.log(error)
})