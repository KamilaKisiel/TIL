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
or simpler
```
Object.entries(obj)

//outcome
[
["username0", "Bolek"] 
["username1", "Lolek"] 
["username2", "Tola"]
]
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
__cute examples__

_String padding_:
```
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐰';
```
Lineup turtle and rabbit at the start line
```
turtle = turtle.padStart(9);
rabbit =rabbit.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

//outcome

     ||<- Start line
       🐢
       🐰
```
Let the turtle win by
```
turtle = turtle.trim().padEnd(9, '=');
```
_Object.entries_:
```
let obj = {
    Hi: 'my',
    name: 'is',
    Tola: 'I am',
    a: 'writer'
}
```
make this a full sentence like this: 
'Hi my name is Tola I am a writer'
```
Object.entries(obj).map(value => value.join(' ')).join(' ');
```

4) Async await

it is build on top of the `promises` - async function is a function that returns `promise`

_example:_
````
//old/current way of dealing with things
movePlayer(100, 'Left') //distance+direction
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

//same example with async await

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}
````

`await` keyword - "pause this function untill I have something for you"; awaiting for the response. once the promise is resolved the function moves to the next line

another, nicer _example:_
````
// first old/current way 

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(console.log)

//turning it into async function

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
}

fetchUsers();
// Promise {<pending>}
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
````

and another _example:_
````
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//old way

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})). then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

//new way

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
    ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (error){
        console.log('ooops', error)

    }
}
````
