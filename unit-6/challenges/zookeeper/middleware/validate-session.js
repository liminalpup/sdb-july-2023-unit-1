/* 
## BRONZE CHALLENGE:
Implement a validate-session.js. Use the validateSession to protect every
route in the animal.controller.js. They should block any request that does
not have an authorization header that bears a token.
This token should be one returned from the login or sign up methods. 
*/

const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const validateSession = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET_PHRASE);

    const user = await User.findById(decodedToken.id);

    if (!user) {
      throw Error("User Not Found");
    }
    req.user = user;
    return next();

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = validateSession;