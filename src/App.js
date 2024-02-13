import { useState } from 'react';
import './App.css';
import SceneOne from './scenes/SceneOne';
import SceneTwo from './scenes/SceneTwo';
import SceneThree from './scenes/SceneThree';
import SceneFour from './scenes/SceneFour';
import SceneFive from './scenes/SceneFive';

function App() {
  const [displayScene, setScene] = useState(1);
  const currentScene = displayScene;
  return (
    <div className="App">
      {currentScene===1 ? 
      <SceneOne setDisplay={setScene} currentScene={displayScene}/>
      : currentScene===2 ? 
      <SceneTwo setDisplay={setScene} currentScene={displayScene}/>
      : currentScene===3 ?
      <SceneThree setDisplay={setScene} currentScene={displayScene}/>
      : currentScene===4 ?
      <SceneFour setDisplay={setScene} currentScene={displayScene}/>
      : currentScene===5 ?
      <SceneFive setDisplay={setScene} currentScene={displayScene}/>
      : null}
    </div>
  );
}

export default App;

// App Plan
// Scene 1 - Open a closed love envelope. Envelope will go from closed state to open state with a transition to the next scene with cloud curtains. There will be a button that says open. And title will be Letter to Lucinda.
// Scene 2 - A letter with typewriter animation for my babe
// Scene 3 - A collage for all of our photos and memories
// Scene 4 - Will you be my valentine?
// Scene 5 - kiss kiss