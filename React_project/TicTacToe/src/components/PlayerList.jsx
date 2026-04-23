function Player(props){

    return(
           
            <li>
              <span className="player-name">{props.name}</span>
              <span className="player-symbol">{props.symbol}</span> 
              <button>Edit</button>
              </li>
       
    )
}

export default Player 
