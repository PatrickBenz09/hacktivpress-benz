'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next) {
  const token = req.headers.token
  if(token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      console.log(token);
      console.log(decoded); // bar
      decoded ? next() : res.send('Something is not right with your Token');
    });
  } else {
    res.send("Please Login First!! Or i will cast infinite tsukoyomi upon you")
  }
};
