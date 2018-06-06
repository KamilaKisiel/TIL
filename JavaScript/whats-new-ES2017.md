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

