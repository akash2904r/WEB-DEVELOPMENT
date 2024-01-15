use('crudDB')

// CREATE
// db.createCollection('courses')

// db.courses.insertOne({
//     name: "Harry's Sigma Web Development Course",
//     price: 0,
//     exercises: 15,
//     projects: 2
// })

// db.courses.insertMany([
//     {
//       "name": "Harry's Sigma Web Development Course",
//       "price": 0,
//       "exercises": 15,
//       "projects": 2
//     },
//     {
//       "name": "Coding 101: Python for Beginners",
//       "price": 199,
//       "exercises": 10,
//       "projects": 1
//     },
//     {
//       "name": "JavaScript Mastery Workshop",
//       "price": 149,
//       "exercises": 20,
//       "projects": 3
//     },
//     {
//       "name": "Data Science Fundamentals",
//       "price": 299,
//       "exercises": 12,
//       "projects": 4
//     },
//     {
//       "name": "Mobile App Development Bootcamp",
//       "price": 249,
//       "exercises": 18,
//       "projects": 2
//     }
// ])




// READ
// let a = db.courses.find({price: 0})
// console.log(a.count())

// let b = db.courses.findOne({price: 0})
// console.log(b)




// UPDATE
db.courses.updateMany({price: 0}, {$set:{price: 1000}})
db.courses.updateOne({price: 0}, {$set:{price: 100}})




// DELETE
db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 1000})