// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Your ${coffee} is ready...`)
        }, 1 + 9 * Math.random());
    })
}

async function main() {
    let res = await brewCoffee("espresso")
    console.log(res)
}

main()