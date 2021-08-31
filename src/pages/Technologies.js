import React from 'react'
import TechnologiesCSS from './Technologies.module.css'

const Technologies = () => {
    return (
        <div className={TechnologiesCSS.containerMain}>
            <hr className={TechnologiesCSS.hrClass}></hr>
            <div className={TechnologiesCSS.subcontainerMain}>
                <div className={TechnologiesCSS.headerClass}>Technologies</div>
            </div>
        </div>
    )
}

export default Technologies
