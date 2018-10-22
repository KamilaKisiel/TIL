## Regular Expressions
### Using the Test Method (returns `true` or `false`)
```
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
```
### Matching string with different possibilities
```
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
```
`i` flag ignores case size
```
let myString = "whatsOnTheOtherSide";
let otherRegex = /whatsOnTheOtherSide/i;
let result = otherRegex.test(myString);
```

### Using the Match Method (returns extracted word)
```
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
```
`g` flag returns multiple matches
```
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // you can have multiple flags on regex
let result = twinkleStar.match(starRegex); 
```

### wildcard character - to match any missing character
```
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
```