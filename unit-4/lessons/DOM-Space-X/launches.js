console.log('shit works fam');

/* 
Create a new button called launches. This button will use the following fetch URL.

url: https://api.spacexdata.com/v3/launches

Display the mission patch as an image tag
Display the mission name as H2 tag
Display details of the mission as p tag
Display the youtube url as a click able link that says "Click to View on Youtube"
*/

//Step 1: async function + try catch statement
async function fetchSpaceXLaunchData() {
    console.log("fetch click worked");
    let url = "https://api.spacexdata.com/v3/launches";


    /* 
    *on button click (onclick), initiate 'fetchSpaceXLaunchData()' fx. assign the URL of the API, and initiate a 'try, catch'. 
        * => "await the click and, onclick, fetch URL. Call it 'response'. log the response from the server (.json) and let it be data. THEN, run 'displayLaunchData' fx and pass through the data variable. If there's an error, catch it and console.log it. " */
    try{
        let response = await fetch(url);
        let data = await response.json();
        displayLaunchData(data);
    } catch (error) {
        console.error(error);
    }   
}

/* 
*declare 'displayLaunchData' fx, pass through 'launches' argument to pull 'data' from try catch statement in 'fetchSpaceXLaunchData' fx.
*/
function displayLaunchData(launches) {
    console.log(launches);
    
    // *console log 'launches' to display data in site console. 
    //! NOTE: must declare fx BEFORE console logging.
    // ? When the displayLaunchData fx is called in the initial try/catch, it is passed the 'data' param. when we go forward to DECLARE the fx, the param we put in the declaration "becomes" data.
    // *use querySelector to assign the 'div class="container"' in our HTML file to be 'containerElement' by calling it's '.container' class, like in CSS.
    
    let containerElement = document.querySelector(".container"); //parent
    
    
    
    launches.forEach(launch => {
        console.log(launch.links.mission_patch_small);
        console.log(launch.mission_name);
        console.log(launch.details);
        console.log(launch.links.video_link);
    

    
    // *when this function runs and the querySelector pulls the container, a forEach loop will initialize with the param 'mission' passed through it.
        //*in the data, we can expand an object and see it's keys. 
        // ! Note mission_name and mission_details is in the main list of keys, but 'mission_patch' and 'video_link' lie as sub-keys within the 'links' key.


// *Create the Elements
//Display the mission patch as an image tag
//Display the mission name as H2 tag
//Display details of the mission as p tag
let missionPatchElement = document.createElement("img");
let missionNameElement = document.createElement("h2");
let missionDetailsElement = document.createElement("p");
let videoLinkElement = document.createElement("a")
    videoLinkElement.innerHTML="Click to View on YouTube!";
    videoLinkElement.title = "View on Youtube";

// ? Bonus: Add a clear button
//     // *event listener
// clearButton.addEventListener("click", () => {
//     clearAll();
// });

// *Update the img src, link reference, and textContent
missionPatchElement.src = launches.links.mission_patch_small;
videoLinkElement.href = launches.links.video_link;
missionNameElement.textContent = launches.mission_name;
missionDetailsElement.textContent = launches.details;


//*sick, now build the HTML (append the newly created missionXElement children to the containerElement parent.)
containerElement.appendChild(missionPatchElement);
containerElement.appendChild(missionNameElement);
containerElement.appendChild(missionDetailsElement);
containerElement.appendChild(videoLinkElement);
;
//Display the youtube url as a click able link that says "Click to View on Youtube"
// *To display a youtube URL as a link, we create the link element 'a' in the document, use .innerHTML for the text between the tags, .href for the link, and .title for the title. Then, append 'videoLinkElement child to containerElement parent.
}); //*close the forEach with all the variables, elements, textContent changes, and children are within the loop.

} // close the fetchSpaceXLaunchData fx
clearAll(containerElement);


 //*close the displayLaunchData() fx and run that bih

//*Now create a button that will clearAll() the elements using .removeChild()




