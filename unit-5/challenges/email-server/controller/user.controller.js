
const { error } = require("console");
const fs= require("fs");
const { v4: uuidv4 } = require("uuid")
const router = require("express").Router();
const dbPath = "./assets/users.json";
let loginArray;
//*--------------------------------------
// ? POST | Register Endpoint
router.post("/register", (req, res)=>{
  const {username, password} = req.body;
//*accessing the request body information to deconstruct the object.

  let loginArray = read();

  let id = uuidv4();

  loginArray.push({username, password});

  save(loginArray);
  res.json({
    message: "user found", login: loginArray
  });
});

//----------------------------------

// ? GET || Login Endpoint
router.get("/login", (req, res) =>{
  const {username, password} = req.body;

let usersArray = read()
// User info variable set equal to findOne()

let userInfo = findOne(username, usersArray);

res.json(userInfo)
});



// *--------------------------------------
// Helper functions

//*find function
function findOne(email, usersArray) {
  console.log(email, usersArray)
  let users = usersArray.find(user => user.username === email)
  console.log(users);
  if (users) {
    return {message: "user found", users: users}
    } else {
    throw new Error("user not found")
    };
  };

//*Check Password function

//*read function
function read(){
  const file = fs.readFileSync(dbPath);
  return JSON.parse(file)
}
//*write function
function save(data){
  fs.writeFileSync(dbPath, JSON.stringify(data));
}

// *Deleting
function removeOne(originalArray, idToRemove) {
  const modifiedArray = originalArray.filter(item => item.id !== idToRemove);
  return modifiedArray;
};

// *Updating
function updateOne(originalArray, id, updatedInfo) {
  const index = originalArray.findIndex(item=>
    item.id === id);
    // console.log(index);
    if(index !=-1) {
    originalArray[index] = {...originalArray[index],...updatedInfo};
    }
    return originalArray;
  };

module.exports = router