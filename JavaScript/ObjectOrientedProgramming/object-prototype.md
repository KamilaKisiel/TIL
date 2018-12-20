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