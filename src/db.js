const mongoose = require('mongoose')
mongoose.connect(process.env.DB)
mongoose.connection.once('open',()=>{
    console.log("connected to database")
})