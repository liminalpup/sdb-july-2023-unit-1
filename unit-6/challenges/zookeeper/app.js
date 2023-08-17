
//*---DOTENV/EXPRESS/MONGOOSE/INVOKE EXP/DEFINE USERCONTROLLER--------
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userController = require("./controllers/user.controller");
const animalController = require("./controllers/animal.controller");

//*-------Controlled by .env file---------
const DBName = process.env.DB_NAME;
const PORT = process.env.PORT;
    //*-----CONNECT TO THE DB----------
        mongoose.connect(process.env.DB_URL + DBName)
        const db = mongoose.connection
        db.once("open", () => console.log("Connected to the DB:" + DBName));


//*--------MIDDLEWARE-----------
app.use(express.json());


//*------ROUTES-----------
app.use("/user", userController);
app.use("/animal", animalController);

//*----------PORT LISTENER----------
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
});
