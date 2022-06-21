import React, { useState } from 'react'
import { projectsArr, paintStrokes, skillsNTech } from './states.js';
import Modal from './Modal.js';
import RandomHighlight from './RandomHighlight.js';

console.log(projectsArr);
const body = document.querySelector("body");

function Projects() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectObject, setProjectObject] = useState();

    function toggleModal(project) {
        console.log('QUTE! ', project);
        setIsModalOpen(!isModalOpen);
        setProjectObject(project);
        (!isModalOpen) ? body.style.overflow = "hidden" : body.style.overflow = "auto";
    }

    return (
        <section className="main-container container-xl">
            {isModalOpen && <Modal key={'modal'} projectObject={projectObject} onClose={toggleModal} />}

            <div className="row justify-content-around">
                {projectsArr.map((project, i) => (
                    <>

                        <div key={project.name + "1"} className="portfolio-item d-flex justify-content-start flex-column align-items-center " style={{ width: '350px' }}>

                            <div key={project.name + "2"} className="portfolio-item-header row d-flex justify-content-around">
                                <div key={project.name + "3"} className="portfolio-item-title col-9">
                                    <RandomHighlight key={project.name + "4"} item={project} />
                                </div>
                                <div key={project.name + "5"} className="col-3 d-flex justify-content-center align-items-center">
                                    <a key={project.name + "6"} href={project.readmeLink} title="See the repo" rel="noopener noreferrer" target="_blank">
                                        <h3 key={project.name + "7"}><i key={project.name + "8"} className="fa fa-github-alt" aria-hidden="true"></i></h3>
                                    </a>
                                </div>
                            </div>

                            <img
                                src={require(`../../public/images/Projects/Screenshots/Small/${project.screenshots[0].small[0]}`)}
                                alt={project.name}
                                className="project img-thumbnail"
                                onClick={() => toggleModal(project, i)}
                                key={project.name + "9"}
                            />
                            <div key={project.name + "10"} className="click-to-enlarge">Click to Enlarge</div>
                            <div key={project.name + "11"} style={{ width: '200px' }}>
                                <p key={project.name + "12"} className="project-description" style={{ textAlign: 'center' }} >{project.description}</p>
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}
export default Projects