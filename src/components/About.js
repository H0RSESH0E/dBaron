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
                        I’m a full-stack web developer leveraging an interdisciplinary background to conceive and implement innovative Web3 applications. I recently earned a Certificate in Full Stack Web Development from the University of Toronto, with newly developed skills in Javascript, CSS, responsive design, Node, SQL and REACT.  On the first team project, I was recognized for my morale boosting attitude, insightful analysis and inspirational vision. I’m dedicated to polished and innovative applications that make and maintain high quality user experiences. Keeping my team's experience in the forefront of my mind, I consistently updated our Trello with pertinent contributions and I kept regular communications happening in our Slack channels.  This made us adaptable; able to adjust quickly to the challenges each one of us faced. I look forward to contributing my simultaneously holistic and analytical creative approach to a high-performance and goal-oriented team setting trends on the world wide web.
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