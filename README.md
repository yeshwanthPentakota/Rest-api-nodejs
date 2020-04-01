# Rest-api-nodejs

A RESTful API example with Nodejs and Express.

## Installation & Run
# Download this project

Before running API server, you should set the database 
```bash
https://docs.mongodb.com/manual/administration/install-community/
```

```bash
# Build and Run
cd Rest-api-nodejs
node server.js

# API Endpoint base url: 

Localhost - http://127.0.0.1:3000
Live in AWS - http://ec2-3-15-13-29.us-east-2.compute.amazonaws.com:3000
```

## Structure
```
├── api
│   ├── controller
│   │    └── TaskController.js  // Implementation of bussiness logic/database calls
│   ├── database         
│   │   │ └── Schema    
│   │   │   └── Task.js // Schema for mongoDb.
│   │   └── database.js // Database operations.
│   ├── model           //Models for our application.
│   │     └── TaskResponse.js
│   ├── route  
│   │      └── TaskRoute.js // Routes for the rest endpoints.
│   └── transformer
│       └── TaskTransformer.js     //Transforms data into client exposed responses.
├── server.js // Config to run the application.
└── package.json // Contains information regarding all dependencies needed to run the application.
```

## API

#### /tasks
* `GET` : Get all tasks
* `POST` : Create a new task

#### /tasks/:taskId
* `GET` : Get a task with taskId
* `PUT` : Update a task with taskId
* `DELETE` : Delete a task with taskId

## Todo

- [ ] Add error handling.
- [ ] Write the tests for all APIs.
- [ ] Building a deployment process 
