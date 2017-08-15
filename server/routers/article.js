'use strict'

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../helpers/auth')

router.get('/', articleController.findAll);
router.get('/:id', articleController.findOne);
router.get('/author/:author', articleController.findByAuthor);
router.get('/category/:category', articleController.findByCategory);
router.post('/', authMiddleware, articleController.createOne);
router.delete('/:id', authMiddleware, articleController.deleteOne);
router.put('/:id', authMiddleware, articleController.updateOne);

module.exports = router;
