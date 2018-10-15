In ES5 we use the `new` keyword to instantiate an object
```
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The `class` syntax simply replaces the constructor function creation:
```
function makeClass() {
  "use strict";
class Vegetable {
  constructor(name) {
    this.name = name
  }
}
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // 'carrot'
```
