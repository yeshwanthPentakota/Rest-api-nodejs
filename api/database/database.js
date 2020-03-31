'use strict';

let mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.findTasks = function () {
    let data = Task.find({});
    console.log("Found " + data.length + " tasks.");
    return data;
};

exports.insertTask = function (body) {
    let data = new Task(body).save();
    console.log("Successfully Inserted: " + data);
    return data;
};


exports.findTaskById = function (taskId) {
    let data = Task.findById(taskId);
    console.log("Found task with Id: " + data._id);
    return data;
};


exports.updateTask = function (taskId, body) {
    let data = Task.findByIdAndUpdate({_id: taskId}, body, {new: true});
    console.log("Updated task with Id: " + data._id);
    return data;
};


exports.remove = function (taskId) {
    let data = Task.remove({_id: taskId});
    console.log("'Task successfully deleted with Id: " + data._id);
    return data;
};