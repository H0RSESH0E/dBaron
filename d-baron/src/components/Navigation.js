import React from 'react'

function Navigation({ windowLocations, currentWindow, setCurrentWindow }) {

    return (<ul className="nav nav-tabs">
            {windowLocations.map((window) => (
            <li
                className={`mx-1 nav-item`}
                key={window.name}
            >
                <a className={`nav-link ${currentWindow.name === window.name ? 'active' : ''}`}
                    onClick={() => setCurrentWindow(window)}
                >
                    {window.name}
                </a>
            </li>
        ))}
    </ul>


        
        )
}

        export default Navigation