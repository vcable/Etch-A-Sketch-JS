//Sets important constants and variables

const container = document.getElementById("container");
let cells = document.getElementsByClassName("cell");


//Creates a default grid sized 16x16

defaultGrid();
function defaultGrid() {
    makeRows(16, 16);
    paint();
};

//Allows user to paint on grid (calls cellBlack())

function paint() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellBlack);
    });
};

//Sets the cell background to black

function cellBlack() {
    this.style.backgroundColor = "black";
    this.style.opacity = "1";
};


//Takes (rows, columns) input and makes a grid
//This uses CSS Grid

function makeRows(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (r = 0; r < (rows * cols); r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "cell";

    };
};


//Clears grid 

function clearGrid() {
    Array.from(cells).forEach(function (cell) {
        cell.style.backgroundColor = "white";
    });
}

//Gets user input for custom number of cells

function getInput() {
    let rows = prompt("How many rows would you like?");
    let cols = prompt("How many columns would you like?");
    if (rows < 100 && cols < 100) {
        makeRows(rows, cols);
    } else if (rows > 100 || cols > 100) {
        alert("Please enter a number less than 100");
    } else {
        alert("No input detected :(")

    }
}