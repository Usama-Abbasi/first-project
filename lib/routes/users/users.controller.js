const express = require('express')
const jwt = require('jsonwebtoken');
const usersController = express.Router()
const User = require('./user')

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: maxAge
  });
};
usersController
  .post('/signup', async (req, res, next) => {
    const user = await User.create(req.body)
    res.status(200).json({ user: user._id });
  })
  usersController
   .post('/login',async(req,res,next)=>{
    const { email, password } = req.body;
       const user=await User.findOne({email,password})
       const token = createToken(user._id);
       res.status(200).json({token})

   })


module.exports = usersController