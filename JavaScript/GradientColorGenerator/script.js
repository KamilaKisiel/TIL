let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";" //update text to show which color has been choose from gradient generator
}

//get random background color
function getRandomColor() {
	let letters = '0123456789ABCDEF'; //hexa colors are combination of those 16 characters
	let color = '#'; //every color in hexa starts with #
	for (let i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//set random color
function setRandomColor() {
	let randomColor1 = getRandomColor();
	let randomColor2 = getRandomColor();
	color1.value = randomColor1;
	color2.value = randomColor2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1
	+ ", " 
	+ randomColor2 + ")";
	
	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColor);

