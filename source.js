gameManager = {
    crossesTurn: true,
    gameOver: false,
    turnCounter: 0,
}

gameboard = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
]

createGrid();

function createGrid() {
    const Gameboard = document.querySelector("#gameboard");
    

    for (let i = 0; i < 9; i++) {
        let tilei = document.querySelector(`#tile${i}`);
        tilei.addEventListener("click", () => playerInput(tilei.id))
    }
}

function playerInput(tileid) {
    tileClicked = document.querySelector("#" + tileid);
    if (!gameManager.gameOver) {
        if (tileClicked.textContent == "") {
            if (gameManager.crossesTurn) {
                tileClicked.textContent = "X";
                gameboard[tileid[4]] = "X";
                gameManager.crossesTurn = false;
                gameManager.turnCounter++;
            } else {
                tileClicked.textContent = "0";
                gameboard[tileid[4]] = "0";
                gameManager.crossesTurn = true;
                gameManager.turnCounter++;
            }
            checkWin();
            updateGameCommentator();
            if (gameManager.gameOver) {
                endGame();
            }

        }
    }

}

function updateGameCommentator() {
    let gameCommentator = document.querySelector("#gameCommentator");
    if (gameManager.crossesTurn) {
        gameCommentator.textContent = "X Turn";
    } else {
        gameCommentator.textContent = "0 Turn";
    }
    if (gameManager.gameOver && gameManager.crossesTurn && gameManager.turnCounter < 9) {
        gameCommentator.textContent = "0 WINS!";
    } else if (gameManager.gameOver && !gameManager.crossesTurn && gameManager.turnCounter < 9) {
        gameCommentator.textContent = "X WINS!";
    }
    else if(gameManager.turnCounter >= 9) {
        gameCommentator.textContent = "DRAW";
    }
}

function checkWin() {
    if (gameboard[0] == gameboard[1] && gameboard[1] == gameboard[2] && gameboard[0] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[3] == gameboard[4] && gameboard[4] == gameboard[5] && gameboard[3] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[6] == gameboard[7] && gameboard[7] == gameboard[8] && gameboard[6] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6] && gameboard[0] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[1] == gameboard[4] && gameboard[4] == gameboard[7] && gameboard[1] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[2] == gameboard[5] && gameboard[5] == gameboard[8] && gameboard[2] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8] && gameboard[0] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6] && gameboard[2] != ' ') {
        console.log("Winner");
        gameManager.gameOver = true;
    }
    else if (gameManager.turnCounter >= 9) {
        console.log("Draw");
        gameManager.gameOver = true;
    }

}

function endGame() {
    let gameoverContainer = document.getElementById("gameoverContainer");
    let play = document.getElementById("playBtn");
    gameoverContainer.style.display = "flex";
    play.addEventListener("click", () => {
        restartGame();
        gameoverContainer.style.display = "none";

    })
}

function restartGame() {
    console.log("restart");
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.textContent = "";
    });
    gameManager.crossesTurn = true;
    gameManager.gameOver = false;
    gameManager.turnCounter = 0;
    for (let i = 0; i < gameboard.length; i++) {
        gameboard[i] = " ";
    }
    updateGameCommentator();
}