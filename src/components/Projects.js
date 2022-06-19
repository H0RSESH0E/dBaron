import React, { useState } from 'react'
import { projectsArr, paintStrokes, skillsNTech } from './states.js';
import Modal from './Modal.js';
import HighlightText from './HighlightText.js';

console.log(projectsArr);

function randPaint() {
    let i = Math.floor(Math.random() * 6)
    return require(`../../public/images/${paintStrokes[i].fileName}`);
}

function Projects() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectObject, setProjectObject] = useState();

    function toggleModal(project) {
        setIsModalOpen(!isModalOpen);
        setProjectObject(project);
    }

    return (
        <section className="main-container container-xl">
            {isModalOpen && <Modal projectObject={projectObject} onClose={toggleModal} />}

            <div className="row justify-content-around">
                {projectsArr.map((project, i) => (
                    <>

                        <div className="portfolio-item d-flex justify-content-start flex-column align-items-center " style={{ width: '350px' }}>

                            <div className="portfolio-item-header row d-flex justify-content-around">
                                <div className="portfolio-item-title col-9">
                                    <HighlightText key={project.name} item={project} />
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <a href={project.readmeLink} title="See the repo" rel="noopener noreferrer" target="_blank">
                                        <h3><i className="fa fa-github-alt" aria-hidden="true"></i></h3>
                                    </a>
                                </div>
                            </div>

                            <img
                                src={require(`../../public/images/Projects/Screenshots/Small/${project.screenshots[0].small[0]}`)}
                                alt={project.name}
                                className="project img-thumbnail"
                                onClick={() => toggleModal(project, i)}
                                key={project.name}
                            />
                            <div className="click-to-enlarge">Click to Enlarge</div>
                            {/* <a href={project.deploymentLink} title="See the deployment" rel="noopener noreferrer" target="_blank">
                                Deployment Link
                            </a> */}
                   
                            <div style={{ width: '200px' }}>
                                <p className="project-description" style={{ textAlign: 'center' }} >{project.description}</p>
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}
export default Projects