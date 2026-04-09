import Core from "./Core.jsx";
import {CORE_CONCEPTS} from "/src/data.js";
import Section from "./Section.jsx";


function CoreConcepts(props){
  return(
  <Section id="core-concepts" title="Core Concepts">
          <ul>
              {CORE_CONCEPTS.map((concept) => <Core key={concept.title} {...concept} />)}
          </ul>
        </Section>
  );
}

export default CoreConcepts;