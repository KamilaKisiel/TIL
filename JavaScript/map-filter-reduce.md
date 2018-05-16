There are basically three fundamental operations on arrays in JS
that are "must-know" methods for every developer, `map` `filter` and `reduce`
They are defined as a `Array.prototype` and can be called on any array.
Let's say we have an array...

```
const animals = [

    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]
````
### Map

`map` is a method used to do the same operation on each of the elements in the array 
and return the same amount of items in the _new_ array

__example:__
````
animals.map(animal => animal.name);
/*
["cat", "dog", "lion", "elephant"]
*/
````

