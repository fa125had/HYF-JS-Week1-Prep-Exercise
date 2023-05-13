/**
 * The `possibleStates` property define the states (in this case: colors)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */

// TODO
// if the color is green, turn it orange
// if the color is orange, turn it red
// if the color is red, add 1 to cycles and turn it green

/**
 * The output should be:
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
*/
////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

"use strict";
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log(`The traffic light is on %c${currentState}`, `color:${currentState}`);
  //solution
  for (let i = trafficLight.stateIndex; i < trafficLight.possibleStates.length - 1; i++) {
    const nextStateIndex = (trafficLight.stateIndex + 1);
    trafficLight.stateIndex = nextStateIndex;
    const nextState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log(`The traffic light is on %c${nextState}`, `color:${nextState}`);
  }
  trafficLight.stateIndex = 0;
  cycle++;
  //////////
}
