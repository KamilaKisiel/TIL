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