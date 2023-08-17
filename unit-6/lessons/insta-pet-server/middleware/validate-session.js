/* 
Middleware:
We want this middleware to authenticate requests to our server.
It will evaluate the sessionToken in the req header.
If the token is valid, it will allow the request to continue to the intended endpoint.
If the token is invalid, it will return a 401 status code and a message.
*/
//import encrypt/decrypt token
const jwt = require("jsonwebtoken");
const User = require("../models/user.model")


// Create a function
const validateSession = async (req, res, next) => {
  try {
    //! 1. extract the token from the header
    const token = req.headers.authorization;
    // console.log(token)

    //! 2. validate the token to ensure authorization
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken)

    //! 3. check the database to verify it is an actual active user
    const user = await User.findById(decodedToken.id);

    if (!user){
      throw Error('User Not Found')
    }
    req.user = user
    // console.log(user)
    return next()
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};


//--------MODULE EXPORTS----

module.exports = validateSession;