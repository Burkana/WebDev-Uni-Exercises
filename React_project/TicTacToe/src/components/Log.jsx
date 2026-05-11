
function Log(props){
    return(
        <ol id="log">
          {props.turns.map((turn) => { return <li key={`${turn.square.row}-${turn.square.column}`}>{turn.player} selected {turn.square.row}, {turn.square.column} </li>})}
        </ol>
    )
}
export default Log;