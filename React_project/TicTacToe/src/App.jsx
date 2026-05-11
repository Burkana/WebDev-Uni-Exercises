import './App.css'
import Player from './components/PlayerList.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'


function App() {
const [activePlayer, setActivePlayer] = useState("X")
const [gameTurn, setGameTurn] = useState([]) 

function handleSelectedSymbol(rowIndex, cellIndex){
setActivePlayer((current) => current === "X" ? "O" : "X")
setGameTurn((prevturn) => {

  let currentPlayer = "X"
  if(prevturn.length > 0 && prevturn[0].player === "X") {
    currentPlayer = "O"
  }
    
  const updateTurn = [{square:{row: rowIndex, column: cellIndex} , player: currentPlayer}, ...prevturn]
  return updateTurn
  
 
})



}
 
  return (
    <>
     
      <main>
         <div id="game-container"> 
          <ol id="players" className="highlight-player">
         <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
         <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
         </ol>
          <GameBoard onSelectedSymbol={handleSelectedSymbol} gameBoard={gameTurn}/>
         </div>
        <Log turns={gameTurn} />
      </main>
      </>
  )
}
 
export default App
