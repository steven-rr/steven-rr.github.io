import React from 'react'
import NavbarCSS from './Navbar.module.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import resumePDF from "../Resume.pdf"

const Navbar = () => {
    return (
        <div className={NavbarCSS.containerMain}>
                <div className={NavbarCSS.navHome}>
                    <Link  >HOME</Link> 
                </div>

                <div className={NavbarCSS.navMain}>
                    <ul className={NavbarCSS.navMainUl}>
                        <li><Link to="about"  spy={true} smooth='easeInQuart'>ABOUT</Link></li>
                        <li><Link to="timeline"  spy={true}  smooth='easeInQuart'>TIMELINE</Link></li>
                        <li><Link to="projects"  spy={true}  smooth='easeInQuart' >PROJECTS</Link></li>
                        <li><Link to="contact"  spy={true}  smooth='easeInQuart' >CONTACT</Link></li>
                        <li><a href={resumePDF} download="StevenRivadeneiraResume.pdf">RESUME </a></li>
                    </ul>
                </div>
                
        </div>
    )
}

export default Navbar
