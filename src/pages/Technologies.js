import React from 'react'
import TechnologiesCSS from './Technologies.module.css'

const Technologies = () => {
    return (
        <div className={TechnologiesCSS.containerMain} id="technologies">
            <hr className={TechnologiesCSS.hrClass}></hr>
            <div className={TechnologiesCSS.subcontainerMain}>
                <div className={TechnologiesCSS.headerClass}>Technologies</div>
                <div className = {TechnologiesCSS.skillsClass} > 
                    <ul className={TechnologiesCSS.ulClass}>
                        <li>C++</li>
                        <li>Python</li>
                        <li>React.JS</li>
                        <li>PyTorch</li>
                        <li>Keras</li>
                        <li>Numpy</li>
                        <li>Pandas</li>
                        <li>HTLM5/CSS3</li>
                        <li>Javascript</li>
                    </ul>
                    <ul className={TechnologiesCSS.ulClass}>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>SQL</li>
                        <li>Matlab</li>
                        <li>Mathematica</li>
                        <li>Git</li>
                        <li>Agile Methodology </li>
                        <li>Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Technologies
