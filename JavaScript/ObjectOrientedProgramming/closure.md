### In JavaScript, a function always has access to the context in which it was created. This is called `closure`

in other words: A closure is a function having access to the parent scope, even after the parent function has closed
```
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight
  }
  
}
getWeight(); // 15
```