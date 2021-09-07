import React from 'react'
import ProjectItemCSS from './ProjectItem.module.css'
const ProjectItem1 = ({title, description, bttnList=[], image, heightImgContainer=300}) => {
    return (
        <div className={ProjectItemCSS.projectItemContainer}>
            <div style={{height: heightImgContainer }} className={ProjectItemCSS.imageContainer}>
                <img className = {ProjectItemCSS.image} src= {image}/>
            </div>
            <div className={ProjectItemCSS.textContainer}>
                <div className={ProjectItemCSS.titleClass}> {title}</div>
                <div className={ProjectItemCSS.descriptionClass}> {description}</div>
                {/* optional buttons. only activate if bttnList is nonempty.*/}
                <div className={ `${ProjectItemCSS.buttonContainer} ${ (bttnList.length >0) ? '':ProjectItemCSS.bttnNotActive} `}>
                    {bttnList.map(bttn =>(
                                <a href={bttn.link} download={bttn.downloadIn}  >
                                    <div className={ProjectItemCSS.buttonClass} key={bttn.id}>
                                        {bttn.title}
                                    </div>
                                </a>
                                ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem1
