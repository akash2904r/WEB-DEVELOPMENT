// Generate a dummy data in this format in a collection called Employees in a db called company

// {
//     name: "Akash",
//     salary: 2000000,
//     language: "JavaScript",
//     city: "New York",
//     isManager: false
// }

// Generate 10 such records when a button called generate is clicked!
// Create an Express app with mongoose to achieve it
// Everytime the button is clicked, you should clear the collection


import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { employee } from './models/employee.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentModuleURL = import.meta.url;
const currentModulePath = fileURLToPath(currentModuleURL);
const __dirname = dirname(currentModulePath);

const app = express()
const port = 3000

app.use(bodyParser.json())

let connection = await mongoose.connect(`mongodb://localhost:27017/company`)

let names = ['Chandu', 'Deepak', 'Amrit']
let languages = ['C++', 'JavaScript', 'Java']
let cities = ['Bangalore', 'Mumbai', 'Delhi']

function generateData() {
    let name = names[Math.floor(3 * Math.random())]
    let language = languages[Math.floor(3 * Math.random())]
    let city = cities[Math.floor(3 * Math.random())]
    let salary = Math.ceil(25000 + 975000 * Math.random())
    let isManager = (Math.random() > 0.5 ? true : false)
    
    return { "name": name, "salary": salary, "language": language, "city": city, "isManager": isManager }
}


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.post('/clicked', async (req, res) => {
    if (req.body) {
        console.log('Button was clicked')

        const found = employee.findOne()

        if (found) {
            let emp = await employee.deleteMany({})
            console.log(emp)
        }
    
        for (let i = 0; i < 10; i++) {
            let emp = new employee( generateData() )
            emp.save()
        }
        console.log('Data uploaded')
    }
    else {
        res.status(400).send('Bad Request');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})