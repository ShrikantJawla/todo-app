
const mongoose = require("mongoose");


const todosSchema = new mongoose.Schema({
    subTasks: [{ text: { type: String } }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    tags: [
        { type: String }
    ],
    date: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = todos = mongoose.model('allTodo', todosSchema);