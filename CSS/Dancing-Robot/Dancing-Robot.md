### Dancing Robot 

Overly-called transition and transform excersice in css.
Inspired by online [Udemy course by Andrei Neagoie](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8639758?start=0)

### Transformation
Transforms move or change the appearance of an element.

__robot example:__
````
/*-webkit-, -moz-, -o-, -ms- vendor-prefixed properties offered by the relevant rendering engines */

.left_arm:hover {
	-webkit-transform: rotate(40deg); /*Chrome, Safari*/
	-moz-transform: rotate(40deg); /* Firefox */
	-o-transform: rotate(40deg); /* Opera */
	-ms-transform: rotate(40deg); /* IE */
	transform: rotate(40deg); /*rotates
}

````

### Transitions
Transitions make the element smoothly and gradually change.
Without a transition, an element being transformed would change abruptly from one state to another.

__robot example:__
````
.head:hover {
	width: 300px;
	transition: 90ms ease-in-out;
}
````
Above example uses two of four transition properties duration(90ms) and timing(ease-in-out).
There is also property property that indicates on which elements transition should be applied.
Fourth property - delay - allows to specify when the transform will start.