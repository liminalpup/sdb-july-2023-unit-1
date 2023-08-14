// http://localhost:4000/practice

// ! To start off your controller  you will need to create a variable called `router`
// ! at the end of the file you will need to export router

const router = require("express").Router();

/* 
Request Type: GET
URL: http://localhost:4000/practice/
*/
router.get("/", (req, res) => {
  res.send("Hello from Practice GET");
});

/* 
Request Type: POST
URL: http://localhost:4000/practice/greeting

Response: "Good Morning [insert name here]"
*/

router.post("/greeting", (req, res) => {
    const {firstName} = req.body;
    console.log(req.body);

  // res.send(`Good morning, ${firstName}`);
    res.status(201).json({
      message: `Good morning, ${firstName}`,
    });
});

/* 
Create an endpoint where it is localhost:4000/practice/weather
response: "It's sunny and 70 degrees outside."
request type git
make that response a JSON object.
REQ type GET
*/
router.get("/weather", (req, res) => {
  res.json({message: "It is sunny and 70 degrees outside."});
});

/* 
create an endpoint localhost:4000/practice/add
Request type: POST
{
 "num1": 5,
 "num2": 10
}
response: JSON with a message "The total is 15."
*/

router.post("/add", (req, res) => {
  const {num1, num2} = req.body
  const total = num1 + num2
  res.json({message: `The total is: ${total}`})
});

/* Create an endpoint where it is localhost:4000/practice/weather
JSON object coming in: {
  "temp": 50
} response: 
JSON object: {message: "It's sunny and __ degrees outside"}
Req type POST
 */
router.post("/weather", (req, res) => {
  // in the API, 'temp': 50 in the body, so we destructure it by requesting it from the body.
  const {temp} = req.body;
  const tempCelsius = (temp - 32) * (5 / 9)

  res.json({message: `It's sunny and ${tempCelsius} degrees celsius outside.` })
})

module.exports = router;
