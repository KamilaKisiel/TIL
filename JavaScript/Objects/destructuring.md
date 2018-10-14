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

#### destructuring with arrays
````
let a = 8, b = 6;
(() => {
  "use strict";
  [b, a] = [a, b]
})();
console.log(a); // 6
console.log(b); // 8
````
....with the `rest operator`:
````
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // [3,4,5,6,7,8,9,10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10];
````