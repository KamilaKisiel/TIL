there's given a random array....

````
let fruits = [
    "apple",
    "banana",
    "pineapple",
    "pear",
    "plum"
]
````
the simplest way to get indexes of items within an array is to iterate through each of them by using a loop, like this:
````
for (let i=0; i < fruits.length; i++) {
    console.log(i);
}
````
to display an items in an array:
````
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i], i);
}
//outcome:
apple 0
banana 1
pineapple 2
pear 3
plum 4
//
````

