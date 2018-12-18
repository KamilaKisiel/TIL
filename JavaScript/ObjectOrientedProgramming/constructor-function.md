### Contructor 
`Constructors` are functions that create new objects

```
function Dog() {
    this.name = "Camper";
    this.color = "yellow";
    this.numLegs = 4
}
```
"this" inside the constructor always refers to the object being created

`new` operator tells JavaScript to create a new instance of Dog. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results.
```
let hound = new Dog()
```

Constructor that accepts parameters:
```
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4
}
let terrier = new Dog("Camper", "yellow")
// terrier {name: "Camper", color: "yellow", numLegs: 4}
```
new object created by `constructor` function is always an instance of that `constructor`.
to verify if new object is created by `constructor` we can use `instanceof` operator. it returns `true` or `false` as a result
```
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);

myHouse instanceof House; // true
```
`own` properties - defined directly on the instance object
```
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for(let property in canary){
  if (canary.hasOwnProperty(property)){
  ownProps.push(property)
  }
}
// ["name", "numLegs"]
```
`prototype` properties - an object that is shared among ALL instances of constructor function
```
function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

let canary = new Bird("Tweety");
console.log(canary.numLegs) //2
```
how to distinct between `own` and `prototype` properties
```
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

`constructor` property - allows to check a type of object
```
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
}
```
** it is better to use `instaceof` method **
