const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const rmw = require('./routes/routerMW')

app.use(express.static("public"))
app.use('/routerMW', rmw)

// // Middleware 1
// app.use((req, res, next) => {
//     console.log('M1')
//     res.send('You got hacked by me... Hahaha')
//     next()
// })

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log('M1')
    req.name = 'Akash'
    fs.appendFileSync('public/logs.txt', `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('M2')
    req.name = 'Deepak'
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`Hello, I am ${req.name}`)
})

app.get('/contact', (req, res) => {
    res.send('Hello, I am contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})