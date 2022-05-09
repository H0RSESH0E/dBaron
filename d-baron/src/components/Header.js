import React from 'react'
import Navigation from './Navigation.js';

function Header({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <header className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-between align-items-end">
                        <h4>David Baron ~ Full Stack Web Developer</h4>
                        <Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
                </div>
            </div>
        </header>

    )
}

export default Header