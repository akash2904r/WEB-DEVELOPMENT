const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

console.log(process.env.Password)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})