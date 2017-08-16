const express = require('express');
const hbs = require('hbs');

var app = express();

const herokuport = process.env.port || 8050;

//set up a a view engine for dynamic page


app.set('view engine', 'hbs');

//set up a a view engine for dynamic page

//add a middleware for serving static files

app.use(express.static(__dirname + '/public'));

//add a middleware for serving static files

//custom middleware

app.use((req, res, next) => {

    var now = new Date().toString();
    console.log(now, req.method, req.url);
    next(); //call the next middleware to prevent short circuit of the request pepeline

});

///error handler middleware

app.use((req, res, next) => {

    res.render('errorhandler.hbs');
    next(); //call the next middleware to prevent short circuit of the request pepeline

});


///error handler middleware

//custom middleware


app.get('/', (req, res) => {

    //res.send('<h1>Hello Express</h1>');
    res.render('home.hbs', {

        currentyear: new Date().getFullYear(),
        location: "Kolkata-TCS",
        welcome: "welcome to Kolkata TCS"
    });



}); //set up a route 

app.get('/About', (req, res) => {

    res.render('About.hbs', {

        currentyear: new Date().getFullYear(),
        location: "Kolkata"
    });


});

app.get('/bad', (req, res) => {


    res.send({
        errorcode: '1111',
        errormessage: 'leora error'
    })



});
app.listen(herokuport, () => {
    console.log("server is up and running");
});