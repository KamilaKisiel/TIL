### Dancing Robot 

Overly-called transition and transform excersice in css.
Inspired by online [Udemy course by Andrei Neagoie](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8639758?start=0)

Transforms move or change the appearance of an element.

__robot example:__
````
/*-webkit-, -moz-, -o-, -ms- vendor-prefixed properties offered by the relevant rendering engines */

.left_arm:hover {
	-webkit-transform: rotate(20deg); /*Chrome, Safari*/
	-moz-transform: rotate(20deg); /* Firefox */
	-o-transform: rotate(20deg); /* Opera */
	-ms-transform: rotate(20deg); /* IE */
	transform: rotate(40deg);
}

````
Transitions make the element smoothly and gradually change.
