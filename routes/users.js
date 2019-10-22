// Task 19: Capstone Project - Compulsory Task 1 - Back-end - users.js

var express = require('express');
var router = express.Router();

/* This 'GET's' users listing */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
