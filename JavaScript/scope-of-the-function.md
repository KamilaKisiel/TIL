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

