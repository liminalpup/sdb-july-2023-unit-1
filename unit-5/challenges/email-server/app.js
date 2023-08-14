const express = require("express");

const app = express();
const userController = require("./controller/user.controller"); //* here

let PORT = 4000;

//*This will allow us to send a payload or req obj to our server and routes will be able to parse it.
app.use(express.json())
app.use("/user", userController)
//*references all endpoints for user/ files incl. register and login.

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});