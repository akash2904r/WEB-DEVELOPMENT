import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"

let connection = await mongoose.connect(`mongodb://localhost:27017/todo`)
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({  desc: "Description of Todo", isDone: false, days: Math.floor(Math.random() * 4 + Math.random()) })
    todo.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})