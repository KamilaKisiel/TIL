### Factorialize a number with recursive function

```
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5); // 120
```
Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is `num-1` (which initially translates to 4). The very function is going to **run inside itself**