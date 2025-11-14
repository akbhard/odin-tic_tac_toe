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
            if (square.textContent != ""){
                // alert("That square has been populated you idiot")
                changePlayer.updateSquare();
            } else {
                square.textContent = currentPlayer;
                positions[index] = currentPlayer;
                console.log(positions)
            }
        })

        board.appendChild(square)
    })
    }
    return {positions, createGameBoard}
})();

gameBoard.createGameBoard();
