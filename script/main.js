const container = document.querySelector("#container");
let currentPen = drawBlack;

function generateGrid(squares) {

    container.style.setProperty("grid-template-columns", "repeat(" + squares + ", 1fr)");
    container.style.setProperty("grid-template-rows", "repeat(" + squares + ", 1fr)");
    
    for (let i = 1; i <= squares * squares; i++) {
        const div = document.createElement("div");
        div.classList.add("pixels");
        div.style.border = "1px solid rgba(0,0,0,0.5)";
        
        container.appendChild(div);
    }
    
    window.pixels = document.querySelectorAll(".pixels");

    pixels.forEach(currentPen);
}

function clear(){
    pixels.forEach(function (pixel){
        container.removeChild(pixel);
    })
}

function drawBlack(pixel) {
    pixel.removeEventListener("mouseover", hslEvent);
    pixel.addEventListener("mouseover", blackEvent);
    currentPen = drawBlack;
}

function blackEvent(){
    this.style.backgroundColor = "black";
} 

function drawHSL(pixel){
    pixel.removeEventListener("mouseover", blackEvent);
    pixel.addEventListener("mouseover", hslEvent);
    currentPen = drawHSL;    
}

function hslEvent(){
    let h = Math.floor(Math.random()*360);
    let s = Math.floor(Math.random()*100);
    let l = 70;
    this.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
    if (this.style.backgroundColor != "white") {
        this.removeEventListener("mouseover", hslEvent);
        this.addEventListener("mouseover", () => {
            if(l != 0){
                l -= 8;
            }
            this.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        })
    } 
}


generateGrid(16);


const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", () => {
    clear();
    while (true) {
        let squares = prompt("Enter a number of squares per side between 1 and 100", "16");
        squares = parseInt(squares, 10)
        if (squares != NaN && squares > 0 && squares <= 100) {
            generateGrid(squares);
            squaresLabel.textContent = "Squares per side: " + squares;
            generateSlider.value = squares;
            break;
        }
    }
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    pixels.forEach(function (pixel){
        pixel.style.backgroundColor = "white";
    })
})

const generateSlider = document.querySelector("#generateSlider");
const squaresLabel = document.querySelector("#squares");
squaresLabel.textContent = "Squares per side: " + generateSlider.value;

generateSlider.oninput = function () {
    squaresLabel.textContent = "Squares per side: " + this.value;
}

generateSlider.onchange = function () {
    clear();
    generateGrid(this.value);
}

const blackPen = document.querySelector("#drawBlack");
blackPen.addEventListener("click", () => {
    pixels.forEach(drawBlack);
})

const multicolorPen = document.querySelector("#drawHSL");
multicolorPen.addEventListener("click", () => {
    pixels.forEach(drawHSL);
})




