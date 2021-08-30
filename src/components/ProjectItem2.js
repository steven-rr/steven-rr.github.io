import React from 'react'
import ProjectItemCSS from './ProjectItem.module.css'

const ProjectItem2 = ({title, description, image}) => {
    return (
        <div className={ProjectItemCSS.projectItemContainer}>
            <div className={ProjectItemCSS.textContainer}>
                <div class={ProjectItemCSS.titleClass}> {title}</div>
                <div class={ProjectItemCSS.descriptionClass}> {description}</div>
                {/* <div> Optional Buttons.</div> */}
            </div>
            <div className={ProjectItemCSS.imageContainer}>
                <img className = {ProjectItemCSS.image} src= {image}/>
            </div>
        </div>
    )
}

export default ProjectItem2
