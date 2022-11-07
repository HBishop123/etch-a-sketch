let masterDiv = document.getElementById("container");
const squares = document.createElement('div');
squares.style.width = "16px";
squares.style.height = "16px";
squares.style.border = "solid";

for (let j=0; j<16; j++){
for (let i=0; i<16; i++){
masterDiv.appendChild(squares.cloneNode(true))
}
}








// for (let i=0; i<=16; i++){
    
// let squares = document.createElement("div");

// for (let j=0; j<=16; j++){
// document.getElementById("container").appendChild(squares);
// }
// }


