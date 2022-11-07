let masterDiv = document.getElementById("container");
const squares = document.createElement('div');
squares.style.width = "16px";
squares.style.height = "16px";
squares.style.border = "solid";
squares.style.backgroundColor = "white";
squares.style.borderWidth = "1px";




for (let j=0; j<16; j++){
for (let i=0; i<16; i++){
masterDiv.appendChild(squares.cloneNode(true))
}
}

masterDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple"
});







