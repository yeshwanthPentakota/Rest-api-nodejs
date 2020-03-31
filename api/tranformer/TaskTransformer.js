let taskResponse = require('../model/TaskResponse');

exports.TaskListResponse = function (results) {
    let response = [];
    results.forEach(function (item) {
        response.push(new taskResponse.TaskResponse(item));
    });
    return response;
}

exports.TaskResponse = function (result) {
    return new taskResponse.TaskResponse(result);
}