const container = document.querySelector("#container");


function generateGrid(){
    let squares = 16;
    
    container.style.setProperty("grid-template-columns", "repeat(" + squares + ", 1fr)");
    container.style.setProperty("grid-template-rows", "repeat(" + squares + ", 1fr)");
    
    for (let i = 1; i <= squares * squares; i++) {
        const div = document.createElement("div");
        div.classList.add("pixels");
        div.style.border = "1px solid rgba(0,0,0,0.5)";
    
        container.appendChild(div);
    }
    
    const pixels = document.querySelectorAll(".pixels");
    
    console.log(pixels);
    
    pixels.forEach(function(pixel){
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
    })
}    

