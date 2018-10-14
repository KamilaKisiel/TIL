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

#### destructuring with nested objects:
````
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow: {max : maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 84.6
````