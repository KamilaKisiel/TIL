### DRY
There's a principle in programming called `Don't Repeat Yourself (DRY)`
```
function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
  eat: function() {
    console.log("nom nom nom");
  }
};
```
The `eat` method is repeated in both `Cat` and `Bear`
Being aware of inheritance provided by prototypes we can simplyfy above code by following the rule: do not repeat yourself DRY
```
function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
  
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```