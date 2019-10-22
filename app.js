// Task 19: Capstone Project - Compulsory Task 1 - Back-end - app.js

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    next();
});

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {

    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page

    res.status(err.status || 500);
    res.render('error');
});

if(process.env.NODE_ENV === 'production') {
    
    app.use(express.static('frontend/build'));

    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname, 'frontend',
            'build', 'index.html'));
    });
}

module.exports = app;