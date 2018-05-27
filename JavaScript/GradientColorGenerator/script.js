let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";" //update text to show which color has been choose from gradient generator
}

//set random background color
function getRandomColor() {
	let letters = '0123456789ABCDEF'; //hexa colors are combination of those 16 characters
	let color = '#'; //every color in hexa starts with #
	for (let i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

