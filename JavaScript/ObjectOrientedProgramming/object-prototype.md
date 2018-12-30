### Prototype - recipe for creating objects

The `prototype` is an object that is shared among ALL instances of constructor function

```
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object
```
Because a `prototype` is an object, a `prototype` can have its own prototype. In this case, the `prototype` of `Bird.prototype` is `Object.prototype`:
```
Object.prototype.isPrototypeOf(Bird.prototype); // true
```
 `Object` is a `supertype` for Bird

```
function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

let canary = new Bird("Tweety");
console.log(canary.numLegs) //2
```
Creating object by using `new` operator
```
let animal = new Animal();
```
have some disadvanteges and as an alternative we can use
```
let animal = Object.create(Animal.prototype)
```
`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`
```
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); //nom nom nom
beagle.eat(); //nom nom nom
```