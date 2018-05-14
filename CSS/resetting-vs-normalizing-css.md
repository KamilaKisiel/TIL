## Resetting vs. normalizing CSS

### Resetting - remove all default browser styling on elements, like `padding`, `margin`, `font-size`.
Means that you have redeclare styling for all common elements.

__example__
```
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline
  }

  img {
    border: 0
  }

  *:focus {
    outline: none
  }
```

### Normalizing - keeping useful default styling values, like headers `h1`, `h2`... font-size, `ul` indentations, form's consistency
Normalize.css corrects some common bugs that are out of scope for reset.css
__example__
````
//Remove the margin in all browsers

  body {
    margin: 0;
  }

//Remove the gray background on active links in IE 10.
  
  a {
    background-color: transparent;
  }
  
// Prevent `sub` and `sup` elements from affecting the line height in
   all browsers.
    
   
   sub, sup {
     font-size: 75%;
     line-height: 0;
     position: relative;
     vertical-align: baseline;
   }
   
   sub {
     bottom: -0.25em;
   }
   
   sup {
     top: -0.5em;
   }
````
[normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)