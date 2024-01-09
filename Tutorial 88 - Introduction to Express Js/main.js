const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Contact Details')
})

app.get('/blog', (req, res) => {
  res.send('This is a blog section')
})

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('This blog is about intro-to-js')
// })

// app.get('/blog/intro-to-cpp', (req, res) => {
//   res.send('This blog is about intro-to-cpp')
// })

app.get('/blog/:slug', (req, res) => {
  // For URL : http://127.0.0.1:3000/blog/intro-to-queries?mode=dark&region=india&lang=js
  console.log(req.params)  // o/p -> { slug: 'intro-to-queries' }
  console.log(req.query)   // o/p -> { mode: 'dark', region: 'india', lang: 'js' }
  res.send(`This blog is about ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})