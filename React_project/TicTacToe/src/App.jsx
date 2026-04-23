import './App.css'
import Player from './components/PlayerList.jsx'

function App() {

  return (
    <>
     
      <main>
         <div id="game-container"> 
          <ol id="players">
         <Player name="Player 1" symbol="X"></Player>
         <Player name="Player 2" symbol="O"></Player>
         </ol>
          GameBoard
         </div>
         <h2>LOG</h2>
      </main>
      </>
  )
}

export default App
