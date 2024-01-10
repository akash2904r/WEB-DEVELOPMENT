const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("I am a getty get request...")
    res.send('Hello World! I am a get request')
})

app.post('/', (req, res) => {
    console.log("I am a posty post request...")
    res.send('Hello World! I am a post request')
})

app.put('/', (req, res) => {
    console.log("I am a putty put request...")
    res.send('Hello World! I am a put request')
})

app.delete('/', (req, res) => {
    console.log("I am a delly delete request...")
    res.send('Hello World! I am a delete request')
})


// app.post('/', (req, res) => {
//     console.log("Let's assume that I'm creating a data on the server")
//     res.send('Creating a new data on the server')
// }).get('/', (req, res) => {
//     console.log("Now, I'm trying to retrieve the data which I created")
//     res.send('Retrieving the created data')
// }).put('/', (req, res) => {
//     console.log("Assuming that I made a mistake while creating, now I am updating the data")
//     res.send('Updating the data')
// }).delete('/', (req, res) => {
//     console.log("Since, I don't require the data anymore I am deleting the data")
//     res.send('Deleting the data')
// })


// app.get('/index', (req, res) => {
//     console.log("I am index and I am an html file")
//     res.send('Hello World! I am an html file called index')
// })

app.get('/index', (req, res) => {
    console.log("I am index and I am an html file")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, e: 5, names: ["Chandu", "Amrit", "Deepak"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  