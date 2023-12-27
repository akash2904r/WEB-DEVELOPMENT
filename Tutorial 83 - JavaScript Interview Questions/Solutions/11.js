// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criteria) {
    let filteredProducts = []

    for (const i of products) {
        if(criteria(i.cost, i.rating))
            filteredProducts.push(i)
    }

    return filteredProducts
}

let products = [{cost : 20, rating : 3.5}, {cost : 35, rating : 4.0}, {cost : 10, rating : 4.2}, {cost : 25, rating : 4.5}, {cost : 15, rating : 2.7}, {cost : 50, rating : 4.0}]

let criteria = (cost, rating) => {
    return (cost >= 25 && rating > 4.0 ? true : false)
}

let filteredProducts = filterProducts(products, criteria)
console.log(filteredProducts)