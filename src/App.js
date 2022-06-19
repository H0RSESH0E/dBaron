import { useState } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import {navBarArr} from './components/states.js';


function App() {
  const [windowLocations] = useState(navBarArr);

  const [currentWindow, setCurrentWindow] = useState(windowLocations[0]);
  document.title = `${currentWindow.name}`;
  return (
    <>
                <Header windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />

      <div className="container-xl">
        <div className="first-row row justify-content-center">
          <div className="col-12 d-flex flex-column justify-content-between">
            <Main windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
            <Footer />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
