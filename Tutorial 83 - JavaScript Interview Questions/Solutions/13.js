// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products) {
    let total = 0

    for (const i of products) {
        total += (i.cost * i.quantity)
    }

    console.log(total)
}

let products = [{cost : 20, quantity : 1}, {cost : 35, quantity : 2}, {cost : 10, quantity : 1}, {cost : 25, quantity : 3}, {cost : 15, quantity : 2}, {cost : 50, quantity : 1}]

calculateTotal(products)