// Global variables
var currentPlayer = "X";
var cells = document.getElementsByClassName("cell");

// Function to handle cell clicks
function cellClicked(cellId) {
    var cell = document.getElementById(cellId);
    if (cell.innerHTML === "") {
        cell.innerHTML = currentPlayer;
        cell.style.pointerEvents = "none"; // Disable clicking on the cell
        checkWin();
        togglePlayer();
    }
}

// Function to toggle the current player
function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check for a win
function checkWin() {
    var winningCombinations = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        var a = combination[0];
        var b = combination[1];
        var c = combination[2];

        if (
            cells[a].innerHTML === currentPlayer &&
            cells[b].innerHTML === currentPlayer &&
           cells[c].innerHTML === currentPlayer
        ) {
            // Highlight the winning cells
            cells[a].style.backgroundColor = "#42f55d";
            cells[b].style.backgroundColor = "#42f55d";
            cells[c].style.backgroundColor = "#42f55d";

            // Disable clicking on the cells
            for (var j = 0; j < cells.length; j++) {
                cells[j].style.pointerEvents = "none";
            }

            // Display the winner
            alert("Player " + currentPlayer + " wins!");
            return;
        }
    }

    // Check for a draw
    var draw = true;
    for (var k = 0; k < cells.length; k++) {
        if (cells[k].innerHTML === "") {
            draw = false;
            break;
        }
    }

    // If all cells are filled and no winner, it's a draw
    if (draw) {
        alert("It's a draw!");
    }
}

// Add click event listeners to cells
for (var l = 0; l < cells.length; l++) {
    cells[l].addEventListener("click", function(event) {
        var cellId = event.target.id;
        cellClicked(cellId);
    });
}