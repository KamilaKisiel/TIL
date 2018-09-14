# Conditional Statements

## If statement
Execute the code if statement evaluates to `true`
````
if (condition) {
     // code that will execute if condition is true
}
````

__example:__

````
// Set balance and price of item
const bankBalance = 700;
const amount = 99.99;
const amount2 = 800;

// Check if there are enough funds to purchase item
if (amount <= bankBalance) {
  console.log("I can afford to buy this!");
}

//or

if (amount2 >= bankBalance) {
console.log("Nope!")
}
````
## Else statement
Execute the code when statement evaluates to `true`.
Otherwise do something else...
````
if (condition) {
    // code that will execute if condition is true
} else {
    // code that will execute if condition is false
}
````
__example:__
````
// Set balance and price of item
const bankBalance = 700;
const phone = 800;

// Check if there is enough funds to purchase item
if (phone <= bankBalance) {
    console.log("I can afford to buy this!");
} else {
    console.log("Nope!");
}
````

````
Output:
Nope!
````
## Else if statement
Statements where three or more conditions are evaluated
````
if (condition a) {
    // code that will execute if condition a is true
} else if (condition b) {
    // code that will execute if condition b is true
} else if (condition c) {
    // code that will execute if condition c is true
} else {
    // code that will execute if all above conditions are false
}
````
__example:__
````
// Set the temerature of the air:
let celsiusTemperature = 26;

// Check if celsiusTemperature is an A, B, C, D, or F
if (celsiusTemperature >= 40) {
  console.log("A");
} else if (celsiusTemperature >= 30) {
  console.log("B");
} else if (celsiusTemperature >= 20) {
  console.log("C");
} else if (celsiusTemperature >= 10) {
  console.log("D");
} else {
  console.log("F");
}
````
````
Output:
"C"
````
## Ternary operator
used as shorthand for an `if...else`

````
(condition) ? expression on true : expression on false
````
__example:__
````
let age = 26;
const canDrinkAlkohol = (age > 18) ? "Yes, she can!" : "Nope!";
// Print output
canDrinkAlkohol;
````
````
Output:
"Yes, she can!"
````
## Switch statement
used when many conditions are given
````
function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster';
            break; //if this is true stop checking other cases and go straight to 'return'
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
````
````
function caseInSwitch(val) {
  let answer;
  switch(val) {
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
  }
  return answer;  
}
caseInSwitch(1); // => "alpha"
````