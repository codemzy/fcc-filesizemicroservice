var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));


// routes in seperate file
var routes = require('./routes/index.js');
routes(app);


app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});