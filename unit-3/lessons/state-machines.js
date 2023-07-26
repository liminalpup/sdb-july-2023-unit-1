/* 
    ? State Machines
*/

// Lookup Table

function getPoemTitle(author) {
    let poems = {
        "Robert Frost": "Stopping by Woods on a Snowy Evening",
        "Shel Silverstein": "Falling Up",
        "Sylvia Plath": "The Bell Jar"
    }
    return poems[author]
}

console.log(getPoemTitle("Sylvia Plath"))

let switchState = {
    on: ["off"],
    off: ["on"]
}

let lightSwitch = "on"

function modifyLightState(newState) {
    let transitions = switchState[lightSwitch]
    if (transitions.includes(newState)) {
        lightSwitch = newState
    } else {
        throw new Error(`Invalid state transformation from ${lightSwitch} to 
        ${newState}`)
    }
}
modifyLightState("off")
console.log(lightSwitch)

let trafficLight = {
    red: ['green', 'yield'],
    yellow: ['red'],
    green: ['yellow'],
    yield: ['red'],
}

let currentTrafficLightColor = "green"

function modifyTrafficState(newState) {
    // assigns values of state property matching current state
    let transitions = trafficLight[currentTrafficLightColor]
    // verify if newState is valid transition
    if (transitions.includes(newState)) {
        //change the state
        currentTrafficLightColor = newState
        console.log(currentTrafficLightColor)
    } else {
        // throw error if transition is impossible
        throw new Error (`Invalid state transformation from ${currentTrafficLightColor} to ${newState}`)
    }
}

modifyTrafficState("yellow")
