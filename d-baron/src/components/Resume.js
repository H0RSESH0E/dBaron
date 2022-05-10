import React from 'react'

function Resume() {
    return (
        <>
            <section className="main-container container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column  justify-content-center">
                        <h4 style={{ textAlign: 'center' }}>Here is a quick overview of skills I bring to web development roles:</h4>
                        <br></br>
                        <p>Front-End: HTML5, CSS, Bootstrap, JavaScript, jQuery, AJAX, ReactJS, Handlebars.js</p>
                        <p>Back-End: Node.js, Express.js, MySQL, Sequelize ORM, MongoDB, Mongoose ODM, Insomnia</p>
                        <p>Concepts: APIs, REST, MVC, TDD, JSON, XML</p>
                        <p>Tools: Git, Github, GitLab, Firebase, Heroku, JawsDB, VS Code5</p>
                        <p>Certifications: Site Master Line Sweep Certification - Anritsu, The Art of Encouragement - Ontario Society of Adlerian Psychology</p>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <h5 style={{ textAlign: 'center' }}>Please download my whole web development CV here:</h5>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <a href="../assets/David_Baron_resume.pdf" download="David_Baron_resume.pdf"><button class="btn btn-primary"><i class="fa fa-download"></i> Download</button></a>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Resume