import React from 'react'



function About() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div>A little about me:</div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <img src="https://github.com/H0RSESH0E.png" alt="user avatar" />
                </div>
                <div className="col-12 col-md-9 d-flex align-items-center">

                    <text>
                        I enjoy cooking and carpentry, astrophysics and the humanities.  My first love, Coffee and I, have an open relationship at times.  Listening to Jazz, binging on The Mandalorian or The Expanse or walking my dogs are great ways to spend some time.
                    </text>
                </div>

            </div>
            <br></br>
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center">

                    <text>You can find me on GitHub at:&nbsp;</text><a href='https://github.com/H0RSESH0E'> H0RSESH0E</a>
                </div>
            </div>

        </div>
    )
}
export default About