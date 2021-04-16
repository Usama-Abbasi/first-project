const sls = require('serverless-http')
const app = require('./src/app')
module.exports.run = sls(app)
