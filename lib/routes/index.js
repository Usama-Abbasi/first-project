const express = require('express')
const router = express.Router()
const blogs = require('./blogs/blogs.controller')
const users = require('./users/users.controller')
router.use('/blogs', blogs)
router.use('/users', users)
// Add more routes here if you want!
module.exports = router