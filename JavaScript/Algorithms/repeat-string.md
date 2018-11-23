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
* Create an empty string variable to store the repeated word.
* Use a while loop or for loop to repeat code as many times as needed according to num
* Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
* At the end of the loop, return the variable for the repeated word.

Solution with recursive func
```
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
```
* We check if num is negative and return an empty string if true.
* Then we check if it’s equal to 1 and in that case we return the string itself.
* If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another.. until eventually num is 1. And return that whole process.
