import { useState } from "react";
const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
]
function GameBoard(){

   const [gameBoard, setGameBoard] = useState(initialGameBoard)

   function handleClick(rowIndex, cellIndex){
    setGameBoard((prevGameBoard) => {
        prevGameBoard[rowIndex][cellIndex] = "X"
        return prevGameBoard
    });
       
   }

return(
    <ol id="game-board">{
        gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => <li key={cellIndex}><button onClick={() => handleClick(rowIndex, cellIndex)}>{cell}</button></li>)}
            </ol>
        </li>)}
    </ol>
)
}
export default GameBoard;