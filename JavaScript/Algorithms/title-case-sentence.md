### First letter of each word in a sentence capitalized

```
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot"
```
