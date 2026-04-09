import Header from "./components/Header/Header.jsx";
import Buttons from "./components/Buttons.jsx";
import { Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";



function App() {


  return ( 
    // or <></> when using newer version of react
    <Fragment> 
      <Header />
      <main>
         <CoreConcepts />
         <Buttons />
      </main>
    </Fragment>
  );
}

export default App;
