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
    
    pixels.forEach(function (pixel) {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
    })
}

function clear(){
    pixels.forEach(function (pixel){
        pixel.style.backgroundColor = "white";
        container.removeChild(pixel);
    })
}

generateGrid(16);

const button = document.querySelector("#generate");
button.addEventListener("click", () => {
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

