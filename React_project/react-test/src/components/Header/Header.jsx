import Core from "../../assets/react-core-concepts.png";
import "./Header.css";
const concept = ["Fundementals", "Core", "Essentials"];
function RandIndex(num){
  return Math.floor(Math.random() * (num + 1));
}


function Header(){
  return(
     <header>
      <img src={Core} alt="Atom"></img>
      <h1>React Essentials</h1>
      <p> {concept[RandIndex(2)]} React concepts</p>
    </header>
  );
}

export default Header;