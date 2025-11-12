const changePlayer = (() => {
    let player = ""

    const changeSymbol = () => {
        if (player === "" || player === "O") {
            player = "X"
        } else if (player === "X") {
            player = "O"
        }
    }

    const updateSquare = () => {
        changeSymbol();
        return player
    }
    
    return {updateSquare}
})();


const gameBoard = (() => {
    let positions = ["", "", "", "", "", "", "", "", ""]
    const board = document.getElementById("game-board")
    
    function createGameBoard(){
        positions.forEach((tile, index) => {
        let square = document.createElement("div")
        square.setAttribute('id',`${index}`)
        square.setAttribute('class', 'square')
        square.addEventListener("click", function (){
            currentPlayer = changePlayer.updateSquare();
            square.textContent = currentPlayer
        })

        board.appendChild(square)
    })
    }
    return {positions, createGameBoard}
})();

gameBoard.createGameBoard();

// I now need a function to allow me to switch between X player and O player, as well as track storing their moves into the array

