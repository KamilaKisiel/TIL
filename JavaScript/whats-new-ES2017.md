### new additions in ES8

1) String padding - `.padStart()` and `.padEnd()`

```
'Pillow'.padStart(10); 
// "    Pillow" 10 spaces in total = string + spaces before string

'Pillow'.padEnd(10);
// "Pillow    "

'Pillow'.padEnd(10, '*');
// "Pillow****"
```

2) Trailing comas in function parameter list - now you can place coma after last function parameter and compiler won't throw an error
```
function buz (
    a, 
    b, 
    c, 
    d,
) {
    console.log(a)
}
```
apperently it improves readability in version control system

3) Object.values and object.entries

...so we can use all array methods on the objects...

To iterate through objects keys and values pairs we used so far method Object.keys
```
let obj = {
    username0: 'Bolek',
    username1: 'Lolek',
    username2: 'Tola'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

//outcome
username0 Bolek
username1 Lolek
username2 Tola
```

Now we can use simple Object.values
```
Object.values(obj).forEach(value => {
    console.log(value)
})

//outcome
Bolek
Lolek
Tola
```
or
```
Object.values(obj);

//outcome
(3) ["Bolek", "Lolek", "Tola"]
```

Object.entries returns arrays with pairs of key and value as an items of an array, like that:
```
Object.entries(obj).forEach(value => {
    console.log(value)
})

//outcome
(2) ["username0", "Bolek"]
(2) ["username1", "Lolek"]
(2) ["username2", "Tola"]
```
and we can play with it by using array methods, like `map`
```
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})
```
as we want to create accually username with number of index, so we take Bolek, as value[1] and replace username on value[0] with empty string and combine those two together. and the outcome is:
```
(3) ["Bolek0", "Lolek1", "Tola2"]
```