import React from 'react'
import Navigation from './Navigation.js';

function Header({ windowLocations, currentWindow, setCurrentWindow }) {
    return (
        <div className="header-container">
            <header className="container">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="header-content">
                            <h3>David Baron</h3>
                            <h3>Full Stack Web Developer</h3>
                        </div>
                        <Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header