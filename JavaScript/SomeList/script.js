// grab html selectors:
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li"); //create a new list element//
	li.appendChild(document.createTextNode(input.value)) //whatever comes from the input goes to li content
	ul.appendChild(li); //new li is added at the and of existing list		
	input.value = ""; //clear input after entering item to prevent double adding
}

function addListAfterClick() {
	if(inputLength() > 0) { //do not add items from the empty input//
		createListElement();	
	}
}

function addListAfterKeypress(event) { //we calling an event inside the func, it's important to pass it as a parameter in func
	if (inputLength() > 0 && event.keyCode === 13) { //add an item when input is not empty and when enter key is pressed
		createListElement();
	}
}

// add event listener to enter new items into the list 
button.addEventListener("click", addListAfterClick)//listens on buttons clicking


input.addEventListener("keypress", addListAfterKeypress) //listens on enter key clicking