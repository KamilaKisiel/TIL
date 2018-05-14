#### Short reminder of how to display images with full RWD properties
HTML example snippet
````
<div class="container">
    <img src="foto1.jpg">
    <img src="foto2.jpg">
    <img src="foto3.jpg">
    <img src="foto4.jpg">
    <img src="foto5.jpg">
    <img src="foto6.jpg">
</div>
````
CSS example snippet
````
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

img {
    transition: all 1s;
}

img:hover {
   transform: scale(1.1); 
}
````
