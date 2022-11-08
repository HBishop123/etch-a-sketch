//constants and styles for the grid
let masterDiv = document.getElementById("container");
const squares = document.createElement('div');

// main container
masterDiv.style.display = "grid";
masterDiv.style.border = "solid"
let masterHeight = 700;
let masterWidth = 700;
masterDiv.style.height = masterHeight + 'px';
masterDiv.style.width = masterWidth + 'px';


//squares
squares.style.border = "solid black";
squares.style.backgroundColor = "white";
squares.style.borderWidth = "1px";




//constants for the slider
const slider = document.getElementById("myRange");
const sliderAmount = document.getElementById("gridSize")



//creating grid based off slider value
for (let j=0; j<slider.value; j++){
for (let i=0; i<slider.value; i++){
masterDiv.appendChild(squares.cloneNode(true))
}
}

//event listener for hover over grid = change colour
masterDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple"
});


//range for the slider
document.addEventListener("DOMContentLoaded", function() {

    sliderAmount.innerHTML = slider.value + "x" + slider.value;
slider.oninput = function() {
    sliderAmount.innerHTML = this.value + "x" + this.value
}
})


let currentValue = slider.value;

//squares cont

let squareHeight = masterHeight / currentValue
let squareWidth = masterWidth / currentValue
squares.style.height = squareHeight;
squares.style.height = squareWidth;


masterDiv.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;
masterDiv.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`;
