console.log("it works");

//Fishing for ID's in the HTML for elements that we want to include in our job array.
// * jobAddForm is the form button to submit all the information controlled by the variables below it.

//*ADD form
let jobAddForm = document.getElementById("job-add-form");
//*DELETE form
let removeForm = document.getElementById("remove");

let dateApplied = document.getElementById("dateApplied");
let companyName = document.getElementById("companyName");
let jobTitle = document.getElementById("jobTitle");
let contact = document.getElementById("contact");
let status = document.getElementById("status");

/* 
Server Endpoints: 
*/
//* Create an object called 'endpoint' with the endpoint urls in there as keys.
let endpoint = {
    getAllJobs: "http://localhost:4000/job/all/",
    addJob: "http://localhost:4000/job/add",
    delete: "http://localhost:4000/job/delete/",
};

/* The purpose of this function is to fetch the data and pass the jobs on to a function that will display them. */
async function getAllJobs() {
  // *fetching recipe


    //try-catch
    /* This try-catch 'tries' to execute: awaiting for a fetch from our 'getAllJobs' key (the job form) in our 'endpoint' object (url). It stores that fetch as 'response' and then waits to see if the fetch goes through, and the information that comes back as a response is stored as 'data'. Then, we execute the displayJobs function -- accessing our HTML for the tableBody and assigning our tableRows to empty; looping through the array to display all the data in an object called 'newRows', adds 1 to the index (so the IDs begin at 1 instead of zero), and running through the data in order for each array item til all items in the table are accounted for. */
    try {
      // response and data to conduct the fetch
      const response = await fetch(endpoint.getAllJobs);
      const data = await response.json();
      displayJobs(data.jobs);
      populateJobDropDown(data.jobs);
    } catch (error) {
      console.error(error);
    };
};

// !-----FUNCTIONS BELOW ---------------
/* We're going to take the 'jobs.data' and loop through it. */
//Step 1: Fish for the 'select' element (which controls the dropdown menu to remove jobs) with the id of 'remove-job'}
//Step 2: Looping through the job array and when the loop is done, replace the innerHTML of the entire removeJobSelect variable 'remove-job' and replace it with the new removeOptions (newOptions).
function populateJobDropDown(jobs){

let removeJobSelect = document.getElementById("remove-job"); 
let removeOptions = {};

for (let i=0; i < jobs.length; i++) {
  let optionText = jobs[i].companyName + " - " + jobs[i].jobTitle;
  let newOptions = `<option value="${jobs[i].id}">${optionText}</option>`
  removeOptions = removeOptions + newOptions; 
  } 

removeJobSelect.innerHTML = removeOptions; 

/* Function Summary: We first fish for the select element (the drop down), call it removeJobSelect, and assign an empty string to removeOptions. This will be populated by looping through the array. During the loop, until all the array elements have been cycled through, each removeOptions is an element of the dropdown and the optionText is a string that shows the current index's company name and job title, with the newOptions being the new options added to the menu through the ADD function. Thusly, removeOptions is the options we have available to remove, and as the loop populates the options, the newOptions tack onto the already available removeOptions, building a list as the drop down */

}
/* The displayJobs function gets passed the 'jobs' key of the data and renames it 'jobs' */
function displayJobs(jobs) {
// Fishing for the table body
//* 
let tableBody = document.querySelector('tbody');
let tableRows = '';

//Looping through our Job Array
for (i=0; i< jobs.length; i++) {
  let newRows = `
  <tr>
  <td>${[i+1]}</td>
  <td>${jobs[i].dateApplied}</td>
  <td>${jobs[i].companyName}</td>
  <td>${jobs[i].jobTitle}</td>
  <td>${jobs[i].contact}</td>
  <td>${jobs[i].status}</td>
  <td><button>Edit</button></td>
</tr>`;
  tableRows = tableRows + newRows;
}

// Display the Table Row of Information about the Job (jobDetail)
tableBody.innerHTML = tableRows;
}

getAllJobs();

jobAddForm.addEventListener("submit", addNewJob)
/* 
First, we add an event listener to the jobAddForm submit button to execute the 'addNewJob' function when submit is clicked. Since it depends on a click and is a POST request type, 'addnewJob' has to  be async.. So we make a header object and call it 'myHeader'. We append the keys "content-type and "application/json" to it, and then we build out payload.

The payload starts with a body object. The keys are the information line for line connected to the keys, seeking their value. This is going to show in the body of our request.

The requestOptions object says the payload is a
*/
async function addNewJob(event) {
  // *Stop the page from reloading with preventDefault()
  event.preventDefault()
  // *Make sure we are an async function

try {
  // *Prepare the Request
  //    *headers
  //    *create payload

  // *by creating a headers object, we are able to tell our request that this is not a Get request, so that it can have a body.

  // Header Build
  let myHeader = new Headers()
  myHeader.append("Content-Type", "application/json"); //telling the server to be 'prepared for the 'application/json' Content-Type. If not included, the server will not know to read it in JSON.

  /* Our payload is made up of a body object and request options. We are using POST, so this is telling the request to send the body object based on the request options -- in this case, use the POST method, take the body object and turn it into JSON strings, and use the new header object we built and called myHeader so the server knows how to 'translate' the content-type the payload is coming in as */

// *Payload Build
let bodyObject = {
  dateApplied: dateApplied.value,
  companyName: companyName.value,
  jobTitle: jobTitle.value,
  contact: contact.value,
  status: status.value
  };

  let requestOptions = {
    method: "POST",
    body:JSON.stringify(bodyObject),
    headers: myHeader
  };
  // -----------------

/* Next, we conduct the fetch. In sum, when the submit button is clicked:
        *1. The function awaits a fetch from the addJob endpoint URL (the website) and the request options (how to send it, what to make of it, and how to translate it) and stores this info as the 'response'.
        *2. awaits the 'response' in json format and stores it as 'data'.
        *3. displays the 'data' in the console, which are the arrays (added jobs) in the database. */
let response = await fetch(endpoint.addJob, requestOptions);
let data = await response.json();
console.log(data);
// 4. Refresh The Table
getAllJobs();
} catch(error) {
  console.error(error);

  };

};

//-----DELETE fx---------

removeForm.addEventListener("submit", removeJob);

async function removeJob(event) {
  event.preventDefault()
  //No headers are needed because we are not sending a body of data.


  try{
  let removeJobSelect = document.getElementById("remove-job"); 

  let requestOptions = {
    method: "DELETE",
  };

  const response = await fetch(endpoint.delete + removeJobSelect.value, requestOptions);
  const data = await response.json()

  console.log(data)

  getAllJobs();
  } catch(error) {
    console.error(error);
  };
};