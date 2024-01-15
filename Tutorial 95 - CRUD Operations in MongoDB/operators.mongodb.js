use('operatorDB')

// db.createCollection('querySelectors')

// db.querySelectors.insertMany([
//     {
//       "name": "Laptop",
//       "price": 1000,
//       "category": "Electronics",
//       "stock": 20
//     },
//     {
//       "name": "Book",
//       "price": 20,
//       "category": "Stationery",
//       "stock": 50
//     },
//     {
//       "name": "Headphones",
//       "price": 150,
//       "category": "Electronics",
//       "stock": 10
//     },
//     {
//       "name": "Desk Chair",
//       "price": 200,
//       "category": "Furniture",
//       "stock": 5
//     },
//     {
//       "name": "Notebook",
//       "price": 5,
//       "category": "Stationery",
//       "stock": 100
//     },
//     {
//       "name": "Smartphone",
//       "price": 700,
//       "category": "Electronics",
//       "stock": 15
//     },
//     {
//       "name": "Backpack",
//       "price": 50,
//       "category": "Accessories",
//       "stock": 30
//     },
//     {
//       "name": "Coffee Table",
//       "price": 120,
//       "category": "Furniture",
//       "stock": 8
//     },
//     {
//       "name": "Printer",
//       "price": 300,
//       "category": "Electronics",
//       "stock": 7
//     },
//     {
//       "name": "Pen Set",
//       "price": 8,
//       "category": "Stationery",
//       "stock": 80
//     }
// ])


/*************************** Query Selectors ***************************/

// let a = db.querySelectors.find({ price: { $eq: 1000 } })
// console.log(a)

// a = db.querySelectors.find({ price: { $gt: 700 } })
// console.log(a)

// a = db.querySelectors.find({ price: { $gte: 700 } })
// console.log(a)

// a = db.querySelectors.find({ price: { $lt: 20 } })
// console.log(a)

// a = db.querySelectors.find({ price: { $lte: 20 } })
// console.log(a)

// a = db.querySelectors.find({ price: { $in: [8, 120, 50] } })
// console.log(a)

// a = db.querySelectors.find({ price: { $ne: 1000 } })
// console.log(a)

// a = db.querySelectors.find({ category: { $nin: ["Furniture", "Stationery", "Electronics"] } })
// console.log(a)


/*************************** Logical ***************************/

// let b = db.querySelectors.find({ $and: [ 
//             { category: "Furniture" } , 
//             { stock: 5 } 
//         ] })
// console.log(b)

// b = db.querySelectors.find({ price: { $not: { $gt: 5 } } })
// console.log(b)

// b = db.querySelectors.find({ $nor: [ 
//         { "category": { $in: ["Electronics", "Stationery", "Accessories"] } } , 
//         { "price": 10 } 
//     ] })
// console.log(b)

// b = db.querySelectors.find({ $or: [ 
//         { category: "Accessories" } , 
//         { price: 130 } 
//     ] })
// console.log(b)


/*************************** Element ***************************/

let c = db.querySelectors.find({ category: { $exists: true , 
            $nin: ["Electronics", "Stationery", "Furniture"] } 
        })
console.log(c)

c = db.querySelectors.find( { stock: { $type: 16 } } )
console.log(c)