"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};
exports.getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex) {
        throw new Error("Could not find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updatedText);
    res.json({ message: "Updated!", updatedTodo: TODOS[todoIndex] });
};
exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex) {
        throw new Error("Could not find todo!");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "Todo deleted!" });
};