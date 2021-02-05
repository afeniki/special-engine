var colors = ColorsgenerateRandom(6);
var col =ColorsgenerateRandom(3)


var sq = document.querySelectorAll(".sq");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var pickedColor = pickColor();
var pickedCol = pickCol();


easyButton.addEventListener("click", function(){
	easyButton.classList.add("highlight");
	hardButton.classList.remove("highlight");
	reset.classList.remove("highlight");

	col =ColorsgenerateRandom(3)
	pickedCol = pickCol();
	for(var i=0; i<sq.length; i++){
		if(col[i]){
			
			sq[i].style.backgroundColor=col[i];
			colorDisplay.textContent = pickedColor[i];
		}else{
			sq[i].style.display = "none";
		}
		h1.style.backgroundColor = "red";
	}

});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("highlight");
	hardButton.classList.add("highlight");
	reset.classList.remove("highlight");

	colors = ColorsgenerateRandom(6);
	pickedColor = pickColor();

	for(var i=0; i<sq.length; i++){
		sq[i].style.backgroundColor = colors[i];
		sq[i].style.display = "block";
		
	}
})

reset.addEventListener("click", function(){
	//create new sets of colors
	colors = ColorsgenerateRandom(6);
	//Random color to be displayed at h1
	pickedColor = pickColor()
	//change color displayed on  h1 to match picked color
	colorDisplay.textContent=pickColor();
   
	//change colors of the squares
	for(var i=0; i<sq.length; i++){

		sq[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "red";
})

colorDisplay.textContent = pickedColor;


for(var i = 0; i<sq.length; i++){
	// Add initial Colors to Squares
	sq[i].style.backgroundColor = colors[i];


	sq[i].addEventListener("click", function(){
		// get the color of clicked square
		var clickedColor = (this.style.backgroundColor);
		// compare thecolor to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
			change();
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}

	
		else{
			this.style.backgroundColor = "#232323";
			
		}
	});
}


   // function to change the textcontent of reset button on click
	function change(){
		if(reset.textContent = "Play Again?"){
			reset.addEventListener("click", function(){
				reset.textContent = ("New Colors");
				messageDisplay.remove("Correct!");
			})
		}
	}


function changeColors(color){
	// Loop through all squares
	for(var i=0; i<sq.length; i++){
	// Change each color to match given color
	sq[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function pickCol(){
	var random = Math.floor(Math.random() * col.length);
	return col[random];
}



function ColorsgenerateRandom(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i=0; i<num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	// pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	// pick a bluess from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}


