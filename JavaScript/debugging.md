try to understand/debug this function:
```
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);
```
1) try to read what is happening - seems like someone try to `flattened` a nested array [[0, 1], [2, 3], [4, 5]] by using method `reduce` which accepts two parameters: accumulator(so this is a) and the thing we are looping over, so array (and this is b)
2) try to rewrite this function
```
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => accumulator.concat(array), []);
```
3) try to log in console what is what
```
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);    
    return accumulator.concat(array)
}, []);

//outcome
array (2) [0, 1]
accumulator []
array (2) [2, 3]
accumulator (2) [0, 1]
array (2) [4, 5]
accumulator (4) [0, 1, 2, 3]

flattened
// [0, 1, 2, 3, 4, 5]
```
4) use debugger
```
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
    debugger;   
    return accumulator.concat(array)
}, []);
```
5) accumulator start of with an empty array [] and then concatenates with every loop whats inside of the nested array and gives a flattened array [0, 1, 2, 3, 4, 5]


