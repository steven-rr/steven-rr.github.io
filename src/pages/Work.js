import React from 'react'
import WorkCSS from './Work.module.css'

function Work() {
    return (
        <div className={WorkCSS.containerMain}>
            <div className={WorkCSS.subcontainerMain}>
                <div className={WorkCSS.headerClass}>Portfolio</div>
                <div className={WorkCSS.itemClass}>hi portfolio items here, to be continued...</div>
            </div>
        </div>
    )
}

export default Work
