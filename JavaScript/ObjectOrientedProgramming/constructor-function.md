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
`own` properies - defined directly on the instance object
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
