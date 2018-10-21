## Regular Expressions
### Using the Test Method
```
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```
### Matching string with different possibilities
```
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
```