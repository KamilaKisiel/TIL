1. Inside `script` element, add this code: `$(document).ready(function() { `to your `script`. Then close it on the following line (still inside your `script` element) with: `})`;

We'll learn more about `functions` later. The important thing to know is that code you put inside this `function` will run as soon as your browser has loaded your page.

This is important because without your `document ready function`, your code may run before your HTML is rendered, which would cause bugs.

2. jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.


jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

3. `function chaining` involves sticking two jQuery functions together, for example:
```
$("#target2").clone().appendTo("#right-well");
```
first you copy an element an then you move it to defined place in a doc