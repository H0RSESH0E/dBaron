import React from 'react'
import { projectsArr } from './states.js';
console.log(projectsArr);

function Projects() {
    return (
        <section className="main-container container crimson">
            <div className="row justify-content-around">
                {projectsArr.map((project, i) => (
                    <>
                        <div className="d-flex justify-content-start flex-column align-items-center project" style={{width: '300px'}}>
                            <h4 style={{ textAlign: 'center' }}>{project.name}</h4>

                            <img
                                src={require(`../../public/images/Projects/Screenshots/Small/${project.screenshots[0].small[0]}`)}
                                alt={project.name}
                                className="project img-thumbnail"
                                // onClick={() => toggleModal(project, i)}
                                key={project.name}
                            />
                            <p>{project.description}</p>


                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}
export default Projects