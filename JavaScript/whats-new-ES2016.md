### new additions in ES7

1) `..icludes()` method addaed on strings and arrays
```
'Helloooo'.includes('o');
```
gives `true`, because it checks if there's any 'o' inside this string

```
const pets = ["dog", "cat", "cow", NaN];

pets.inludes('dog')
```
returns `true`

__Previously__ we checked what's in array like this:
```
pets.indexOf('dog') >= 0 ? true : false //true

pets.indexOf('bird') >= 0 ? true : false; //false
```

This new feature also solves the problem of checking for NaN in an array...
```
pets.includes(NaN); //true

pets.indexOf(NaN) >= 0 ? true : false; //false
```

2) Exponential operator
```
const square = (x) => x**2

square(2) //4


cosnt cube = (y) => y**3;

cube(3) //27
```
__Previously__...
``` 
Math.pow(2, 2); //4
```