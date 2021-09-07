import React from 'react'
import ProjectItemCSS from './ProjectItem.module.css'
import DL_Proj_PDF from "../StevenRiva_DL_Project.pdf"

const ProjectItem2 = ({title, description, bttnList=[],image, heightImgContainer=300}) => {
    return (
        <div className={ProjectItemCSS.projectItemContainer}>
            <div className={ProjectItemCSS.textContainer}>
                <div className={ProjectItemCSS.titleClass}> {title}</div>
                <div className={ProjectItemCSS.descriptionClass}> {description}</div>
                {/* optional buttons. only activate if bttnList is nonempty.*/}
                <div className={ `${ProjectItemCSS.buttonContainer} ${ (bttnList.length >0) ? '':ProjectItemCSS.bttnNotActive} `}>
                    {bttnList.map(bttn =>(
                                <a href={bttn.link} key={bttn.id} download={bttn.downloadIn}  >
                                    <div className={ProjectItemCSS.buttonClass} key={bttn.id}>
                                        {bttn.title}
                                    </div>
                                </a>
                                ))}
                </div>
            </div>
            <div style={{height: heightImgContainer }} className={ProjectItemCSS.imageContainer}>
                <img className = {ProjectItemCSS.image} src= {image}/>
            </div>
        </div>
    )
}

export default ProjectItem2