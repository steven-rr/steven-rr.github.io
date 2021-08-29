import React from 'react'
import ProjectsCSS from './Projects.module.css'
import ProjectItem from '../components/ProjectItem'
import simpleSim from '../simpleSim.png'

function Projects() {
    return (
        <div>
            <div className={ProjectsCSS.headerClass}>Projects</div>
            <div className={ProjectsCSS.containerMain}>
                <div className={ProjectsCSS.subcontainerMain}>
                    <ProjectItem
                    title= "C++ Simulation"
                    description= "Simulation of 6-DOF physics of UAV with self-designed flight controls"
                    image = {simpleSim}
                    />
                    {/* <div className={ProjectsCSS.itemClass}>hi project items here, to be continued...</div> */}
                </div>
            </div>
        </div>
        
    )
}

export default Projects
