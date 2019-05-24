const express = require('express');
const app = express();

// set the view engine to ejs
// https://stackoverflow.com/questions/15063262/is-there-any-way-to-use-multiple-view-engines-with-express-node-js
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');