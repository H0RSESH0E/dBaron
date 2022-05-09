import React from 'react'
import Project from './Project.js';
import Contact from './Contact.js';
import About from './About.js';
import Resume from './Resume.js';

function Body({ windowLocations, currentWindow, setCurrentWindow }) {
    console.log('HEYOOO', currentWindow);
    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                    {currentWindow.name === 'About Me' && <About />}
                    {currentWindow.name === 'Portfolio' && <Project />}
                    {currentWindow.name === 'Contact' && <Contact />}
                    {currentWindow.name === 'Resume' && <Resume />}
                </div>
            </div>
        </main>
    )
}
export default Body