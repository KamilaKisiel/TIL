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

### adding with `splice()`
```
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']
```
This function takes an array of hex values, an index at which to remove an element, and the new color to replace the removed element with

removing first two elements from arr and adding two others in their respective places:
```
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
  return arr;
} 
 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
// ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]
```

### Copy Array Items Using `slice()`

`slice()` takes 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction
```
function forecast(arr) {
  
  return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // ['warm', 'sunny']
```