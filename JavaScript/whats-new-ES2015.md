## new features ES6
### let & const
```
let a = 'test';
const vat = 23; 
const myName = 'Lutek';
```
### destructuring
```
const person = {
    firstName: "Lutek",
    lastName: "Biały",
    age:34,
    eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person
```
### object properties
```
const a = 'test;
const vat = 23;
const myName = 'Lutek';

const obj = { a, vat, myName };
```
### template strings
```
const greeting = `Hello ${firstName} have I met you before?`;
```
```
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
```

### arrow functions
```
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
```
### default arguments
```
const isValidAge = (age = 18) => age;
```
### symbol
```
const sym = Symbol('This is my first symbol');
```
tbc....