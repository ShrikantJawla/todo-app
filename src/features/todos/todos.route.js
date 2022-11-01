
const express = require("express");
const todos = require('./todos.model');


const app = express.Router();


app.get('/', async (req, res) => {
    const { status, tags } = req.query;
    try {
        let allTodos = await todos.find();
        if (status) allTodos = await todos.find({ status });
        else if (tags) allTodos = await todos.find({ tags });
        res.send(allTodos);
    } catch (error) {
        res.status(401).send(error)
    }
})

app.post('/', async (req, res) => {
    try {
        let result = await todos.create(req.body)
        res.send(result);
    } catch (error) {
        res.status(401).send(error)
    }
})

app.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let result = await todos.findByIdAndUpdate(id, req.body);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = app;