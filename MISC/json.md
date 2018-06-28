## JSON (JavaScript Object Notation)
### JSON file are used for one simple reason - they are text files tha can be understood by server no matter what language it uses. using JSON format we can send data between machines that might not speak the same language

- JSON is a syntax storing and exchanging data
- JSON is **text**, written with JavaScript object notation

xml (html-like syntax) also can be used to send data to server, but JSON is more efficient type of format 

JSON can be coverted both ways into text or into object by two methods:

- `JSON.parse()`
```
let obj = JSON.parse('{"name":"John","age":30,"city":"New York"}');
```
- `JSON.stringify()`
```
let myJSON = JSON.stringify(obj)
```