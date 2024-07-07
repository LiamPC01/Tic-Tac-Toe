crossesTurn = true;
gameOver = false;
turnCounter = 0;

gameboard = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
]


while (!gameOver) {
    printBoard();
    gameLoop();
    if(checkWin()) {
        gameOver = true;
    }
    
}

function gameLoop() {
    if (crossesTurn) {
        console.log("Crosses turn. . .");
        crossLocation = prompt("CROSS: Enter a number between 1 - 9: ");
        if (gameboard[crossLocation - 1] == " ") {
            gameboard[crossLocation - 1] = "X";
            crossesTurn = false;
            turnCounter++;
        }
        else {
            console.log("TILE TAKEN");
        }
    }
    else if (!crossesTurn) {
        console.log("Naughts turn. . .");
        naughtLocation = prompt("NAUGHT: Enter a number between 1 - 9: ");
        if (gameboard[naughtLocation - 1] == " ") {
            gameboard[naughtLocation - 1] = "0";
            crossesTurn = true;
            turnCounter++;
        }
        else {
            console.log("TILE TAKEN");
        }
    }
}

function printBoard() {
    for (let i = 0; i < gameboard.length; i += 3) {
        console.log(gameboard[i] + " | " + gameboard[i + 1] + " | " + gameboard[i + 2]);
        console.log(" "); // to stop identical console logs collapsing
    }
}


function checkWin() {
    if (gameboard[0] == gameboard[1] && gameboard[1] == gameboard[2] && gameboard[0] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[3] == gameboard[4] && gameboard[4] == gameboard[5] && gameboard[3] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[6] == gameboard[7] && gameboard[7] == gameboard[8] && gameboard[6] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6] && gameboard[0] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[1] == gameboard[4] && gameboard[4] == gameboard[7] && gameboard[1] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[2] == gameboard[5] && gameboard[5] == gameboard[8] && gameboard[2] != ' ') {
        console.log("Winner");
    }
    else if (gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8] && gameboard[0] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6] && gameboard[2] != ' ') {
        console.log("Winner");
        return true;
    }
    else if (turnCounter >= 9) {
        console.log("Draw");
    }
    else {
        return false;
    }
}