const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {graphqlHTTP}=require('express-graphql');
const blogSchema=require('./graphql/blogs/BlogSchema').BlogSchema;
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// const helmet = require('helmet')
// app.use(helmet())

require('./db')
app.use('/graphql', graphqlHTTP({
    schema: blogSchema,
    graphiql: true
}));

module.exports = app