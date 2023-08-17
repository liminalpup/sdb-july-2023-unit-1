require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// assign controllers
const userController = require("./controllers/user.controller");
const petController = require("./controllers/pets.controller");
const commentsController = require("./controllers/comment.controller");
const PORT = process.env.PORT;
const DBName = process.env.DB_NAME;

// Connecting to the DB
mongoose.connect(process.env.DB_URL + DBName)
const db = mongoose.connection
db.once("open", () => console.log("Connected to the DB:" + DBName));

// Middleware (has to be above our routes)
app.use(express.json());

// ROUTES
app.use("/user", userController);
app.use("/pet", petController);
app.use("/comments", commentsController);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


