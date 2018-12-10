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
