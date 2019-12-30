var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for(var i = 0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	})
}

function reset() {

	//generate new colors;
	colors = generateRandomColors(numSquares);
		//pick a random color;
		pickedColor = pickColor();
	//change colorDisplay to match picked color;
	colorDisplay.textContent = pickedColor;
	//remove the Correct or Try again message
	messageDisplay.textContent="";
		//Include New Color when the pick is wrong
		resetButton.textContent = "New Colors";
//change colors of squares
for(var i = 0; i<squares.length; i++) {
	if(colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	else {
		squares[i].style.display = "none";
	}
}
h1.style.backgroundColor = "#1893c2";
}


resetButton.addEventListener("click", function() {
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++) {
	//add inital colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clcked quare
		var clickedColor = this.style.backgroundColor;

		//compare color with pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else { 
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function changeColor(color) {
	//loop through all squares
	for(var i=0; i<squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
}

}

function pickColor() {

	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = [];
	//add num random colors in array
	for(var i = 0; i<num; i++) {
	//get random color and push in the array

	arr.push(randomColor());
}
	//return array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 to 255
	var red = Math.floor(Math.random() *  256);
	// pick a "green"
	var green = Math.floor(Math.random() *  256);
	//pick a "blue"
	var blue = Math.floor(Math.random() *  256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}