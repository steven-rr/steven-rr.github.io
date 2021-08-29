import React from 'react'
import ContactCSS from './Contact.module.css'
function Contact() {
    return (
        <div className = {ContactCSS.containerMain}>
             <div className = {ContactCSS.subcontainerMain}>
                 <div className= {ContactCSS.headerClass}>Reach Out Today. </div>
                 <div className ={ContactCSS.tilesContainerClass}>
                    <div className={ContactCSS.tileClass}>
                        <div > Image Here</div>
                        <div> Email </div>
                        <div> steven.r.riva@gmail.com</div>
                    </div>
                    <div className={ContactCSS.tileClass}>
                        <div > Image Here</div>
                        <div> Phone </div>
                        <div> +1 (786) 227 4198 </div>
                    </div>
                    <div className={ContactCSS.tileClass}>
                        <div > Image Here</div>
                        <div> Socials </div>
                        <div> Github, LinkedIn</div>
                    </div>
                </div>
             </div>
             
        </div>
    )
}

export default Contact
