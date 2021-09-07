import React from 'react'
import ContactCSS from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// TODO: gray out and on hover make it light up. also add color to title and to boxes.
function Contact() {
    return (
        <div id="contact">
            <hr className={ContactCSS.hrClass}></hr>
            <div className={ContactCSS.containerMain}>
                <div className = {ContactCSS.subcontainerMain}>
                    <div className= {ContactCSS.headerClass}>Reach Out Today. </div>
                    <div className ={ContactCSS.tilesContainerClass}>
                        <div className={ContactCSS.tileClass}>
                            <div className={ContactCSS.tileHeader}> Email </div>
                            <div className={ContactCSS.tileContentContainer}><a className={ContactCSS.socialMediaMainA} href="mailto:steven.r.riva@gmail.com">steven.r.riva@gmail.com</a></div>
                        </div>
                        <div className={ContactCSS.tileClass}>
                            <div className={ContactCSS.tileHeader}> Phone </div>
                            <div className={ContactCSS.tileContentContainer}><a className={ContactCSS.socialMediaMainA} href="tel:+17862274198"> +1 (786) 227 4198</a></div>
                        </div>
                        <div className={ContactCSS.tileClass}>
                            <div className={ContactCSS.tileHeader}> Socials </div>
                            <div className={ContactCSS.tileContentContainer}> 
                                <ul className = {ContactCSS.socialMediaMainUl}>
                                    <li><a className={ContactCSS.socialMediaMainAnchorIcons} href = "https://www.facebook.com/stevenator9001/" ><FontAwesomeIcon icon={['fab','facebook-f']} size='lg'/></a></li>
                                    <li><a className={ContactCSS.socialMediaMainAnchorIcons} href = "https://github.com/steven-rr" ><FontAwesomeIcon icon={['fab','github']} size='lg'/></a></li>
                                    <li><a className={ContactCSS.socialMediaMainAnchorIcons} href = "https://www.linkedin.com/in/steven-rivadeneira" ><FontAwesomeIcon icon={['fab','linkedin-in']} size='lg'/></a></li>
                                    <li><a className={ContactCSS.socialMediaMainAnchorIcons} href = "https://www.instagram.com/steven__rr/" ><FontAwesomeIcon icon={['fab','instagram']} size='lg'/></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*insert social media items here*/}
                    {/* <div className = "social-media-main">
                        <ul className = "social-media-main-ul">
                            <li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.facebook.com/stevenator9001/" ><FontAwesomeIcon icon={['fab','facebook-f']} size='lg'/></a></li>
                            <li className= "social-media-main-li"><a className="social-media-main-a" href = "https://github.com/steven-rr" ><FontAwesomeIcon icon={['fab','github']} size='lg'/></a></li>
                            <li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.linkedin.com/in/steven-rivadeneira" ><FontAwesomeIcon icon={['fab','linkedin-in']} size='lg'/></a></li>
                            <li className= "social-media-main-li"><a className="social-media-main-a" href = "https://www.instagram.com/steven__rr/" ><FontAwesomeIcon icon={['fab','instagram']} size='lg'/></a></li>
                        </ul>
                    </div> */}

                </div>
            </div>
            <hr className={ContactCSS.hrClass}></hr>
        </div>
    )
}

export default Contact
