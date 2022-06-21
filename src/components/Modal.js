import React from 'react';
import RandomHighlight from './RandomHighlight.js';


function Modal({ projectObject, onClose }) {
    const { name, description, readmeLink, deploymentLink, screenshots } = projectObject;

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <RandomHighlight key={{ name: name }} item={{ name: name }} />
                <div className="modal-image-row">
                    <div className="modal-image-col">
                        <img
                            src={require(`../../public/images/Projects/Screenshots/Large/${screenshots[1].large[0]}`)}
                            alt={name}
                            className="project img-large"
                            key={name}
                        />
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <div className="col-6 d-flex justify-content-center">

                        <a href={deploymentLink} title="See the deployment" rel="noopener noreferrer" target="_blank">
                            Deployment Link
                        </a>
                    </div>

                    <div className="col-6 d-flex justify-content-center">
                        <a href={readmeLink} title="README.md" rel="noopener noreferrer" target="_blank">README.md <i className="fa fa-github" aria-hidden="true"></i></a>

                    </div>
                </div>
                <br></br>

                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <p style={{ textAlign: 'center', width: '350px' }}>{description}</p>
                    </div>
                </div>
                <br></br>

                <button className="modal-btn btn btn-primary" type="button" onClick={onClose}><i className="fa fa-window-close" aria-hidden="true"></i> Close
                </button>
            </div>
        </div>
    )

}

export default Modal;