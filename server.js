let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/database/schema/Task'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.json({ type: 'application/json' }));

let routes = require('./api/route/TaskRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Server started on: ' + port);