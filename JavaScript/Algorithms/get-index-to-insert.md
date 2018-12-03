### How to estimate an index at which a given value should be placed in array

```
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([40, 60], 50); //1
```

* We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge `arr` and `num` by invoking the `arr.concat(num)` method
* Then we use `sort()` with the callback *arrow function* `(a, b) => return a-b` to sort the numbers in ascending order
* Lastly we return the postion or index of `num` in the array with the `indexOf()` method