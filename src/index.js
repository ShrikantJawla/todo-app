require('dotenv').config();
const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 8000;
const connect = require('./config/dbConfig')
const todosRoute = require('./features/todos/todos.route');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos', todosRoute)

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});


app.get('/', (req, res) => {
    res.send('running...')
})



app.listen(port, async () => {
    await connect();
    console.log('listening on port http://localhost:' + port);

})