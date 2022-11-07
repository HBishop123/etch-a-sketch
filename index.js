let masterDiv = document.getElementById("container");
const squares = document.createElement('div');
squares.style.width = "16px";
squares.style.height = "16px";
squares.style.border = "solid";
squares.style.backgroundColor = "white";
squares.style.borderWidth = "1px";



//creating 16x16 grid
for (let j=0; j<16; j++){
for (let i=0; i<16; i++){
masterDiv.appendChild(squares.cloneNode(true))
}
}

//event listener for hover over grid = change colour
masterDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple"
});







//range for the slider
document.addEventListener("DOMContentLoaded", function() {
const slider = document.getElementById("myRange");
const sliderAmount = document.getElementById("gridSize")
sliderAmount.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function() {
    sliderAmount.innerHTML = this.value + "x" + this.value
}
})

