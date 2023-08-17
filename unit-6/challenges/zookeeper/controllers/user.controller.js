const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// ! Endpoint: localhost:4000/user/create
/* req type: POST -- If successful, the server should 
store the user object sent in the database, and send a response to the user with a 200 status cod
e and the user object just saved. If the operation fails, the server should respond with a 5
00 status code and an error message back. */

/* Req Type: POST
1. Create variables to store the data coming in from the req.body
2. Create a new user Model
3. Save the Data created from the User Model
4. Send back the User Information
*/

router.post("/create", async (req, res) => {
  try {
    // ? Step 1
    const { email, password } = req.body;

    // ? Step 2
    let user = new User({
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    //? Step 3
    const newUser = await user.save();
    let token = jwt.sign({ id: newUser.id}, process.env.SECRET_PHRASE, {expiresIn: 60 * 60 * 24});
    res.json({
      message: `user created successfully`,
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ! Endpoint: localhost:4000/user/create
/* req type: POST -- If successful, the server should 
store the user object sent in the database, and send a response to the user with a 200 status cod
e and the user object just saved. If the operation fails, the server should respond with a 5
00 status code and an error message back. */

/* Req Type: POST
1. Create variables to store the data coming in from the req.body
2. Create a new user Model
3. Save the Data created from the User Model
4. Send back the User Information
*/
router.post("/login", async (req, res) => {
// try-catch
  try {

    const { email, password } = req.body;
    const user = await User.findOne({
        email: email
    });
    
    if (user) {
            const passwordMatches = await bcrypt.compare(
                req.body.password,
                user.password
            );
            let token = jwt.sign({ id: user.id}, process.env.SECRET_PHRASE, {expiresIn: 60 * 60 * 24});
            
            // ? nested p/w checker
            if (passwordMatches) {
                res.json({ message: `Password Correct. User logged in` });
            } else {
            res.json({ message: `User found. Password incorrect` });
            }
            
        } else {
            res.json({ message: `Invalid Username`});
        }
    // try-catch}  
    } catch (error) {
    res.status(500).json({
      message: error.message,
            }); // end of error
         } //end of try catch
     }); //end of req
    
module.exports = router;
