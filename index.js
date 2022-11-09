//constants and styles for the grid

let masterDiv = document.getElementById("container");
const squares = document.createElement('div');

//constants for the slider

const slider = document.getElementById("myRange");
const sliderAmount = document.getElementById("gridSize")

// main container

masterDiv.style.display = "grid";
masterDiv.style.border = "solid"
let masterHeight = 600;
let masterWidth = 700;
masterDiv.style.height = masterHeight + 'px';
masterDiv.style.width = masterWidth + 'px';
masterDiv.style.minHeight = masterHeight + 'px';
masterDiv.style.minWidth = masterWidth + 'px';

//squares

squares.style.border = "solid grey";
squares.style.backgroundColor = "white";
squares.style.borderWidth = "0.5px";

//squares cont
let currentValue = slider.value;
let squareHeight = masterHeight / currentValue
let squareWidth = masterWidth / currentValue
squares.style.height = squareHeight;
squares.style.height = squareWidth;



//creating grid based off slider value

for (let j=0; j<slider.value; j++){
for (let i=0; i<slider.value; i++){
masterDiv.appendChild(squares.cloneNode(true))
}
}

//changes grid depending on number of squares
masterDiv.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;
masterDiv.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`;



//event listener for hover over grid = change colour to chosen colour
let colourChoice = document.getElementById("colourpicker");
let rainbowChoice = document.getElementById("rainbow");
let eraserChoice = document.getElementById("eraser");


colourChoice.addEventListener('click', function(){
masterDiv.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = colourChoice.value
})
});

//change to eraser
eraserChoice.addEventListener('click', function(){
masterDiv.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = "white"
})
});

// change colour to random colour
let rainbowColours = ["#ff0000", "#0000ff", "#ffff00", "#008000", "#ffa500", "#4b0082", "#8f00ff"];
rainbowChoice.addEventListener('click', function(){
masterDiv.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = rainbowColours[Math.floor(Math.random() * rainbowColours.length)];
})
});

//range for the slider
document.addEventListener("DOMContentLoaded", function() {

    sliderAmount.innerHTML = slider.value + "x" + slider.value;
slider.oninput = function() {
    sliderAmount.innerHTML = this.value + "x" + this.value
}
})

//new grid when slider is moved
slider.addEventListener("change", () => {
masterDiv.innerHTML = ""
let currentValue = slider.value;

masterDiv.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;
masterDiv.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`;

for (let j=0; j<currentValue; j++){
for (let i=0; i<currentValue; i++){
masterDiv.appendChild(squares.cloneNode(true))
}}

})