import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import TabButton from "./Components/TabButton";
import { useCallback, useState } from "react";
function App() {

  const [selectedTopic,setSelectedTopic]=useState()
  function handleSelect(selectedButton){
    console.log(`Button ${selectedButton} has been clicked`)
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
<Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((value,index)=><CoreConcept key={index} {...value} />)}
        
          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic==='components'} onSelect={handleSelect}>components</TabButton> 
              <TabButton isSelected={selectedTopic==='jsx'} onSelect={handleSelect}>jsx</TabButton> 
              <TabButton isSelected={selectedTopic==='props'} onSelect={handleSelect}>props</TabButton> 
              <TabButton isSelected={selectedTopic==='state'} onSelect={handleSelect}>state</TabButton> 
            </menu>
        </section>
      </main>
          {!selectedTopic ? <p>Please select a topic.</p> : null  }
        {selectedTopic? <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
                  {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
      </div>:null}
    </div>
  ); 
}

export default App;
