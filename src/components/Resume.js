import React from 'react'
import Cv from '../assets/David_Baron_resume.pdf';

function Resume() {
    return (
        <>
            <section className="main-container container">
                <div className="row d-flex flex-column justify-content-around align-items-center" >
                    <div className="d-flex col-12 flex-column justify-content-start" style={{ maxWidth: '850px' }}>
                        <h4 style={{ textAlign: 'center' }}>Here is a quick overview of skills I bring to web development roles:</h4>
                        <br></br>
                        <p><b>Front-End:</b> HTML5, CSS, Bootstrap, JavaScript, jQuery, AJAX, ReactJS, Handlebars.js</p>
                        <p><b>Back-End:</b> Node.js, Express.js, MySQL, Sequelize ORM, MongoDB, Mongoose ODM, Insomnia</p>
                        <p><b>Concepts:</b> APIs, REST, MVC, TDD, JSON, XML</p>
                        <p><b>Tools:</b> Git, Github, GitLab, Firebase, Heroku, JawsDB, VS Code5</p>
                        <p><b>Certifications:</b> Site Master Line Sweep Certification - Anritsu, The Art of Encouragement - Ontario Society of Adlerian Psychology</p>
                    </div>
                    
                    <div className="d-flex justify-content-center ">
                        <h5 style={{ textAlign: 'center' }}>Please download my whole web development CV here:</h5>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <a href={Cv} download="David_Baron_resume.pdf"><button class="btn btn-primary"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download</button></a>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Resume