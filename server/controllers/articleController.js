'use strict'

const Article = require('../models/Article')

let findAll = (req, res) => {
  Article.find({})
  .populate('author', 'username')
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let findOne = (req, res) => {
  Article.findOne({ _id: req.params.id })
  .populate('author', 'username')
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let findByAuthor = (req, res) => {
  Article.find({ author: req.params.author })
  .populate('author', 'username')
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let findByCategory = (req, res) => {
  Article.find({ category: req.params.category })
  // .populate('author', 'username')
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let createOne = (req, res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.id
  })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let deleteOne = (req, res) => {
  Article.deleteOne({ _id: req.params.id })
  .then(resp => res.send(resp))
  .catch(err => res.send(err))
}

let updateOne = (req, res) => {
  Article.findOne({ _id: req.params.id })
  .then(resp1 => {

    Article.updateOne({ _id: req.params.id }, {
      $set: {
        title: req.body.title || resp1.title,
        content: req.body.content || resp1.content,
        category: req.body.category || resp1.category
      }
    })
    .then(resp2 => res.send(resp2))
    .catch(err => res.send(err));

  })
  .catch(err => res.send(err))
}

module.exports = {
  findAll,
  findOne,
  findByAuthor,
  findByCategory,
  createOne,
  deleteOne,
  updateOne
};
