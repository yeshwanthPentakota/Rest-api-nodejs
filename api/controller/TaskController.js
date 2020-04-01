'use strict';

let db = require('../database/database');
let taskTransformer = require('../transformer/TaskTransformer');

let mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.getTasksList = async function (req, res) {
    let results = await db.findTasks();
    await res.json(taskTransformer.TaskListResponse(results));
};

exports.addTask = async function (req, res) {
    let result = await db.insertTask(req.body);
    await res.json(taskTransformer.TaskResponse(result));
};


exports.getTask = async function (req, res) {
    let result = await db.findTaskById(req.params.taskId);
    await res.json(taskTransformer.TaskResponse(result));
};

exports.updateTask = async function (req, res) {
    let result = await db.updateTask(req.params.taskId, req.body);
    await res.json(taskTransformer.TaskResponse(result));
};


exports.deleteTask = async function (req, res) {
    let result = await db.remove(req.params.taskId);
    await res.json({message: 'Task successfully deleted'});
};