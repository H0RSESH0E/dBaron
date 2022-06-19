import React from 'react'
// import Cv from 'https://docs.google.com/document/d/1pdng45RDubj9XhWXYtLQFIjbwBGNJLytzFWsDjX0xuY/export?format=pdf';
// import Cv from '../assets/David_Baron_resume.pdf';
import HighlightText from './HighlightText.js';
import { skillsNTech } from './states.js';



function Resume() {
    console.log(skillsNTech);
    return (
        <>
            <section className="main-container container">
                <div className="row d-flex flex-column justify-content-around align-items-center" >
                    <div className="d-flex col-12 flex-column justify-content-start" style={{ maxWidth: '1150px' }}>
                        <h4 style={{ textAlign: 'center' }}>Here is a quick overview of skills I bring to web development roles:</h4>
                        <br></br>
                        {skillsNTech.map((item, i) => (
                            <HighlightText key={item.name} item={item} />

                        ))}

                    </div>

                    <div className="d-flex justify-content-center ">
                        <h5 style={{ textAlign: 'center' }}>Please download my whole web development CV here:</h5>
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