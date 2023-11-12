const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let todoList = [
    { id: 1, text: 'Create Todo List' }
];

app.get('/todos', (req, res) => {
    res.json(todoList);
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todoList.length + 1,
        text: req.body.todo,
    };
    todoList.push(newTodo);
    res.json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todoList = todoList.filter((todo) => todo.id !== todoId);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
