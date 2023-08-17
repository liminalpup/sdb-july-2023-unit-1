## MONGO BD

MERN - Stack

M - Mongo
E - Express
R - React
N - Node

## Traditional Databases
Databases - Collection of Tables
Table - Primary keys, Columns, Each row in a table is called a record
Records = actual values that are stored in the database (fields and values)

## MongoDB Databases
Collections: Equates to the same thing as a table in a traditional database
Documents: Equates to the same thing as records in a traditional database
Records: they store as a JSON object in key/value pairs

## Initial Setup
- 'npm init -y' creates a package.json file
- install all our dependencies (npm i express mongoose bcrypt jsonwebtoken)
- updated package.json to reflect the 'app.js' instead of 'index.js'
- created the 'app.js' file and added boilerplate for server.
- add a .gitignore file and reference the node_modules folder.
- refactor the code to use our environment file
- add .env file to gitignore


## Creating Models
- Models help define what our data collection will look like
- This is where we get to define Fields and DataTypes to describe a JSON object
- Naming Convention will be [name of the collection].model.js

## Making a Connection to the Database

```js
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL + DBName);
const db = mongoose.connection;
db.once("open", () => console.log("Connected to the DB:" + DBName));
```

- Dont forget to update your ENV file with the DB_URL and the DB_NAME