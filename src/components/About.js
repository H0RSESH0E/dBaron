import React from 'react'



function About() {
    return (
        <section className="main-container container d-flex flex-column justify-content-center">


            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <img className="about" src={require(`../assets/Toroid.png`)} alt="user avatar" title="H0RSESH0E" />
                </div>
                <div className="col-12 col-md-9 d-flex align-items-center flex-column">
                    <div className="col-12 d-flex justify-content-start ">
                        <h4>A little about me:</h4>
                    </div>
                    <p>
                        I’m a full-stack web developer leveraging an interdisciplinary background to conceive and implement innovative applications. I recently earned a Certificate in Full Stack Web Development from the University of Toronto with newly developed skills in Javascript, CSS, responsive design, Node, MongoDB, MySQL and React.  Recognized by team members for my morale-boosting attitude, insightful analysis and inspirational vision, I’m dedicated to polished and innovative applications that make and maintain high quality user experiences. Keeping my team's experience in the forefront of my mind, I strive to communicate salient details that highlight opportunity.  I’m always looking forward to contributing my simultaneously holistic and analytical creative approach to a high-performance and goal-oriented team.
                    </p>
                    <p>
                        This application was built using the npm create-react-app, npm bootstrap and npm jest libraries.  It was deployed to GitHub using the npm library gh-pages.  It can also be accessed as an app on Heroku where MongoDB, Express and Node have also been utilized to connect to an Atlas database. 
                    </p>
                    <p>
                        I enjoy cooking and carpentry, astrophysics and the humanities.  My first love, Coffee and I, have an open relationship at times.  Listening to Jazz, binging on The Mandalorian or The Expanse or walking my dogs are great ways to spend some time.
                    </p>
                </div>
            </div>

        </section>
    )
}
export default About