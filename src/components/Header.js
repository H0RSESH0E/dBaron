import React from 'react'
import Navigation from './Navigation.js';

function Header({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <header className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-between">
                    <h3>David Baron</h3> <h3>Full Stack Web Developer</h3>
                        <Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
                </div>
            </div>
        </header>

    )
}

export default Header