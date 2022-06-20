import React from 'react'
import RandomHighlight from './RandomHighlight.js';
import { skillsNTech } from './states.js';



function Resume() {
    console.log(skillsNTech);
    return (
        <>
            <section className="main-container container">
                <div className="row d-flex flex-column justify-content-around align-items-center" >
                    <div className="d-flex col-12 flex-column justify-content-start" style={{ maxWidth: '1150px' }}>
                        {skillsNTech.map((item, i) => (
                            <RandomHighlight key={item.name} item={item} />

                        ))}

                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center ">
                        <h5 style={{ textAlign: 'center' }}>Please download my CV here:</h5>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <a href="https://docs.google.com/document/d/1pdng45RDubj9XhWXYtLQFIjbwBGNJLytzFWsDjX0xuY/export?format=pdf" download="David_Baron_resume.pdf"><button className="btn btn-primary"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> Download</button></a>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Resume