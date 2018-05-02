# Loops

## While loop

Executes as long as the specified condition evaluates to `true`.
Syntax is very similar to the `if` statement
````
while (condition) {
    // execute code as long as condition is true
}
````

__example:__
````
// Set room capacity to 10
const roomCapacity = 10;

// Start off with 0 persons
let persons = 0;

// Initiate while loop to run until number of persons reaches capacity limit
while (persons < roomCapacity) {
    // add one person for each iteration
    persons++;
    console.log("There's room for " + (roomCapacity - persons) + " more persons.");
}
````
````
Output:
There's room for 9 more persons.
There's room for 8 more persons.
There's room for 7 more persons.
There's room for 6 more persons.
There's room for 5 more persons.
There's room for 4 more persons.
There's room for 3 more persons.
There's room for 2 more persons.
There's room for 1 more persons.
There's room for 0 more persons.
````

### Infinite loop
Example of code that will run forever
````
// Initiate an infinite loop
while (true) {
    // execute code forever
}
````
To terminate the loop we add `break` 

## Do... while loop
Will always execute once, even if the condition is not true
````
do {
    // execute code
} while (condition);
````
__example:__
````
// Set variable to 0
let x = 0;

do {
    // Increment variable by 1
    x++;
    console.log(x);
} while (false);
````
````
Output:
1
````

## For loop

Will use up to three optional expressions to implement 
the repeated execution of a code block

````
for (initialization; condition; final expression) {
    // code to be executed
}
````
__example;__
````
// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
    // Print each iteration to the console
    console.log(i);
}
````
````
Output:
0
1
2
3
````
### Usage
We can modify array with for loop
````
// Initialize empty array
let array = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
    // Update array with variable value
    array.push(i);
    console.log(array);
}
````
````
Output:
[ 0 ]
[ 0, 1 ]
[ 0, 1, 2 ]
````
The loop can run over the array as many times as there are items in it
````
// Declare array with 3 items
let fruits = [ "apple", "orange", "plum" ];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fruits.length; i++) {
    // Print each item to the console
    console.log(fruits[i]);
}
````
````
Output:
apple
orange
plum
````

## For...in loop
Iterates over the properties of an object

__example:__
````
const person = {
    age: 52,
    gender: "male",
    nationality: "polish"
}
````
Using the `for...in` loop, we can easily 
access each of the property names
````
for (attribute in person) {
    console.log(attribute);
}
````
````
Output:
age
gender
nationality
````
...or access the names and values all together
````
for (attribute in person) {
    console.log(`${attribute}`.toUpperCase() + `: ${person[attribute]}`);
}
````
````
Output:
AGE: 52
GENDER: male
NATIONALITY: polish
}
````
