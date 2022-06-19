import React from 'react'

const divStyle = {
    "backgroundColor": "red"
}

function Footer() {
    return (
        <footer className="container">
            <div className="row justify-content-center"> 
                <div className="col-12 d-flex justify-content-around">
                        <a href="https://github.com/H0RSESH0E" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
                        <a href="https://linkedin.com/in/david-baron-web-developer" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
                        <a href="https://stackoverflow.com/users/17479232/h0rsesh0e" rel="noopener noreferrer" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i> Stack Overflow</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer