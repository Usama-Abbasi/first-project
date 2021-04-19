const jwt = require('jsonwebtoken');
const requireAuth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token) {
      jwt.verify(token, 'secret', (err, decodedToken) => {
        if (err) {
            err = {
                name: 'Unauthorized',
                message: 'Unauthorized User',
             }
          return res.status(401).send(err)
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
        err = {
            name: 'Unauthorized',
            message: 'Unauthorized User',
         }
      return res.status(401).send(err)
    }
  };
  module.exports = requireAuth;