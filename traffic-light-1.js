/**
 * The `state` property says what the traffic light's state (i.e. colors) is at
 * that moment.
 */

// TODO
// if the color is green, turn it orange
// if the color is orange, turn it red
// if the color is red, add 1 to rotations and turn it green

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
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log(`The traffic light is on, %c${currentState}`, `color: ${currentState}`);

  //solution
  if (currentState === 'green') {
    trafficLight.state = 'orange';
  }
  else if (currentState === 'orange') {
    trafficLight.state = 'red';
  }
  else if (currentState === 'red') {
    trafficLight.state = 'green';
    rotations++;
  }
  //////////
}
