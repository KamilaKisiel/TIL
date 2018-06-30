### Ajax (Asynchronous JavaScript and XML) - alows to read from server after the page has loaded and update the page without reloading it; send data in the background while user is inteacting with the website

to download data from server we use `fetch` method
```
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
    })
```
fetch is a part of window object
fetch returns `promise` which says "i'm making a request somewhere in the internet and i'm going to let you know when the value returns". to access the value we use `.then` method which gives us response:
```
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
body:(...)
bodyUsed:false
headers:Headers {}
ok:true
redirected:false
status:200
statusText:""
type:"cors"
url:"https://jsonplaceholder.typicode.com/users"
__proto__:Response
```
`fetch` uses his own method `.jason' to convert what we get form server:
```
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
```
...and again we receive `promise` to which we can accsess by using `.then`:
```
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
```
this way we receive our users:
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

### Promise (new feature of ES6) is an object that may produce a single value some time in the future. That can be resolved value or a reason that it's not resolved (rejected). Promise can be in one of possible states:
* fulfilled
* rejected 
* pending

`callbacks`
```
element.addEventListener("click", submitForm)
```
*submitForm* in this expression is a `callback`

```
// callback ptramid of doom
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function())
        });
    });
});
```
Instead of `callbacks` we can apply promises, like this
```
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() -> movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))
```
[go to: Promise](promise.js) 
