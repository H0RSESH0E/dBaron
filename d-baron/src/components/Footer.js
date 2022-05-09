import React from 'react'

const divStyle = {
    "backgroundColor": "red"
}

function Footer() {
    return (
        <footer className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-flex">
                        <div>GitHub</div>
                        <div>LinkedIn</div>
                        <div>Stack Overflow</div>
                </div>
            </div>
        </footer>

    )
}

export default Footer