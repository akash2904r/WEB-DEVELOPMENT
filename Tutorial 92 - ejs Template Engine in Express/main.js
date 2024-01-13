const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let lisCont = ["Chandu", "Deepak", "Amrit Shankar"]
    res.render('index', { siteName: siteName, searchText: searchText, lisCont })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas, Why and When ?"
    let blogContent = "It is a very good brand"
    res.sendFile('templates/blogpost.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})