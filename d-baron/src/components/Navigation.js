import React from 'react'

function Navigation({ windowLocations, currentWindow, setCurrentWindow }) {

    return (
        <div className="nav-div">
            <ul className="nav nav-tabs">
                {windowLocations.map((window) => (
                    <li
                        className={`mx-1 nav-item`}
                        key={window.name}
                    >
                        <a className={`nav-link ${currentWindow.name === window.name ? 'active' : ''}`}
                            onClick={() => setCurrentWindow(window)}
                            href="#"
                            title={window.description}
                        >
                            {window.name}
                        </a>
                    </li>
                ))}
            </ul>


        </div>



    )
}

export default Navigation