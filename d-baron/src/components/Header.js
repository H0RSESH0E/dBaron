import React from 'react'
import Navigation from './Navigation.js';

function Header({windowLocations, currentWindow,setCurrentWindow}) {
return(<Navigation windowLocations={windowLocations} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />)
}

export default Header