const express = require('express')
const blogsController = express.Router()
const Blog = require('./blog')

blogsController
  .post('/', async (req, res, next) => {
    const blog = await Blog.create(req.body)
    res.status(200).send(blog)
  })

blogsController
  .put('/:id', async (req, res, next) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(blog)
  })
blogsController
  .get('/', async (req, res, next) => {
    const blogs = await Blog.find()
    res.status(200).send(blogs)
  })

blogsController
  .delete('/:id', async (req, res, next) => {
    const blog = await Blog.deleteOne({ _id: req.params.id })
    res.status(200).send(blog)
  })

module.exports = blogsController