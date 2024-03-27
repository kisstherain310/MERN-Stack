const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  // Access Authorizations from req header
  const Authorization = req.header('authorization');
  if(!Authorization){   
    // Error: Unauthorized
    const err = new Error("Unauthorized!");
    err.statusCode = 401;
    return next(err);
  } 
  // get token
  const token = Authorization.replace('Bearer ', '');
  const {userId} =  jwt.verify(token, process.env.APP_SECRET);

  req.user = {userId};
  next();
}