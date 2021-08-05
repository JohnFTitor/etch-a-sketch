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
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    })    
}

function randomRGB(){
    return Math.floor(Math.random() * 250);
}



generateGrid(16);

const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", () => {
    clear();
    while (true) {
        let squares = prompt("Enter a number of squares per side between 0 and 100", "16");
        squares = parseInt(squares, 10)
        if (squares != NaN && squares > 0 && squares <= 100) {
            generateGrid(squares);
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


