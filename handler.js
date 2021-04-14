const connectToDatabase = require('./db');
const Blog = require('./models/Blog');
require('dotenv').config({ path: './variables.env' });
'use strict';
module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Blog.create(JSON.parse(event.body))
        .then(blog => callback(null, {
          statusCode: 200,
          body: JSON.stringify(blog)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the blog'
        }))
    })

};
module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Blog.find()
        .then(blogs => callback(null, {
          statusCode: 200,
          body: JSON.stringify(blogs)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Blogs.'
        }))
    })
};
module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Blog.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(blog => callback(null, {
          statusCode: 200,
          body: JSON.stringify(blog)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Blog.'
        }))
    })
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      console.log(event.pathParameters.id)
      Blog.findByIdAndRemove(event.pathParameters.id)
        .then(blog => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed note with id: ' + blog._id })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/json' },
          body: 'Could not fetch the Blog.'
        }));
    });
};

