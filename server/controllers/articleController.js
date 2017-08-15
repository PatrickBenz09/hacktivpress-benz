'use strict'

const Article = require('../models/Article')

let findAll = (req, res) => {
  Article.find({})
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

module.exports = {
  findAll
};
