//Sets important constants and variables

const container = document.getElementById("container");
let cells = document.getElementsByClassName("cell");

//Creates default grid on window load

window.onload = function() {
    makeRows(16, 16);
    paint();
}

//Allows user to paint on grid (calls cellBlack())

function paint() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellBlack);
    });
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
    if (rows <= 64 && cols <= 64) {
        blankGrid();
        clearGrid();
        makeRows(rows, cols);
        paint();
    } else if (rows > 64 || cols > 64) {
        alert("Please enter a number that is < = 64");
    } else if (rows === null || cols === null) {
        alert("No input detected :(")
    } else {
        alert("No input detected :(")
    }
}

//Removes all divs.  This function is run before creating a new custom grid, 
//otherwise the new grid is placed on top of the old one and this causes all 
//kinds of issues

function blankGrid() {
   let clearUp = container.lastElementChild;
   while (clearUp) {
       container.removeChild(clearUp);
       clearUp = container.lastElementChild;
   }
}


//Sets brush color to red

function colorRed() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellRed);
        cell.removeEventListener('mouseover', cellBlack)
        cell.removeEventListener('mouseover', cellBlue)
        cell.removeEventListener('mouseover', cellGreen)
        cell.removeEventListener('mouseover', cellRandom)
    });
};

function cellRed() {
    this.style.backgroundColor = "red";
    this.style.opacity = "1";
};


//Sets brush color to black

function colorBlack() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellBlack)
        cell.removeEventListener('mouseover', cellRed)
        cell.removeEventListener('mouseover', cellBlue);
        cell.removeEventListener('mouseover', cellGreen)
        cell.removeEventListener('mouseover', cellRandom)
    });
};


function cellBlack() {
    this.style.backgroundColor = "black";
    this.style.opacity = "1";
};


//Sets brush color to blue

function colorBlue() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellBlue);
        cell.removeEventListener('mouseover', cellRed)
        cell.removeEventListener('mouseover', cellBlack)
        cell.removeEventListener('mouseover', cellGreen)
        cell.removeEventListener('mouseover', cellRandom)
    });
};

function cellBlue() {
    this.style.backgroundColor = "blue";
    this.style.opacity = "1";
}


//Sets brush color to green

function colorGreen() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellGreen);
        cell.removeEventListener('mouseover', cellRed)
        cell.removeEventListener('mouseover', cellBlack)
        cell.removeEventListener('mouseover', cellBlue)
        cell.removeEventListener('mouseover', cellRandom)

    });
}

function cellGreen() {
    this.style.backgroundColor = "green";
    this.style.opacity = "1";
}


//Sets brush color to random for each cell

function selectRandom() {
    let letters = "ABCDEF0123456789";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function colorRandom() {
    Array.from(cells).forEach(function (cell) {
        cell.addEventListener('mouseover', cellRandom);
        cell.removeEventListener('mouseover', cellRed)
        cell.removeEventListener('mouseover', cellBlack)
        cell.removeEventListener('mouseover', cellBlue)
        cell.removeEventListener('mouseover', cellGreen)
    });
}

function cellRandom() {
    this.style.backgroundColor = selectRandom();
    this.style.opacity = "1";
}