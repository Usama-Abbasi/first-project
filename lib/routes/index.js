const express = require('express')
const router = express.Router()
const blogs = require('./blogs/blogs.controller')
router.use('/blogs', blogs)
// Add more routes here if you want!
module.exports = router