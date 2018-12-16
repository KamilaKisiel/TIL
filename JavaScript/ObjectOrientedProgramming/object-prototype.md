### Prototype - recipe for creating objects

The `prototype` is an object that is shared among ALL instances of constructor function

```
function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

let canary = new Bird("Tweety");
console.log(canary.numLegs) //2
```