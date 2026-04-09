import {CORE_CONCEPTS, EXAMPLES} from "/src/data.js";
import Tab from "./TabB.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";



function Buttons (props){
     const [dynamicCon, setDynamicCon]= useState();
    
      function handelClick(select){
            setDynamicCon(select);
    
        }
return(
 <Section id="examples" title="Examples">
  <Tabs buttonConteiner = "menu" buttons={
    <> <Tab isSelected={dynamicCon === CORE_CONCEPTS[0].title} onSelect={() => handelClick(CORE_CONCEPTS[0].title)}>{CORE_CONCEPTS[0].title}</Tab>
         <Tab isSelected={dynamicCon === CORE_CONCEPTS[1].title} onSelect={() => handelClick(CORE_CONCEPTS[1].title)}>{CORE_CONCEPTS[1].title}</Tab>
         <Tab isSelected={dynamicCon === CORE_CONCEPTS[2].title} onSelect={() => handelClick(CORE_CONCEPTS[2].title)}>{CORE_CONCEPTS[2].title}</Tab>
         <Tab isSelected={dynamicCon === CORE_CONCEPTS[3].title} onSelect={() => handelClick(CORE_CONCEPTS[3].title)}>{CORE_CONCEPTS[3].title}</Tab>  </> 
        }>
  </Tabs>
         {!dynamicCon ?<p>Please select a topic</p> : (
                  <div id="tab-content">
                    <h2>{EXAMPLES[dynamicCon].title}</h2>         
                    <p>{EXAMPLES[dynamicCon].description}</p>
                     <code>{EXAMPLES[dynamicCon].code}</code>
                  </div>)}
                 </Section>
);


}
export default Buttons;


