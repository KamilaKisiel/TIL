#### if an image is taller than element containing it and float is applied, then it overflows outside of its container
```
//html:
 <div>
 <img src="foto1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
 </div>

 //css:
 img {
     float: right;
 }
 ```
 #### to fix this problem a clearfix class with `overflow: auto` should be added to `div` container
```
<div class="clearfix">
 <img src="foto1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
 </div>

 //css:
 img {
     float: right;
 }
 .clearfix {
     overflow: auto;
 }
 ```