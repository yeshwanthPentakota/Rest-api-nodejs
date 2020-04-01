let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/database/schema/Task'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.122:27017/Tododb', {useNewUrlParser: true, useUnifiedTopology: true},
    function (err) {
        if (err) {
            console.log('Failed connecting to mongo db');
        }
        console.log('Success connecting to mongo db');
    });

app.use(bodyParser.json({type: 'application/json'}));

let routes = require('./api/route/TaskRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Server started on: ' + port);