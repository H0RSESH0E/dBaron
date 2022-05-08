import React from 'react'
import Navigation from './Navigation.js';

function Header({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <h4>David Baron ~ Full Stack Web Developer</h4>
            <Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
        </div>
)}

export default Header