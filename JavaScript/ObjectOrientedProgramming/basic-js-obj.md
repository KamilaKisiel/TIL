### Basic JS Object
```
let dog = {
  name: "Camper",
  numLegs: 4
};
```
accessing object properties
```
console.log(dog.name); // Camper
console.log(dog.numLegs) // 4
```
methods in obj are functions
```
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs."
  }
};
dog.sayLegs(); // "This dog has 4 legs."
```
making the code reusable with `this` keyword
```
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs(); // "This dog has 4 legs."
```