// Create squares and add eventhandlers on mouseover to fill background
const container = document.querySelector('.container');
let gridSize = 256;

function fillBackground(e) {
    e.target.classList.add('square-filled');
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', fillBackground);
        container.appendChild(div);
    }
}

createGrid();

// Enable clear button to reset the background color of the squares and prompts user for number of grids
function ClearBackground() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.classList.remove('square-filled');
    });
}

function getUserGrid() {
    do {
        gridSize = Number(window.prompt("How large do you want your grid? Min: 2, Max: 100", ""));
    } while (gridSize < 2 || gridSize > 100);

    removeGrid();

    changeGridSize(gridSize);

    gridSize *= gridSize;

    createGrid();
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    ClearBackground();
    getUserGrid();
});

let containerRules = document.styleSheets[0].cssRules[2];

function changeGridSize(gridSize) {
    containerRules.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    containerRules.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}