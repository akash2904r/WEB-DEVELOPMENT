// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Placed...")
        }, 1 + 4 * Math.random());
    })
}

async function main() {
    let status = await placeOrder()
    console.log(status)
}

main()