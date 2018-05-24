### Cases of very frustrating mistakes

1. Catching a selector
__example:__
````
document.getElementsByTagName("button");
````
The outcome of such expression is an array `[button]` of all buttons in a document. If we try to add event listener to that selector...
````
let button = document.getElementsByTagName("button");

button.addEventListener("click", function(){
    console.log("click!!");
})
````
...we get "`button.addEventListener` is not a function"

The solution is to specify which button from the array we want to choose:
````
document.getElementsByTagName("button")[0];
````
with an index number at the end of method.
So the mistake is that we try to use event listener on the array and not on the actual element