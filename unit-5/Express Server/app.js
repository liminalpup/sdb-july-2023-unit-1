const express = require("express");

const app = express();
const practiceController = require("./controllers/practice");
const jobController = require("./controllers/job-controller");

let PORT = 4000;

// Middleware/Routing
app.use(express.json());
// ! This will allow us to send a payload or req obj to our server and routes will be able to parse it.
app.use(express.static(`${__dirname}/public`));
/* 
Let app.js file know about the endpoint we would like create and use the controller file we created.
Path: localhost:4000/practice/
*/
app.use("/practice", practiceController);
app.use("/job", jobController);


// localhost:4000/test
// req: request
// res: response
app.get("/test", (req, res) => {
  res.send("Hello from Test");
});





app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
