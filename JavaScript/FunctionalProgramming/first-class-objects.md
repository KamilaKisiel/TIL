### Functions are considered `First Class Objects` in JavaScript, which means they can be used like any other object. 
They can be:
* saved in variables, 
* stored in an object, or 
* passed as function arguments.

### Methods on the array object

**.map()**

the `map` method is a way to iterate over each item in an array. It creates a new array (without changing the original one) after applying a callback function to every element.
```
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "imdbRating": "8.8"                  
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "imdbRating": "8.6"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "imdbRating": "9.0"                   
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "imdbRating": "8.3"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "imdbRating": "7.9"
                }
];

var rating = watchList.map((item) => ({"title": item["Title"], "rating": item["imdbRating"]}));
console.log(rating); // [{title: "Inception", rating: "8.8"}, {title: "Interstellar", rating: "8.6"}, {title: "The Dark Knight", rating: "9.0"}, {title: "Batman Begins", rating: "8.3"}, {title: "Avatar", rating: "7.9"}]
```

**.filter()**

`filter` method returns a new array which is at most as long as the original array, but usually has fewer items. It takes each element of the array and if an element returns true based on the criteria in the callback function, then it is included in the new array.
```
var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList); [{title: "Inception", rating: "8.8"}, {title: "Interstellar", rating: "8.6"}, {title: "The Dark Knight", rating: "9.0"}, {title: "Batman Begins", rating: "8.3"}]
```

**.slice()**

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.
```
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3); // ["Dog", "Tiger"]
```

**.splice()**

`splice` method takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on
```
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // "London"
cities = ["Chicago", "Delhi", "Islamabad", "Berlin"]
```
**.concat()**

the `concat` method is called on one array, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays.
```
function nonMutatingConcat(original, attach) {
  return original.concat(attach)
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

**.push()**

`Push` adds an item to the end of the same array it is called on, which mutates that array.
```
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]] - Not the functional programming way!!!
```



