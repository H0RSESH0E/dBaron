import React from 'react';
import RandomHighlight from './RandomHighlight.js';


function Modal({ projectObject, onClose }) {
    console.log('Modal: proObj: ', projectObject);
    const { name, description, readmeLink, deploymentLink, screenshots } = projectObject;

    return (
        <div className="modal-backdrop">
                            <button className="modal-btn btn btn-primary" type="button" onClick={onClose}><i className="fa fa-window-close" aria-hidden="true"></i> Close
                            </button>
            <div className="modal-mobile-spacer"></div>
            <div className="modal-container">
                <RandomHighlight key={name} item={{ name: name }} />
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
                <div className="modal-links-div">
                    <a href={deploymentLink} title="See the deployment" rel="noopener noreferrer" target="_blank">
                        Deployment Link
                    </a>
                    <a href={readmeLink} title="README.md" rel="noopener noreferrer" target="_blank">README.md <i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
                <div className="modal-description-div">
                    <p >{description}</p>
                </div>
            </div>
        </div>
    )

}

export default Modal;