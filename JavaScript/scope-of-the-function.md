### The simplest examples of function scope:
````
function funky1() {
    var a = 5;
    if(a > 1) {
        a = 3; //this one will override previously declared variable
    }
    console.log(a);
}

//outcome: 3
````
````
var a = 0;
function funky2() {
    a = 5;
}

function funky22() {
    console.log(a);
}

//if function funky22 run as a first the outome is going to be 0.
if function funky2 run as the second one - outcome undefined
if again, function funky22 is called - outcome 5!!!
````
````
function funky3() {
    window.a = "hello"; //this way of declaring variable make it's scope a window scope
}


function funky32() {
    console.log(a);
}

//outcome: hello
````
````
var a = 1;
function funky4() {
    var a = "test"; //this will override variable outside this function
    console.log(a);
}

//outcome: test
````
### ECMAScript6 changes rules of understanding scope of a function by introducing `let` and `const`
````
let a = 1;
function funky4() {
    let a = "test"; // this one will not override variable declared outsie function
    console.log(a);
}
console.log(a);

//outcome: test and 1
````

#### does `if` statements create their own scope? NO!
````
var a = 2;
if (true) {
    var a = 5;
    console.log(a);
}
console.log(a);
 // both cases outcome: 5

 BUT
var a = 2;
function foo() {
    var a = 5;
    console.log(a);
}
console.log(a);

//outcome: 2 and (after function foo being called) 5
````
but in ECMAScript6:
````
let a = 2;
if (true) {
    let a = 5; //viariable let is available only within brackets and it does not override varriable declared outside expression
    console.log(a);
}
console.log(a);
// outcome 5 and 2
````
#### additional topics connected with `scope` of function are `closure`, `currying` and `compose`
`closure` happens when a function ran, the function executed, it's never going to execute again, but it's going to remember that there are references to those variables so the
child scope always has acces to the parent scope

children scope => parent scope
parent scope =/=> children scope


`currying` process of converting a function that takes multiple arguments into the function that takes one a the time, like that:
```
//conveting this:
const multiply = (a,b) => a * b;

//into this:
const curriedMultiply = (a) => (b) => a * b; 

//it's make a function inside a function and if we call curriedMultiply() the outcome looks like that:
(b) => a * b;

//in order to make it work we need to put need to call it like this:
curriedMultiply(2)(3);

a useful example(function that always multiplates by 5):
multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);
//outcome 25
multiplyBy5(11);
//outcome 55
```
`compose` is a process of puting two functions together to form a third function when the output of one function is the input of the other
```
def:
const compose = (f, g) => (a) => (f(g(a)));

example:
const sum = (num) => num +1;

compose(sum, sum)(5);

//output is 7
first it gets function that adds 5+1, then 6 comes as an input to the second function which also adds up 6+1
```

