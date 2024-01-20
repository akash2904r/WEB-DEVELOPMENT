import mongoose from "mongoose"

const empSchema = new mongoose.Schema({
    name: { type: String, default: "Anonymous" },
    salary: { type: Number, default: 100000 },
    language: { type: String, default: "JavaScript" },
    city: { type: String, default: "Bangalore" },
    isManager: { type: Boolean, deafult: false }
})

export const employee = mongoose.model('employee', empSchema)