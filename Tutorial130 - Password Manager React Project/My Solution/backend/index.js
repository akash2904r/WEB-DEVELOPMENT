const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./connection')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

const dataSchema = new mongoose.Schema({
  url: String,
  username: String,
  password: String
})

const dataModel = mongoose.model("passwords", dataSchema)

// Get all the passwords
app.get('/', async (req, res) => {
  let passwords = await dataModel.find({})
  res.send(passwords)
})

// Save a new password
app.post('/', async (req, res) => {
  const password = req.body
  const data = new dataModel(password)
  await data.save()
  res.send('Inserted successfully !!!')
})

// Delete an existing password
app.delete('/', async (req, res) => {
  const password = req.body
  await dataModel.deleteOne(password)
  res.send('Deleted successfully !!!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})