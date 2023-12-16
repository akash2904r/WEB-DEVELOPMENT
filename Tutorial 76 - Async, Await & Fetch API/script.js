// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData() {
    // Simulate getting data from a server

    // Get request 
    // let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // Post request
    let api = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: 'foo',
                            body: 'bar',
                            userId: 1,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })

    let data = await api.json()
    // let data = await api.text()
    console.log(data)
    return data
}

async function main() {
    console.log("Loading modules")
    console.log("Executing further code")
    console.log("Loading data")
    
    let data = await getData()

    console.log(data)
    console.log("Processing data")
    console.log("Executing next block of code")
}

main()

// data.then((value) => {
//     console.log(data)
//     console.log("Processing data")
//     console.log("Executing next block of code")
// })