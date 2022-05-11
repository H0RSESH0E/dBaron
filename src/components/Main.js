import React from 'react'
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import Resume from './Resume.js';

function Main({ windowLocations, currentWindow, setCurrentWindow }) {
    console.log('HEYOOO', currentWindow);
    return (
        <main className="main-container container d-flex flex-column justify-content-center">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                    {currentWindow.name === 'About Me' && <About />}
                    {currentWindow.name === 'Portfolio' && <Projects />}
                    {currentWindow.name === 'Contact' && <Contact />}
                    {currentWindow.name === 'Resume' && <Resume />}
                </div>
            </div>
        </main>
    )
}
export default Main