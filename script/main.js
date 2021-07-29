const container = document.getElementById("container");

let squares = 16;

container.style.setProperty("grid-template-columns", "repeat(" + squares + ", 1fr)");
container.style.setProperty("grid-template-rows", "repeat(" + squares + ", 1fr)");

for (let i = 1; i <= squares * squares; i++) {
    const div = document.createElement("div");
    div.classList.add("pixels");
    div.style.border = "1px solid black";

    container.appendChild(div);
}

