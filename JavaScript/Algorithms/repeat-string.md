### Repeat a string
```
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);
```