### Adding Items to an Array with push() and unshift()

the `push()` method adds elements to the end of an array

`unshift()` adds elements to the beginning

```
function mixedNumbers(arr) {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three')
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); // [I,2,three,IV,5,six,7,VIII,9]
```
### Removing Items from an Array with pop() and shift()

`pop()` removes an element from the end of an array
`shift()` removes an element from the beginning of an array

they do not take any **parameters**, so they work on a single element at once

```
function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); // ['challenge', 'complete']
```
### Removing any number of consecutive elements from anywhere in an array with `splice()`

```
//goal: return value of 10
function sumOfTen(arr) {
  arr.splice(1,2)
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
```