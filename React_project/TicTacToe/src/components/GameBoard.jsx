import { useState } from "react";
import '../App.jsx';
const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
]
function GameBoard(props){

   const [gameBoard, setGameBoard] = useState(initialGameBoard)


   function handleClick(rowIndex, cellIndex){
    setGameBoard((prevGameBoard) => {
        const updateGameBoard = [...prevGameBoard.map((array) => [...array])];
        updateGameBoard[rowIndex][cellIndex] = props.activePlayer;
        return updateGameBoard;
    });
       props.onSelectedSymbol();
   }

return(
    <ol id="game-board">{
        gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => <li key={cellIndex}>
                <button onClick={() => handleClick(rowIndex, cellIndex)}>{cell}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
)
}
export default GameBoard;