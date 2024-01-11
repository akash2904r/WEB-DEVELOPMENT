const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Router Middleware')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('This is an example for the router middleware... A router middleware is an middleware specifically given for a route')
})

module.exports = router