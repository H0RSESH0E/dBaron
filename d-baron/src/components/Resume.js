import React from 'react'

function Resume() {
    return (
        <>
            <section className="main-container container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center">
                        <h4 style={{ textAlign: 'center' }}>Interested in my Web Development CV?</h4>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <h5 style={{ textAlign: 'center' }}>Please feel free to download the pdf:</h5>
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