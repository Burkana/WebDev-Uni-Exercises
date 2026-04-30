 import {useState} from "react";
function Player(props){
const [isEditing, setIsEditing] = useState(false)
const [playerName, setName] = useState(props.name)

function handleEdit(){
    setIsEditing((edit) => !edit)
}


function handleName(event){
     setName(event.target.value)
}

let editedName = <span className="player-name">{playerName}</span>
if(isEditing){  
    editedName = (
    <input type="text"
    required
    value={playerName}
    onChange={handleName}/>
)
}
    return(
           
            <li>
              <span className="player">  
              {editedName}
              <span className="player-symbol">{props.symbol}</span> 
              </span>
              <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
            </li>
       
    )
}

export default Player;
