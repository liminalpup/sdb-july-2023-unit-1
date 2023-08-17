const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
/* 
Endpoint: "localhost:4000/user/register"
Req Type: POST
1. Create variables to store the data coming in from the req.body
2. Create a new user Model
3. Save the Data created from the User Model
4. Send back the User Information
*/

router.post("/register", async (req, res) => {
  try {
    // Step 1
    const { firstname, lastname, email, password } = req.body;
    // Step 2
    const user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      userId: req.user._id,
    });

    const newUser = await user.save(); // since this is a promise, we want to 'await' until we get something back

    let token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 72});

    res.json({
      message: "register success",
      user: newUser,
      token: token
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* 
Endpoint: Localhost:4000/user/signin
req type: POST 
1. Create variables that will store the email and password
2. Check if user exists. If it does...
3. Check the password.. it if doesn't, throw an error "user not found"
*/

// POST request: endpoint = /user/signin, async req res. try catch with either successful sign in or error message
router.post("/signin", async (req, res) => {
  try {
    //*Step 1
    // const { email, password } = req.body
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // console.log(user)

      //! Step 3: Compare the passwords
    const isPasswordAMatch = await bcrypt.compare(
        req.body.password, 
        user.password
        );
      if (isPasswordAMatch) {
       
        let token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 72});

        res.json({
          message: "success fromm signin: user found, passwords match",
          token: token,
        });
      } else{
        res.json({
            message: "signin failed: user found, passwords do not match",
        })
      }
    } else {
      throw new Error(`user not found`);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router
