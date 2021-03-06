The `arity` of a function is the number of arguments it requires. `Currying` a function means to convert a function of N `arity` into N functions of `arity` 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
```
function add(x) {
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}
add(10)(20)(30); //60
```
we can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. example:
```
var funcForY = add(10)
console.log(funcForY(20)(30)) // 60
```
Similarly, `partial application` can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
```
 function impartial(x,y,z){
   return x+y+z
 }

 var partialFn = impartial.bind(this, 20, 30)
 partialFn(10); // 60
 ```