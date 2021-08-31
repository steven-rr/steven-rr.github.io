import React from 'react'
import FooterCSS from './Footer.module.css'

const Footer = () => {
    return (
        <div className={FooterCSS.containerMain}>
            <div className={FooterCSS.textClass}> © 2021 Steven Rivadeneira. All rights reserved. </div>
        </div>
    )
}

export default Footer
