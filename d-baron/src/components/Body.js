import React from 'react'
import Project from './Project.js';
import Contact from './Contact.js';
import About from './About.js';
import Resume from './Resume.js';

function Body({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <div>
            {currentWindow === 'About Me' && <About />}
            {currentWindow === 'Portfolio' && <Project />}
            {currentWindow === 'Contact' && <Contact />}
            {currentWindow === 'Resume' && <Resume />}
        </div>
    )
}
export default Body