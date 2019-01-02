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
We  can set the `prototype` of the `subtype` (or child)—in this case, Dog—to be an instance of Animal.

```
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat();  // nom nom nom
```

resetting an inherited constructor property
```
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

duck.constructor // Bird () {}
beagle.constructor // Dog () {}
```
adding methods after inheritence
```
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!")
}

let beagle = new Dog();

beagle.eat(); // "nom nom nom"
beagle.bark(); // "Woof!"
```