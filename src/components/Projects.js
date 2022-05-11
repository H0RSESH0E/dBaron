import React, { useState } from 'react'
import { projectsArr } from './states.js';
import Modal from './Modal.js';
console.log(projectsArr);

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
                        <div className="d-flex justify-content-start flex-column align-items-center " style={{ width: '350px' }}>

                            <div className="row d-flex justify-content-around">
                                <div className="col-9">
                                    <h5 style={{ textAlign: 'start', width: '150px' }}>{project.name}</h5>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <a href={project.readmeLink} title="See the repo" rel="noopener noreferrer" target="_blank">
                                        <h5><i class="fa fa-github-alt" aria-hidden="true"></i></h5>
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
                            <a href={project.deploymentLink} title="See the deployment" rel="noopener noreferrer" target="_blank">
                                Deployment Link
                            </a>
                            <br></br>
                            <div style={{ width: '200px' }}>
                                <p style={{ textAlign: 'center' }} >{project.description}</p>
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}
export default Projects