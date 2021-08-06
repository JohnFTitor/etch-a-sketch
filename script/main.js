const container = document.querySelector("#container");


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
    // console.log(pixels);
    
    pixels.forEach(drawRGB);
}

function clear(){
    pixels.forEach(function (pixel){
        pixel.style.backgroundColor = "white";
        container.removeChild(pixel);
    })
}

function drawBlack(pixel) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
    })
}

function drawRGB(pixel){
    let h = Math.floor(Math.random()*360);
    let s = Math.floor(Math.random()*100);
    let l = 70;
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        if (pixel.style.backgroundColor != "white") {
            pixel.addEventListener("mouseover", () => {
                if(l != 0){
                    l -= 2;
                }
                pixel.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
            })
        }
    })    
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
        drawRGB(pixel);
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



