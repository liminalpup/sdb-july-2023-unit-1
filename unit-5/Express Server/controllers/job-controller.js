/* 
Complete the following tasks to get this controller to work.
- Establish and export a routing service
- Ensure the app.js knows about this controller
- All routes that involve the path: localhost:4000/job get routed to this file
- create a route that is localhost:4000/job/
- Req Type: GET
- Response: JSON: message "Works from Job Controller"

*/
const fs= require("fs");
const { v4: uuidv4 } = require("uuid")
const router = require("express").Router();
const dbPath = "./assets/job-detail.db.json";


/* 
Endpoint: "clocalhost:4000/job/all"
Req type: GET
Response: 

{
  message: "success"
}
*/

router.get("/all", (req, res) => {
  let jobArray = read()
  res.json({ message: "success", jobs: jobArray });
});


// ? Create Endpoint: localhost:4000/job/add
// req type: POST
// Data: dateApplied, comapnyName, jobTitle, contact, status
// send JSON: message: success
router.post("/add", (req, res)=>{
  const {dateApplied, companyName, jobTitle, contact, status} = req.body;
  
  let jobArray = read();

  let id = uuidv4() //this will create a unique ID for our job data.

  jobArray.push({ id, dateApplied, companyName, jobTitle, contact, status });
  save(jobArray);  
res.json({
  message: `success`,
  jobs: jobArray,
  });
});

// DELETE
// Endpoint: localhost:4000/delete/:id
//:id = "param"
// req type DELETE

router.delete("/delete/:id",(req, res) => {
  const {id} = req.params;
  // Read the File
  let jobArray = read()
// Modify the Data
  jobArray = removeOne(jobArray, id);
  res.json({ message: "delete success", jobs: jobArray })
  // Save the Data to the file
  save(jobArray);
});

router.patch("/update/", (req, res) =>{
  console.log(req.query);
  const { id } = req.query;
  // Read the File
  let jobArray = read()
// Modifying the Data
  jobArray = updateOne(jobArray, id, req.body)

  // Save the data to the file
  save(jobArray);

  res.json({
    message: "success", jobs: jobArray
  })
});

// Helper functions
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