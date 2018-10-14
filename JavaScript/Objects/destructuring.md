### Destructuring 
#### there is an object given:
````
const player = {
    name: "Lutek",
    experience: 1000,
    wizardLevel: false 
}
````
to have an access to all of the properties within an object we suppose to do somethin' like this:
````
const name = player.name;
const experience = player.experience;
let wizardLevel = player.wizardLevel;
````
well... super tiring. thanks to destructuring we can grab them in much easier way:
````
const { name, experience } = player;
let { wizardLevel } = player;
````
#### destructuring used in a function:
````
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};


function getTempOfTmrw(avgTemperatures) {
  "use strict";
  
  const {tomorrow : tempOfTomorrow} = avgTemperatures; 
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
````