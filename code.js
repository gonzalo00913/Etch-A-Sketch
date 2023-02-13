const size16Button = document.getElementById("size-16");
const size32Button = document.getElementById("size-32");
const size64Button = document.getElementById("size-64");

size16Button.addEventListener("click", function() {
  createGrid(16);
});

size32Button.addEventListener("click", function() {
  createGrid(32);
});

size64Button.addEventListener("click", function() {
  createGrid(64);
});

function createGrid(size) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = "black";
    });
    container.appendChild(square);
  }
  

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(16);
