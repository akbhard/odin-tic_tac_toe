const gameBoard = (() => {
    let positions = ["", "", "", "", "", "", "", "", ""]
    const board = document.getElementById("game-board")
    
    function createGameBoard(){
        positions.forEach((tile, index) => {
        let square = document.createElement("div")
        square.setAttribute('id',`${index}`)
        square.setAttribute('class', 'square')
        board.appendChild(square)
    })
    }
    return {positions, createGameBoard}
})();

gameBoard.createGameBoard();