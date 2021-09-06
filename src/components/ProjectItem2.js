import React from 'react'
import ProjectItemCSS from './ProjectItem.module.css'
import DL_Proj_PDF from "../StevenRiva_DL_Project.pdf"

const ProjectItem2 = ({title, description, bttnList=[],image}) => {
    return (
        <div className={ProjectItemCSS.projectItemContainer}>
            <div className={ProjectItemCSS.textContainer}>
                <div className={ProjectItemCSS.titleClass}> {title}</div>
                <div className={ProjectItemCSS.descriptionClass}> {description}</div>
                {/* optional buttons */}
                <div className={ProjectItemCSS.buttonContainer}>
                    {bttnList.map(bttn =>(
                                <a href={bttn.link} download={bttn.downloadIn}  >
                                    <div className={ProjectItemCSS.buttonClass} key={bttn.id}>
                                        {bttn.title}
                                    </div>
                                </a>
                                ))}
                </div>
            </div>
            <div className={ProjectItemCSS.imageContainer}>
                <img className = {ProjectItemCSS.image} src= {image}/>
            </div>
        </div>
    )
}

export default ProjectItem2
