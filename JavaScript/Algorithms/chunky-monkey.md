### Split an array into smaller arrays of the length by the given size
```
function chunkArrayInGroups(arr, size) {
  // Break it up.
   var newArr = [];
      var i = 0;

      while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
      }
      return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // ["a", "b"] ["c", "d"]
```
