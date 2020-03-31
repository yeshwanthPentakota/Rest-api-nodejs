'use strict';
module.exports = function(app) {
    var todoList = require('../controller/TaskController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.getTasksList)
        .post(todoList.addTask);


    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);
};
