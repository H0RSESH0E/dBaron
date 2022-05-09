import React from 'react'



function About() {
    return (
        <section className="body-container container">
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div>A little about me:</div>
                </div>
            </div>
            <br></br>

            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <img className="about" src="https://github.com/H0RSESH0E.png" alt="user avatar" />
                </div>
                <div className="col-12 col-md-9 d-flex align-items-center">
                    <p>
                        I enjoy cooking and carpentry, astrophysics and the humanities.  My first love, Coffee and I, have an open relationship at times.  Listening to Jazz, binging on The Mandalorian or The Expanse or walking my dogs are great ways to spend some time.
                    </p>
                </div>
            </div>
            <br></br>
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center">

                    <p>You can find me on GitHub at:&nbsp;</p><a href='https://github.com/H0RSESH0E'> H0RSESH0E</a>
                </div>
            </div>
        </section>
    )
}
export default About