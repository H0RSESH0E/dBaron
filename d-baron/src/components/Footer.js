import React from 'react'

const divStyle = {
    "backgroundColor": "red"
}

function Footer() {
    return (
        <footer className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-around">
                        <a href="https://github.com/H0RSESH0E" rel="noopener noreferrer" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/david-baron-714370226/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                        <a href="https://stackoverflow.com/users/17479232/h0rsesh0e" rel="noopener noreferrer" target="_blank">Stack Overflow</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer