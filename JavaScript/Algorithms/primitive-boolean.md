### Check if variable is boolean

```
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(false); //true
```

The algorithm uses typeof operator to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.