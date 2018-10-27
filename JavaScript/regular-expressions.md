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
### character classes - []
```
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex);
```
checks both upper- and lowercase in the string `quoteSample`.

to check letters from alphabet we use hyphen `-`
```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);
```
checking for range of numbers
```
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);
```
### negated character sets - using `^` to exclude characters
```
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; 
let result = quoteSample.match(myRegex); // [" ", "b", "l", "n", "d", " ", "m", "c", "."]
```
### Match Ending String Patterns - with `$` sign at the end of the regex
```
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose); // returns true
```

### lazy and greedy regexes

Regular expressions are by default `greedy` which means they return largest possible sub-string that maches pattern:
```
let text = 'titanic';
let myRegex = /t[a-z]*i/;
let result = text.match(myRegex); // titani
```

to make them `lazy` and find shortest sub-string possible, we need to add `?`
```
let text = 'titanic';
let myRegex = /t[a-z]*?i/;
let result = text.match(myRegex); // ti
```