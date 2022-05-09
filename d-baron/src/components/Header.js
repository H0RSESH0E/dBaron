import React from 'react'
import Navigation from './Navigation.js';

function Header({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <header className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-between">
                    <h4>David Baron</h4> <h4>Full Stack Web Developer</h4>
                        <Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
                </div>
            </div>
        </header>

    )
}

export default Header