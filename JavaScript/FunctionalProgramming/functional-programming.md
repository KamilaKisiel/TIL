Functional programming follows a few core principles:


* Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation

* Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

* Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, testable parts
`INPUT` -> `PROCESS` -> `OUTPUT`

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

`Callbacks` are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called `first class` functions. In JavaScript, all functions are `first class` functions.

The functions that take a function as an argument, or return a function as a return value are called `higher order` functions.
When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a `lambda`