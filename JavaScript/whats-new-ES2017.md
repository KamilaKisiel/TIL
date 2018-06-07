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