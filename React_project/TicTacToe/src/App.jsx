import './App.css'
import Player from './components/PlayerList.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'


function App() {
const [activePlayer, setActivePlayer] = useState("X")

function handleSelectedSymbol(){
setActivePlayer((current) => current === "X" ? "O" : "X")
}

  return (
    <>
     
      <main>
         <div id="game-container"> 
          <ol id="players" className="highlight-player">
         <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
         <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
         </ol>
          <GameBoard onSelectedSymbol={handleSelectedSymbol} activePlayer={activePlayer}/>
         </div>
        <Log />
      </main>
      </>
  )
}

export default App
