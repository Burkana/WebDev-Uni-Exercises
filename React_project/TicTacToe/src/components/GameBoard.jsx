import { useState } from "react";
import '../App.jsx';
const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
]
function GameBoard(props){

  // const [gameBoard, setGameBoard] = useState(initialGameBoard)
   //function handleClick(rowIndex, cellIndex){
    //setGameBoard((prevGameBoard) => {
      //  const updateGameBoard = [...prevGameBoard.map((array) => [...array])];
       // updateGameBoard[rowIndex][cellIndex] = props.activePlayer;
       // return updateGameBoard;
   // });
     //  props.onSelectedSymbol();
  // }

   let gameBoard = initialGameBoard
    for(const i of props.gameBoard){
        const {square, player} = i
        const {row, column} = square
        gameBoard[row][column] = player

        }
    


return(
    <ol id="game-board">{
        gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => 
                <li key={cellIndex}>
                <button onClick={() => props.onSelectedSymbol(rowIndex, cellIndex)} disabled={cell !== null}>{cell}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
)
}
export default GameBoard;