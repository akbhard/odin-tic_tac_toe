const gameBoard = (() => {
    let player = ""
    let positions = ["", "", "", "", "", "", "", "", ""]
    let isWinnerDeclared = false;
    const board = document.getElementById("game-board")

    const updateSquare = () => {
        if (player === "" || player === "O") {
            player = "X"
            return player
        } else if (player === "X") {
            player = "O"
            return player
        }
    }

    const checkWinner = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const winningMessage = document.getElementById("winning-message")

        for (let i=0; i < winConditions.length; i++) {
            let currentWinCondition = winConditions[i]
            if (gameBoard.positions[currentWinCondition[0]] === "") {
                continue;
            } 
            
            if (
                gameBoard.positions[currentWinCondition[0]]=== gameBoard.positions[currentWinCondition[1]] &&
                gameBoard.positions[currentWinCondition[1]] === gameBoard.positions[currentWinCondition[2]]){
                    winningMessage.textContent = `${gameBoard.positions[currentWinCondition[0]]} is the winner!`
                    isWinnerDeclared = true;
                    // console.log(`${gameBoard.positions[currentWinCondition[0]]} is the winner!`)
            break;
            }
        }
    }

    function createGameBoard(){
        positions.forEach((tile, index) => {
        let square = document.createElement("div")

        square.setAttribute('id',`${index}`)
        square.setAttribute('class', 'square')
        
        square.addEventListener("click", function (){
            currentPlayer = updateSquare();
            if (square.textContent != "" && isWinnerDeclared == false){
                // alert("That square has been populated you idiot")
                updateSquare();
            } else if (isWinnerDeclared == false) {
                square.textContent = currentPlayer;
                positions[index] = currentPlayer;
                checkWinner();
            } else {
                alert("Winner has been declared. Game over! Please reset the game!")
            }
        })

        board.appendChild(square)
    })
    }
    return {positions, createGameBoard}
})();

gameBoard.createGameBoard();

