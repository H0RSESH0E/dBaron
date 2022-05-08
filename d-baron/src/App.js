import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="first-row flex-row d-flex justify-content-center  App">
      <div className="first-column d-flex flex-column col-12 justify-content-between">
        <div className="header-div d-flex p-2">
          <Header/>
        </div>
        <div className="body-div d-flex">
          <Body/>
        </div>
        <div className="footer-div d-flex p-2">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
