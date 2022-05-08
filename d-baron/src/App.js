import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import state from './assets/state.js';


function App() {

  const [windowLocations] = useState(state);
  console.table(windowLocations[0]);

  const [currentWindow, setCurrentWindow] = useState(windowLocations[0]);

  return (
    <div className="first-row flex-row d-flex justify-content-center  App">
      <div className="first-column d-flex flex-column col-12 justify-content-between">
        <div className="header-div row d-flex p-2">
          <Header windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow}/>
        </div>
        <div className="body-div d-flex">
          <Body windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
        </div>
        <div className="footer-div d-flex p-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
