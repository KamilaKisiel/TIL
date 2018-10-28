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
## Shortcuts
### Match All Letters and Numbers with `\w` shortcut
`\w` stands for `[A-Za-z0-9_]` characters
```
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length // 31
```
the oposite result which means non alphanumeric characters is obtained by `\W` shortcut which stands for `[^A-Za-z0-9_]`
```
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length; // 6
```
### Match All Numbers with `\d` shortcut for `[0-9]`
```
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let result = numString.match(numRegex).length // 3
```
all non-numbers with \D shortcut which equals to `[^0-9]`
```
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; 
let result = numString.match(noNumRegex).length; // 24
```
### match username with provided restrictions

`\d*$\i` - The only numbers in the username have to be at the end. \d$ There can be zero or more of them at the end * and letters can be lowercase and uppercase. i
`^[a-z]{2,}` - Usernames have to be at least two characters long. {2,} A two-letter username can only use alphabet letter characters. ^[a-z]
```
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
```

### look for a whitespace in a string
```
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace); // [" ", " ", " ", " ", " "]
```